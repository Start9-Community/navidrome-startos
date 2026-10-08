import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.64.2:1',
  releaseNotes: {
    en_US: `Upgrades Navidrome to 0.64.2, a bug fix release: fixes \`database is locked\` errors, UI freezes and failed scans on slow storage such as USB or remote drives, sanitizes download filenames, and no longer logs the admin password if the initial admin cannot be created.

Also adds a **Smart Playlist Refresh Delay** setting to Configure Navidrome. Navidrome rebuilds a smart playlist after only 5 seconds by default, so playlists sorted by random reshuffle on almost every sync, and apps like Symfonium keep downloading new songs and discarding the old ones. Set it to e.g. \`24h\` to keep each smart playlist the same for a day.

- Select Music Sources explains each source, and the NextExplorer subfolder starts with one of NextExplorer's locations.
- Configure Navidrome's Log Level explains each level.
- Smart Playlist Refresh Delay and Session Timeout reject durations too long for Navidrome to start with (over 2562047h47m16s).`,
    es_ES: `Actualiza Navidrome a la versión 0.64.2, una versión de corrección de errores: soluciona los errores \`database is locked\`, los bloqueos de la interfaz y los análisis fallidos en almacenamiento lento como discos USB o remotos, sanea los nombres de archivo de las descargas y deja de registrar la contraseña del administrador si no se puede crear el administrador inicial.

Además añade un ajuste **Retraso de actualización de listas inteligentes** en Configurar Navidrome. Por defecto, Navidrome reconstruye una lista inteligente a los 5 segundos, así que las listas ordenadas al azar se vuelven a mezclar en casi cada sincronización y apps como Symfonium descargan canciones nuevas y descartan las anteriores una y otra vez. Configúralo, p. ej., en \`24h\` para que cada lista inteligente se mantenga igual durante un día.

- Seleccionar Fuentes de Música explica cada fuente, y la subcarpeta de NextExplorer empieza por una de las ubicaciones de NextExplorer.
- El Nivel de registro de Configurar Navidrome explica cada nivel.
- El retraso de actualización de listas inteligentes y el tiempo de espera de sesión rechazan duraciones demasiado largas para que Navidrome arranque (más de 2562047h47m16s).`,
    de_DE: `Aktualisiert Navidrome auf 0.64.2, ein Fehlerbehebungs-Release: behebt \`database is locked\`-Fehler, UI-Hänger und fehlgeschlagene Scans auf langsamem Speicher wie USB- oder Netzlaufwerken, bereinigt Dateinamen bei Downloads und schreibt das Admin-Passwort nicht mehr ins Log, wenn der erste Admin nicht angelegt werden kann.

Fügt außerdem in „Navidrome konfigurieren“ die Einstellung **Aktualisierungsverzögerung für intelligente Playlists** hinzu. Standardmäßig baut Navidrome eine intelligente Playlist schon nach 5 Sekunden neu auf, sodass zufällig sortierte Playlists bei fast jeder Synchronisierung neu gemischt werden und Apps wie Symfonium ständig neue Titel herunterladen und die alten verwerfen. Setze sie z. B. auf \`24h\`, damit jede intelligente Playlist einen Tag lang gleich bleibt.

- Musikquellen auswählen erklärt jede Quelle, und der NextExplorer-Unterordner beginnt mit einem der Speicherorte von NextExplorer.
- Die Protokollstufe in „Navidrome konfigurieren“ erklärt jede Stufe.
- Aktualisierungsverzögerung für intelligente Playlists und Sitzungs-Timeout lehnen Dauern ab, mit denen Navidrome nicht starten kann (über 2562047h47m16s).`,
    pl_PL: `Aktualizuje Navidrome do wersji 0.64.2, wydania z poprawkami błędów: naprawia błędy \`database is locked\`, zawieszanie interfejsu i nieudane skanowania na wolnych nośnikach, takich jak dyski USB lub zdalne, oczyszcza nazwy plików przy pobieraniu i nie zapisuje już hasła administratora w logu, gdy nie można utworzyć początkowego administratora.

Dodaje też ustawienie **Opóźnienie odświeżania inteligentnych playlist** w Konfiguracji Navidrome. Domyślnie Navidrome przebudowuje inteligentną playlistę już po 5 sekundach, więc playlisty sortowane losowo są tasowane niemal przy każdej synchronizacji, a aplikacje takie jak Symfonium w kółko pobierają nowe utwory i odrzucają stare. Ustaw np. \`24h\`, aby każda inteligentna playlista pozostawała taka sama przez dzień.

- Wybierz źródła muzyki wyjaśnia każde źródło, a podfolder NextExplorer zaczyna się od jednej z lokalizacji NextExplorer.
- Poziom logowania w akcji Skonfiguruj Navidrome wyjaśnia każdy poziom.
- Opóźnienie odświeżania inteligentnych playlist i limit czasu sesji odrzucają czasy, przy których Navidrome nie uruchomi się (powyżej 2562047h47m16s).`,
    fr_FR: `Met à jour Navidrome vers la 0.64.2, une version de correction de bogues : corrige les erreurs \`database is locked\`, les blocages de l'interface et les analyses en échec sur un stockage lent comme les disques USB ou distants, assainit les noms de fichiers des téléchargements et n'écrit plus le mot de passe administrateur dans les journaux lorsque l'administrateur initial ne peut pas être créé.

Ajoute aussi un réglage **Délai de rafraîchissement des playlists intelligentes** dans Configurer Navidrome. Par défaut, Navidrome reconstruit une playlist intelligente après seulement 5 secondes, si bien que les playlists triées de façon aléatoire sont remélangées à presque chaque synchronisation et que des applications comme Symfonium téléchargent sans cesse de nouveaux morceaux et suppriment les anciens. Réglez-le par exemple sur \`24h\` pour que chaque playlist intelligente reste identique pendant une journée.

- Sélectionner les sources de musique explique chaque source, et le sous-dossier NextExplorer commence par l'un des emplacements de NextExplorer.
- Le Niveau de journalisation de Configurer Navidrome explique chaque niveau.
- Le délai de rafraîchissement des playlists intelligentes et le délai d'expiration de session refusent les durées trop longues pour démarrer Navidrome (plus de 2562047h47m16s).`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
