---
description: How to release a new version of the QuitBlock extension
---

# Release Procedure for QuitBlock

This document outlines the standard workflow for releasing a new version of the QuitBlock extension. Following this procedure ensures that versioning is consistent, changelogs are updated, and the extension is correctly published.

## Prerequisites

- You must have a clean working directory (no uncommitted changes).
- Ensure you are on the `main` branch: `git checkout main && git pull origin main`.
- Ensure all tests pass locally: `npm test`.

## Step-by-Step Release Workflow

### 1. Preparation & Commits

Ensure all features or fixes are committed using [Conventional Commits](https://conventionalcommits.org/). This allows `standard-version` to automatically determine the version bump and update the changelog.

- `fix(...)`: Triggers a **patch** release.
- `feat(...)`: Triggers a **minor** release.
- `feat(...)` with `BREAKING CHANGE` in footer: Triggers a **major** release.

### 2. Verify Release (Dry Run)

Before finalizing the release, run a dry run to see exactly what `standard-version` will do.
// turbo

```bash
npm run release:dry
```

Review the output to confirm the version bump and the new entries in the generated `CHANGELOG.md`.

### 3. Execute Release

Finalize the release locally. This will update `package.json`, `package-lock.json`, `CHANGELOG.md`, and create a new git tag.
// turbo

```bash
npm run release
```

_Note: If you need to force a specific version (e.g., skip a pre-release), you can use `npm run release -- --release-as <patch|minor|major>`._

### 4. Push and Publish

Push the new commits and tags to GitHub.
// turbo

```bash
git push --follow-tags origin main
```

## Automated CI/CD Actions

Once the tag is pushed, the GitHub Action workflow handles the external publishing:

1. **Package**: Bundles the extension into a `.vsix` file.
2. **VS Marketplace**: Publishes the new version to the VS Code Marketplace.
3. **Open VSX**: Publishes the extension to the Open VSX Registry.
4. **GitHub Release**: Creates a new GitHub Release with the generated `.vsix` attached.

## Troubleshooting

### Missing VSIX in Release

Ensure that `npm run package` (which runs `node esbuild.js --production`) is successful before publishing.
