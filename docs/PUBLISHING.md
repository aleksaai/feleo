# Source and preview publication

Canonical source: https://github.com/aleksaai/feleo.

Existing private Sites project: `appgprj_6ad3bc9d780481919b8308c846d2d977`.
Preview: https://feleo-design-study.enneo.chatgpt.site.

The GitHub repository and Sites-managed publication repository are separate. Do not change GitHub's origin to the Sites remote. Do not claim GitHub auto-deployment is enabled.

Workflow for a Sites-capable agent:
1. Read current Sites access and mint a temporary source credential for the existing project.
2. Open the publication checkout with the Sites source helper. On this machine it is currently `/Users/aleksaspalevic/Downloads/Feleo-branding/website`.
3. Copy canonical tracked source files from this repository into that checkout, excluding Git metadata, credentials and local artifacts. Remove stale deploy assets when replacing the source. Keep the same hosting project ID.
4. Run `npm run check` and `npm run build` in the publication checkout. Use the helper to push and package the exact resulting source state; retain its returned SHA and archive path.
5. Save/deploy that exact publication SHA/archive with the private Sites operation. Confirm success. The GitHub commit and the Sites publication commit need not have the same SHA; their website source must match.
6. Keep token values only in memory and pass them through the helper's hidden stdin.

Production host and feleo.ai DNS remain future decisions. No production domain, email DNS or audience change is part of the initial repository migration.

Multi-page update: src/content.mjs and src/render.mjs generate all routes into dist/. Root index.html is no longer source. Mirror those files and pages.css as well as existing sources/assets. The source helper packages the generated dist directory, not root HTML.
