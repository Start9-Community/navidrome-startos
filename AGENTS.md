# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

**Start every task at the recipe index** — `../start-technologies/projects/start-sdk/docs/src/recipes.md`
(or <https://docs.start9.com/packaging/recipes.html>). It maps an intent ("prompt the user to create
admin credentials", "expose a web UI") to the constructs, the reference pages, and a named production
package to copy. Find the recipe before you read this package's neighbours: a package you reach by
grepping may be non-conformant, and the recipe outranks it.

Freshly scaffolded? Work the
[New Package Checklist](../start-technologies/projects/start-sdk/docs/src/new-package-checklist.md)
(or <https://docs.start9.com/packaging/new-package-checklist.html>) from top to bottom. It is a
guide page, not a file in this repo — read it, don't copy it in.

Keep `README.md` (technical reference for an AI support or administering agent) and
`instructions.md` (end-user docs) in sync with your changes.

**Bugs and feature requests are GitHub issues on this repo** — file them as you find them.
Don't record work in the repo instead: no `TODO.md`, no `NOTES.md`, no `PLAN.md`. What you
verified, tried, and decided belongs in the commit message and the PR body.

## This repo

- **Three sibling packages are npm dependencies, for types and constants only.** `filebrowser-startos` and `nextcloud-startos` supply the manifest types that `mountDependency<typeof …>` needs; `multi-scrobbler-startos` supplies `uiHostId`/`uiPort`. Don't hardcode a dependency's volume id, host id, or port — read it from its source, so a rename there breaks the build instead of the runtime.
- **`multi-scrobbler-startos` is not in either registry.** It is pinned to a contributor's personal repo, so the scrobbling toggle names a dependency no user can currently install, and CI's `npm ci` depends on that repo staying reachable. Bringing it into `Start9-Community` is the fix; don't paper over it by inlining the constants.
- **`/music` is never this package's volume.** It exists only as read-only mounts of another service's data, scoped to a user-chosen subfolder. Anything that would write there is wrong by construction.
