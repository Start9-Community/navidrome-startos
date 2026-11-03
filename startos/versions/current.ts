import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.64.2:3',
  releaseNotes: {
    en_US:
      'Updates the StartOS SDK to 3.1.1. Clarifies that scrobbling to Multi-Scrobbler requires clearing its Web UI password.',
    es_ES:
      'Actualiza el SDK de StartOS a 3.1.1. Aclara que para enviar scrobbles a Multi-Scrobbler hay que borrar su contraseña de la interfaz web.',
    de_DE:
      'Aktualisiert das StartOS-SDK auf 3.1.1. Stellt klar, dass zum Scrobbeln an Multi-Scrobbler dessen Weboberflächen-Passwort gelöscht werden muss.',
    pl_PL:
      'Aktualizuje SDK StartOS do 3.1.1. Wyjaśnia, że przesyłanie scrobbli do Multi-Scrobbler wymaga usunięcia jego hasła interfejsu webowego.',
    fr_FR:
      'Met à jour le SDK StartOS vers la version 3.1.1. Précise que l’envoi de scrobbles à Multi-Scrobbler nécessite d’effacer son mot de passe de l’interface web.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
