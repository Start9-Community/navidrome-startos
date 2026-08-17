import { store } from './fileModels/store.json'
import { sdk } from './sdk'

export const setDependencies = sdk.setupDependencies(async ({ effects }) => {
  const { mediaSources = [], scrobbleToMultiScrobbler } =
    (await store.read().const(effects)) || {}

  return {
    ...(mediaSources.includes('filebrowser') && {
      filebrowser: { kind: 'exists', versionRange: '>=2.63.18:3' },
    }),
    ...(mediaSources.includes('nextcloud') && {
      nextcloud: { kind: 'exists', versionRange: '>=33.0.6:1' },
    }),
    ...(scrobbleToMultiScrobbler && {
      'multi-scrobbler': {
        kind: 'running',
        versionRange: '>=0.14.2:0',
        healthChecks: ['multi-scrobbler'],
      },
    }),
  }
})
