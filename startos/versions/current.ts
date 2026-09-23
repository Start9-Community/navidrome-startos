import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.64.1:0',
  releaseNotes: {
    en_US: `NextExplorer, the recommended file server, can now be selected as a music source; its subfolder starts with the drive name, e.g. Files/Music.

Upgrades Navidrome to 0.64.1, a security release: failed Subsonic logins are now rate limited (previously unlimited password guessing), and four medium-severity issues are fixed — SSRF and local file read through M3U playlist covers, player takeover by another user, and library filters skipped on bookmarks, playlist tracks and now-playing. Also improves Jellyfin client support and adds a new **Jellyfin API (experimental)** toggle in Configure Navidrome (off by default); when enabled, a Jellyfin API interface appears for Jellyfin music clients.`,
    es_ES: `NextExplorer, el servidor de archivos recomendado, ahora puede seleccionarse como fuente de música; su subcarpeta empieza por el nombre de la unidad, p. ej. Files/Music.

Actualiza Navidrome a la versión 0.64.1, una versión de seguridad: los inicios de sesión fallidos de Subsonic ahora tienen límite de intentos (antes se podían probar contraseñas sin límite) y se corrigen cuatro problemas de gravedad media: SSRF y lectura de archivos locales mediante portadas de listas M3U, toma de control de reproductores de otro usuario y filtros de biblioteca omitidos en marcadores, pistas de listas y reproducción actual. También mejora la compatibilidad con clientes Jellyfin y añade un interruptor **API de Jellyfin (experimental)** en Configurar Navidrome (desactivado por defecto); al activarlo aparece una interfaz de API de Jellyfin para clientes de música Jellyfin.`,
    de_DE: `NextExplorer, der empfohlene Dateiserver, kann jetzt als Musikquelle ausgewählt werden; sein Unterordner beginnt mit dem Laufwerksnamen, z. B. Files/Music.

Aktualisiert Navidrome auf 0.64.1, ein Sicherheitsrelease: Fehlgeschlagene Subsonic-Anmeldungen werden jetzt begrenzt (zuvor war unbegrenztes Passwort-Raten möglich), und vier Probleme mittlerer Schwere wurden behoben — SSRF und lokales Lesen von Dateien über M3U-Playlist-Cover, Übernahme von Playern anderer Nutzer und übersprungene Bibliotheksfilter bei Lesezeichen, Playlist-Titeln und „Wird gerade gespielt“. Verbessert außerdem die Unterstützung für Jellyfin-Clients und fügt in „Navidrome konfigurieren“ einen Schalter **Jellyfin-API (experimentell)** hinzu (standardmäßig aus); wenn aktiviert, erscheint eine Jellyfin-API-Schnittstelle für Jellyfin-Musik-Clients.`,
    pl_PL: `NextExplorer, zalecany serwer plików, można teraz wybrać jako źródło muzyki; jego podfolder zaczyna się od nazwy dysku, np. Files/Music.

Aktualizuje Navidrome do wersji 0.64.1, wydania bezpieczeństwa: nieudane logowania Subsonic są teraz ograniczane (wcześniej możliwe było nieograniczone zgadywanie haseł), a naprawiono cztery problemy o średniej wadze — SSRF i odczyt plików lokalnych przez okładki playlist M3U, przejęcie odtwarzacza przez innego użytkownika oraz pomijanie filtrów bibliotek w zakładkach, utworach playlist i „teraz odtwarzane”. Poprawia też obsługę klientów Jellyfin i dodaje przełącznik **API Jellyfin (eksperymentalne)** w Konfiguracji Navidrome (domyślnie wyłączony); po włączeniu pojawia się interfejs API Jellyfin dla klientów muzycznych Jellyfin.`,
    fr_FR: `NextExplorer, le serveur de fichiers recommandé, peut désormais être sélectionné comme source de musique ; son sous-dossier commence par le nom du lecteur, p. ex. Files/Music.

Met à jour Navidrome vers la 0.64.1, une version de sécurité : les échecs de connexion Subsonic sont désormais limités (auparavant, les mots de passe pouvaient être devinés sans limite) et quatre failles de gravité moyenne sont corrigées — SSRF et lecture de fichiers locaux via les pochettes de playlists M3U, prise de contrôle d'un lecteur par un autre utilisateur, et filtres de bibliothèque ignorés sur les signets, les pistes de playlists et la lecture en cours. Améliore aussi la prise en charge des clients Jellyfin et ajoute une option **API Jellyfin (expérimental)** dans Configurer Navidrome (désactivée par défaut) ; une fois activée, une interface API Jellyfin apparaît pour les clients musicaux Jellyfin.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
