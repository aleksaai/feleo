# Feleo handoff

## 2026-10-17 — Scroll and navigation refinement

Owner found the page too generic and requested a sleek dynamic header and heavy, slow Framer-like scrolling. Added a fixed glass nav that contracts from 980 to 780px, animated section/hover indicator, larger asymmetric Hanken hero, restrained parallax, long eased entrance/reveal transitions, editorial capability rows and a settling conversation panel. Existing enquiry/tab behavior retained.

New files: motion.css, motion.js; self-hosted assets/vendor/lenis-1.3.27.min.js and CSS with MIT license. No build-tool migration. Desktop uses weighted wheel scrolling; touch remains native. Reduced-motion changes disable added motion, no-JS content stays visible, and modal opening pauses background scrolling. Source/build README updated.

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

Validation: npm run check/build passed; desktop 1440px and mobile 390/320px verified with no horizontal overflow or browser errors. Verified Hanken computed font, absence of the font selector, FAQ expansion, sector tabs, mobile menu and local enquiry preview/Escape close.

Repository access on this machine: HTTPS clone/read works, but the saved HTTPS credential returned 403 for write to the new repository. Existing SSH access successfully pushed main. origin keeps HTTPS fetch and uses git@github.com:aleksaai/feleo.git as push URL.
