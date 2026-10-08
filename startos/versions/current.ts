import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.64.1:1',
  releaseNotes: {
    en_US: `- Select Music Sources explains each source, and the NextExplorer subfolder starts with one of NextExplorer's locations.
- Configure Navidrome's Log Level explains each level.`,
    es_ES: `- Seleccionar Fuentes de Música explica cada fuente, y la subcarpeta de NextExplorer empieza por una de las ubicaciones de NextExplorer.
- El Nivel de registro de Configurar Navidrome explica cada nivel.`,
    de_DE: `- Musikquellen auswählen erklärt jede Quelle, und der NextExplorer-Unterordner beginnt mit einem der Speicherorte von NextExplorer.
- Die Protokollstufe in „Navidrome konfigurieren“ erklärt jede Stufe.`,
    pl_PL: `- Wybierz źródła muzyki wyjaśnia każde źródło, a podfolder NextExplorer zaczyna się od jednej z lokalizacji NextExplorer.
- Poziom logowania w akcji Skonfiguruj Navidrome wyjaśnia każdy poziom.`,
    fr_FR: `- Sélectionner les sources de musique explique chaque source, et le sous-dossier NextExplorer commence par l'un des emplacements de NextExplorer.
- Le Niveau de journalisation de Configurer Navidrome explique chaque niveau.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
