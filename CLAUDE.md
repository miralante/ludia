# Ludia — agent handbook

## CI/CD and browser tests

Use this repository's configured test commands. See the
[project CI/CD guide](CI-CD.md)
for this project's Cloudflare deployment steps and the suite-wide test matrix.

Ludia is an extensible catalogue of eight games with rules, exercises and matches.
It includes the complete chess curriculum and engine. See
`doc/en/adding-games.md` for the new game contract. The public name, the repository
and the deployment identifiers are all Ludia. Storage uses the `ludia:` prefix.
It is an independent sibling in Apptonomia. Read `doc/en/spec.md` (Spanish mirror
`doc/es/spec.md`) for product decisions and `doc/en/technical.md` (`doc/es/tecnico.md`)
for architecture. Follow the suite's `../apptonomia/doc/en/guia-de-cumplimiento.md`
and new-sibling recipe. This file is the operational source of truth.

## Workflow

- Inspect git status and recent history before edits. Preserve existing changes.
- Vanilla HTML/CSS/JavaScript, zero runtime dependencies, no bundler or install step.
- All visible strings and curriculum text have Spanish and English parity.
- Run `node scripts/check.js`; it includes engine and content regression tests.
- Run `node scripts/check-version-bump.js` when changing cached files.
- Before pushing, run `npm run test:ui`, `node scripts/smoke-sw.js`, and
  `node scripts/check-version-bump.js`; do not push if any required check fails.
- Increment `sw.js` VERSION (`ludia-vN`) whenever a shipped file changes after release.
- Use only `ludia:` localStorage keys. Never clear other apps' data.
- Keep this sibling independently shippable: no runtime imports from siblings.
- No telemetry, accounts, remote voices, external fonts or remote chess engines.
- No clinical or audience labels in public UI, metadata or READMEs.
- Use short sentences, one idea per step, calm feedback and optional support.
- Every game has Rules / Exercises / Play, as explicitly requested for Ludia.
  Keep feedback calm, never label support use, and allow all phases immediately.
- No narration or speech synthesis. Optional game sounds only, off by default.
- Preserve keyboard use, optional game sounds, visible focus, responsive layout and contrast.
- Do not publish, push or create external repositories without user authorization.

## Orientation

`games/shared.js` owns the extensible registry; game engines, bilingual curricula
and view adapters live in `games/`. `ludia.js` owns the catalogue, course flow,
match lifecycle and replayable sessions. `assets/css/ludia.css` and
`assets/css/game-boards.css` add the new visual identity and boards.

For chess, `data.js` defines lesson order, demonstration positions and exercises.
`strings.es.js` / `strings.en.js` own all copy; `assets/js/core.js` owns local
storage, translation and optional game sounds. `chess.js` is a pure rules engine,
also loaded by Node tests. `app.js` renders hash routes and manages the journey.
`sw.js` precaches the whole product and deletes only its own older caches in its scope.
`CI-CD.md` is the deployment runbook. `doc/en/team.md` describes validation
with learners and supporters; do not claim certified accessibility or learning gains.

## Shared components: one definition (suite-wide)

A component that several pages or activities use is defined once, in the
app's shared stylesheet, and never copied into a page's own stylesheet. A
page's own stylesheet holds only what is specific to it (a picture, a grid,
a symbol). Copies drift apart without anybody noticing: the same control ends
up in a different place on each page, and every copy is valid CSS, so no check
fails. A component used by two pages moves to the shared sheet in the same
change. This app has no shared stylesheet of components yet; the first one goes to `assets/css/components.css`.

Where an app has a shared component, it documents it in its design guide and
guards it with a check. Calculia is the reference: the explanation carousel
and the test sheet live in `assets/css/components.css` (`doc/en/design.md`
§3.3–3.4), and `scripts/checks/design.js` (check 18) fails on a second copy.

## Asset cache policy (no `?v=` tokens)

Every asset is served `Cache-Control: no-cache, must-revalidate` (see `_headers`), so
browsers revalidate on each request and a deploy is visible at once. Do not add
`?v=` query strings to asset references. A changed cached file still needs the
service worker `VERSION` bump (sw.js).

