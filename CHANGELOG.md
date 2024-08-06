# vc-holder-http Changelog

## 1.2.0 - 2024-08-06

### Changed
- Update dependencies for VC 2.0 support.
  - Use `@digitalbazaar/security-document-loader@3`.
  - Use `@digitalbazaar/vc@7`.
  - Remove older `@digitalbazaar/credentials-v2-context`.
- Refactor documentLoader code.
- Update minor and dev dependencies.

## 1.1.0 - 2024-07-08

### Added
- `@digitalbazaar/credentials-v2-context` is now in the documentLoader.
- `@digitalbazaar/multikey-context` is now in the documentLoader.
- POST /`credentials/derive` added.

### Fixed
- Revert to `node:20-alpine` in Dockerfile.

## 1.0.5 - 2023-11-21

### Changed
- Use `digitalbazaar/gh-action-buildnum@v2` in packaging workflow.
- Use `digitalbazaar/npm-get-version-action@v1` in packaging workflow.

## 1.0.4 - 2023-11-21

### Changed
- Temporarily disable use of `gh-action-buildnum`.

## 1.0.3 - 2023-11-21

### Changed
- Use `digitalbazaar/gh-action-buildnum@v2` in packaging workflow.

## 1.0.2 - 2023-11-21

### Change
- Use `digitalbazaar/gh-action-buildnum@v1` in packaging workflow.

## 1.0.1 - 2023-11-15

### Fixed
- Add `cloudbuild.yaml`.

## 1.0.0 - 2023-11-15

### Added
- Initial version.
