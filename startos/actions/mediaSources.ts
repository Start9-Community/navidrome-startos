import { T } from '@start9labs/start-sdk'
import { manifest as filebrowserManifest } from 'filebrowser-startos/startos/manifest'
import { manifest as nextcloudManifest } from 'nextcloud-startos/startos/manifest'
import { store } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

const { InputSpec, Value } = sdk

export const inputSpec = InputSpec.of({
  mediaSources: Value.multiselect({
    name: i18n('Music Sources'),
    values: {
      filebrowser: i18n('FileBrowser Quantum'),
      nextcloud: i18n('Nextcloud'),
    },
    default: [],
    minLength: 1,
  }),
  filebrowserSubpath: Value.text({
    name: i18n('FileBrowser Quantum Subfolder'),
    description: i18n(
      'Path within FileBrowser Quantum\'s storage to scan for music, relative to its root (e.g. "Music"). Required when FileBrowser Quantum is selected above.',
    ),
    required: false,
    default: null,
    placeholder: 'Music',
  }),
  nextcloudSubpath: Value.text({
    name: i18n('Nextcloud Subfolder'),
    description: i18n(
      'Path to scan for music, relative to the Nextcloud volume root — which is Nextcloud\'s webroot, so this must start with "data/" followed by your username and "files/" (e.g. "data/admin/files/Music"). Required when Nextcloud is selected above.',
    ),
    required: false,
    default: null,
    placeholder: 'data/admin/files/Music',
  }),
})

export const mediaSources = sdk.Action.withInput(
  'media-sources',

  async ({ effects }) => ({
    name: i18n('Select Music Sources'),
    description: i18n('Service(s) Navidrome uses to access your music library'),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  inputSpec,

  async ({ effects }) => {
    const current = await store.read().const(effects)
    return {
      mediaSources: current?.mediaSources || [],
      filebrowserSubpath: current?.filebrowserSubpath || null,
      nextcloudSubpath: current?.nextcloudSubpath || null,
    }
  },

  async ({ effects, input }) => {
    const filebrowserSubpath = input.filebrowserSubpath?.trim() || null
    const nextcloudSubpath = input.nextcloudSubpath?.trim() || null

    if (input.mediaSources.includes('filebrowser') && !filebrowserSubpath) {
      throw new Error(
        i18n(
          'A FileBrowser Quantum subfolder is required when FileBrowser Quantum is selected as a music source.',
        ),
      )
    }
    if (input.mediaSources.includes('nextcloud') && !nextcloudSubpath) {
      throw new Error(
        i18n(
          'A Nextcloud subfolder is required when Nextcloud is selected as a music source.',
        ),
      )
    }

    if (input.mediaSources.includes('filebrowser')) {
      await checkSubpathExists(effects, {
        label: i18n('FileBrowser Quantum'),
        subpath: filebrowserSubpath!,
        mount: sdk.Mounts.of().mountDependency<typeof filebrowserManifest>({
          dependencyId: 'filebrowser',
          volumeId: 'data',
          subpath: filebrowserSubpath!,
          mountpoint: '/check',
          readonly: true,
        }),
      })
    }
    if (input.mediaSources.includes('nextcloud')) {
      await checkSubpathExists(effects, {
        label: i18n('Nextcloud'),
        subpath: nextcloudSubpath!,
        mount: sdk.Mounts.of().mountDependency<typeof nextcloudManifest>({
          dependencyId: 'nextcloud',
          volumeId: 'nextcloud',
          subpath: nextcloudSubpath!,
          mountpoint: '/check',
          readonly: true,
        }),
      })
    }

    await store.merge(effects, {
      mediaSources: input.mediaSources,
      filebrowserSubpath,
      nextcloudSubpath,
    })
  },
)

// Bind-mounting a nonexistent subpath fails outright — the OS creates the mount
// target, never the source — which makes a throwaway mount an existence check.
async function checkSubpathExists(
  effects: T.Effects,
  {
    label,
    subpath,
    mount,
  }: {
    label: string
    subpath: string
    mount: ReturnType<typeof sdk.Mounts.of>
  },
) {
  try {
    await sdk.SubContainer.withTemp(
      effects,
      { imageId: 'navidrome' },
      mount,
      'check-subpath',
      async () => {},
    )
  } catch {
    throw new Error(
      i18n(
        'Could not find "${subpath}" in ${label}. Check the path and that it\'s installed, then try again.',
        { label, subpath },
      ),
    )
  }
}
