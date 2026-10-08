import { T } from '@start9labs/start-sdk'
import { store } from './fileModels/store.json'
import {
  filebrowserDescription,
  multiScrobblerDescription,
  nextcloudDescription,
  nextexplorerDescription,
} from './manifest/i18n'
import { sdk } from './sdk'

const isSource = async (
  effects: T.Effects,
  source: 'nextexplorer' | 'filebrowser' | 'nextcloud',
) =>
  !!(await store.read((s) => s.mediaSources).const(effects))?.includes(source)

export const dependencies = sdk.Dependencies.of()
  .addDependency(
    sdk.Dependency.optional('nextexplorer', {
      description: nextexplorerDescription,
      metadata: {
        title: 'NextExplorer',
        icon: 'https://raw.githubusercontent.com/Start9Labs/nextexplorer-startos/04f7ecbfc31ad2205e0222dd7568fb881aa06c79/icon.svg',
      },
      versionRange: '>=2.2.7:0',
      kind: 'exists',
      enabled: ({ effects }) => isSource(effects, 'nextexplorer'),
    }),
  )
  .addDependency(
    sdk.Dependency.optional('filebrowser', {
      description: filebrowserDescription,
      metadata: {
        title: 'FileBrowser Quantum',
        icon: 'https://raw.githubusercontent.com/Start9Labs/filebrowser-quantum-startos/e936a6c85a97b930b43cad5e9c0dd4898a2df567/icon.svg',
      },
      versionRange: '>=2.63.18:3',
      kind: 'exists',
      enabled: ({ effects }) => isSource(effects, 'filebrowser'),
    }),
  )
  .addDependency(
    sdk.Dependency.optional('nextcloud', {
      description: nextcloudDescription,
      metadata: {
        title: 'Nextcloud',
        icon: 'https://raw.githubusercontent.com/Start9Labs/nextcloud-startos/80cf5c9b8bc8877df282061fb3dc187b34246656/icon.svg',
      },
      versionRange: '>=33.0.6:1',
      kind: 'exists',
      enabled: ({ effects }) => isSource(effects, 'nextcloud'),
    }),
  )
  .addDependency(
    sdk.Dependency.optional('multi-scrobbler', {
      description: multiScrobblerDescription,
      metadata: {
        title: 'Multi-Scrobbler',
        icon: 'https://raw.githubusercontent.com/Start9-Community/multi-scrobbler-startos/refs/heads/master/icon.svg',
      },
      versionRange: '>=0.14.2:0',
      kind: 'running',
      healthChecks: ['multi-scrobbler'],
      enabled: async ({ effects }) =>
        (await store.read((s) => s.scrobbleToMultiScrobbler).const(effects)) ===
        true,
    }),
  )
