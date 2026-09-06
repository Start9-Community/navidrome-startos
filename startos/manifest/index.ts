import { setupManifest } from '@start9labs/start-sdk'
import {
  filebrowserDescription,
  long,
  multiScrobblerDescription,
  nextcloudDescription,
  short,
} from './i18n'

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
      source: { dockerTag: 'deluan/navidrome:0.63.2' },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {
    filebrowser: {
      description: filebrowserDescription,
      optional: true,
      metadata: {
        title: 'FileBrowser Quantum',
        icon: 'https://raw.githubusercontent.com/Start9Labs/filebrowser-quantum-startos/e936a6c85a97b930b43cad5e9c0dd4898a2df567/icon.svg',
      },
    },
    nextcloud: {
      description: nextcloudDescription,
      optional: true,
      metadata: {
        title: 'Nextcloud',
        icon: 'https://raw.githubusercontent.com/Start9Labs/nextcloud-startos/80cf5c9b8bc8877df282061fb3dc187b34246656/icon.svg',
      },
    },
    'multi-scrobbler': {
      description: multiScrobblerDescription,
      optional: true,
      metadata: {
        title: 'Multi-Scrobbler',
        icon: 'https://raw.githubusercontent.com/Start9-Community/multi-scrobbler-startos/refs/heads/master/icon.svg',
      },
    },
  },
})
