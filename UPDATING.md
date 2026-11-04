# Updating the upstream version

Upstream is the `deluan/navidrome` Docker image, pinned by tag in `startos/manifest/index.ts` (`images.navidrome.source.dockerBuild.buildArgs.IMAGE`) and built through the root `Dockerfile`, which upgrades its CA store.

## Determining the upstream version

- Latest tags: `curl -s "https://hub.docker.com/v2/repositories/deluan/navidrome/tags?page_size=25" | jq -r '.results[].name'`
- Confirm architectures for the tag you're bumping to (must include `amd64` and `arm64`):
  `docker manifest inspect deluan/navidrome:<tag> | jq -r '.manifests[].platform.architecture'`
- Release notes: <https://github.com/navidrome/navidrome/releases>

## Applying the bump

1. Edit `images.navidrome.source.dockerBuild.buildArgs.IMAGE` in `startos/manifest/index.ts` to the new `deluan/navidrome:<tag>`. Update the confirmation-date comment above it.
