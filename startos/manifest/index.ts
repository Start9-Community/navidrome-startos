import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'navidrome',
  title: 'Navidrome',
  license: 'GPL-3.0',
  packageRepo: 'https://github.com/Start9-Community/navidrome-startos',
  upstreamRepo: 'https://github.com/navidrome/navidrome',
  marketingUrl: 'https://www.navidrome.org',
  donationUrl: 'https://github.com/sponsors/deluan',
  description: { short, long },
  volumes: ['main'],
  images: {
    navidrome: {
      // Confirmed amd64 + arm64 present 2026-09-16.
      source: { dockerTag: 'deluan/navidrome:0.64.1' },
      arch: ['x86_64', 'aarch64'],
    },
  },
})
