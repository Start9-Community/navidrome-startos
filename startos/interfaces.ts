import { store } from './fileModels/store.json'
import { i18n } from './i18n'
import { sdk } from './sdk'
import { uiHostId, uiPort } from './utils'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  const multi = sdk.MultiHost.of(effects, uiHostId)
  const origin = await multi.bindPort(uiPort, {
    protocol: 'http',
    preferredExternalPort: 80,
  })

  const ui = sdk.createInterface(effects, {
    name: i18n('Web Interface'),
    id: 'ui',
    description: i18n('The Navidrome web player'),
    type: 'ui',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '',
    query: {},
  })

  // Same origin and port as the web UI; split out so a client app gets its own
  // copyable URL.
  const api = sdk.createInterface(effects, {
    name: i18n('Subsonic API'),
    id: 'api',
    description: i18n(
      'Subsonic-compatible API for mobile and desktop music apps',
    ),
    type: 'api',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '',
    query: {},
  })

  const interfaces = [ui, api]

  // Mounted at /jellyfin on the same port, and only when the setting is on.
  if ((await store.read((s) => s.jellyfinEnabled).const(effects)) === true) {
    interfaces.push(
      sdk.createInterface(effects, {
        name: i18n('Jellyfin API'),
        id: 'jellyfin',
        description: i18n('Jellyfin-compatible API for Jellyfin music clients'),
        type: 'api',
        masked: false,
        schemeOverride: null,
        username: null,
        path: '/jellyfin',
        query: {},
      }),
    )
  }

  return [await origin.export(interfaces)]
})
