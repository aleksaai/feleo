# Feleo handoff

## 2026-10-17 — Canonical GitHub repository and Hanken baseline

Owner asked to put the prototype in `aleksaai/feleo`, prefers **Hanken only**, and requested a completion plan.

Local clone: `/Users/aleksaspalevic/Desktop/Projects/feleo`.
Source: https://github.com/aleksaai/feleo.
Private preview: https://feleo-design-study.enneo.chatgpt.site.

Implemented: copied actual prototype source/assets; selected Hanken throughout; removed font selector and unused serif font payloads; added practical FAQs; added dependency-free Node preview/build commands and GitHub syntax/build CI. Added PLAN.md, brand/publishing notes and project instructions. Preview remains noindex and owner-private; no production domain or sending integration was changed.

Main files: index.html, style.css, app.js, assets/, scripts/. `dist/` is regenerated and ignored. No installation needed. Run npm run dev; npm run check; npm run build.

Current interactions: sector conversation tabs, replay, mobile nav, local enquiry preview, FAQ disclosure. The form DOES NOT send/store leads or book appointments. Conversation data is illustrative.

Next: Phase 1/2 in PLAN.md — reusable page/locale structure, Hanken polish and real sector landing pages. HVAC first, then dental and accounting. Backend providers are not selected; do not invent live calendar/CRM endpoints. Get partner feedback at the point copy/funnel is reviewable, not as a gate before development.

GitHub is the development source of truth. The old Downloads checkout is used only for the retained Sites publication mirror; sync from GitHub source to it, never make independent changes there. Publishing directions and exact Site ID are in docs/PUBLISHING.md.
