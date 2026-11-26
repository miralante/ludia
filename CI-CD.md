# CI/CD and deployment — Ludia

This is the project-specific CI/CD and Cloudflare deployment runbook. For the suite-wide test matrix, see the [Miralante CI/CD guide](https://github.com/miralante/apptonomia/blob/main/CI-CD.md).

## CI validation

Run the checks required by `.github/workflows/validate.yml` from this repository before merging. Project-specific checks and the suite-wide Playwright, crawler, service-worker, and release checks are listed in the linked CI/CD guide.

## Cloudflare deployment profile — Ludia

> **Deploy:** manual Wrangler deployment; Workers Builds is not connected. GitHub Actions validates commits but does not deploy, so each GitHub push requires a separate Wrangler deployment. The Cloudflare dashboard is the source of truth for project settings. This is a Worker with static assets, not classic Pages. Live at <https://ludia.apptonomia.uk/> (configured 2026-09-12).

## Configuration

| Setting | Value |
|---|---|
| Worker | `ludia` |
| Production branch | `main` |
| Framework preset | None |
| Build command | none; no framework/build step |
| Output / root | `.` / repository root |
| GitHub workflow | [`.github/workflows/validate.yml`](.github/workflows/validate.yml) — `node scripts/check.js` and `node scripts/check-version-bump.js` |

`wrangler.toml` is the deploy configuration: it pins the Worker name, serves `[assets] directory = "."` without a `main` script, and sets `not_found_handling = "404-page"`. Keep it; do not convert this project to classic Pages (`pages_build_output_dir` or `wrangler pages deploy`). Wrangler reads it for manual deployments. Use pinned Wrangler `4.129.1`; it is a deployment tool, not an app dependency. The custom domain is declared in `wrangler.toml` and provisioned by deployment in the account owning the zone.

`_headers` applies security and cache headers at deploy time; no dashboard rules are needed. No environment variables or Cloudflare service-account keys are required. Before publishing, review `.assetsignore`, `_headers`, `wrangler.toml`, and the full source diff. Public repository: `https://github.com/miralante/ludia`, branch `main`.

## Routing and Workers.dev

Cloudflare serves static Worker assets through an active `workers.dev` subdomain or custom domain. A deployment can succeed yet serve nothing without an active route. If a Worker shows **No active routes**, enable its Workers.dev subdomain under **Workers & Pages → `ludia` → Settings → Triggers**. If only a route table is available, add `*/*` on the account's `workers.dev` zone for Worker `ludia`. Routes are dashboard settings, not `wrangler.toml`; enabling one needs no rebuild. If a deployment is not active afterward, retry or promote the latest successful deployment.

The custom domain is declared in `wrangler.toml`; deployment provisions it in the Cloudflare account that owns the zone.

## Cache and service worker

`sw.js` starts at `ludia-v1`; bump for every release changing a precache entry. Install fetches with `cache:reload`. A new worker waits for old tabs rather than replacing code during a game. Activation removes only older `ludia-v*` and legacy `enroca-v*` caches. HTML, CSS, JS, and fonts use `no-cache, must-revalidate`; no long-lived immutable URLs. See `CLAUDE.md` §B.1.

## Deploy, rollback, and domains

Run `node scripts/check.js` and `node scripts/check-version-bump.js`; inspect the asset/config files and source diff. If needed, log in with `npx wrangler@4.129.1 login`, then run `npx wrangler@4.129.1 deploy --dry-run` and `npx wrangler@4.129.1 deploy`. Roll back to a previous Workers version; increment cache version in the forward fix.

To add a custom domain, use **Workers & Pages → `ludia` → Custom domains → Set up a custom domain**. Cloudflare configures DNS for a zone in the account; otherwise follow the wizard's DNS instructions. Current setup: `ludia.apptonomia.uk` is set in `wrangler.toml`; no `workers.dev` fallback is documented.

No Cloudflare API token or GitHub secret is configured for deployment. Wrangler authenticates interactively with the Cloudflare account when a maintainer runs `npx wrangler@4.129.1 login`; do not commit credentials.

## Project-specific notes

Initial publication and deployment were authorized and succeeded 2026-09-12 with Wrangler 4.129.1. Cloudflare version `54c08d76-d01d-478c-b917-152f2d837081` runs source commit `a787bee`; later publication-report changes are docs only. The deployment uploaded 24 public assets; `.assetsignore` excludes source-control files, docs, local tooling, and temporary QA files, which return 404. Published-origin Chromium QA passed 29 continuous-topic tasks, 12 mini-games, local/computer games, promotions, keyboard, ES/EN, 320/375/768/1280 px, offline use, local-data reset, default silence, and optional sounds; MIME types and exclusions were checked. The previously published cache name was `enroca-v4`. For local use, open `index.html` or run `python scripts/serve.py`; direct-file mode supports lessons, exercises, game, and guarded storage, while install/offline caching requires HTTPS or localhost. On Windows with Node 24, if OS-trusted certificates fail validation, set `$env:NODE_USE_SYSTEM_CA=1` for Wrangler; TLS verification stays enabled.

## References

- [`wrangler.toml`](wrangler.toml) — Worker and asset configuration.
- [`_headers`](_headers) — security and cache policy.
- [`.github/workflows/validate.yml`](.github/workflows/validate.yml) — validation; it does not deploy unless stated above.
- [`CLAUDE.md`](CLAUDE.md) — agent workflow and, where applicable, the canonical service-worker cache contract (§B.1).
- [Miralante's shared Cloudflare runbook](https://github.com/miralante/apptonomia/blob/main/CI-CD.md) — common setup and recovery steps.
