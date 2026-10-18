## Session close — 2026-10-18

Latest close authorizes pushing the current frontend to main (Netlify auto-deploy). Earlier local-only notes are superseded for this save. Preserve white text on sky-blue software-style buttons, mountain hero, and no product demos. Nóra's animated identity is on Solutions. Enquiry/booking backend is explicitly deferred by owner. Read the latest HANDOFF.md entry before historical notes below. Do not modify customer software or parallel app work.

## Agent identity and button correction — 18 October 2026

Owner explicitly requires white text inside blue buttons, matching the software. This supersedes the prior dark-text contrast adjustment. Reused the actual local app AgentBubble shader and material for a labelled Nóra assistant identity on the Solutions page, not a product demo. Static fallback, reduced motion and visibility-aware animation included. No software files, customer data or providers changed. Latest website edits remain local and unpublished.


## Frontend-only iteration — 2026-10-18

Owner approved website clarity improvements and explicitly deferred backend delivery/booking. Current local changes: clearer industry offers, visible pilot scope/pricing, five FAQs, integration explanation, contextual previous-work evidence, compact consultation layout and industry preselection. Form stays preview-only. Keep mountain hero, no product demos. Website button text is dark ink on original sky blue for contrast; software untouched. Latest changes are local, not deployed; see HANDOFF.md.

## Publication authorized — 2026-10-18

Owner explicitly requested pushing the corrected blue website. Earlier local-only/no-push instructions are superseded for this publication. Netlify auto-deploys main. Current design: restored mountain hero, no product demos, software-matched sky-blue controls.

## Owner correction — 2026-10-18 (current)

The product-example preview was rejected. No product demos, simulated conversations or fake interfaces: the product is unfinished. Restored original mountain hero and its motion; removed workflow panels and tab JavaScript. Blue buttons now match the current local software theme: #1FB6FF, white text, 9px corners, subtle inset/drop shadow, white secondary controls; website touch-target height retained. Navigation/hero invite a consultation, not a product demo. The app source was read only and never modified. This supersedes the demo/tab and darker-action-blue descriptions below. Local preview only; no push/deployment.
# Feleo project instructions

## Latest direction — Blue product preview, 2026-10-18
Owner explicitly requested returning to blue with Superchat-inspired product clarity. This supersedes the Neutral Glass palette instructions below. Local review only: do not push main (Netlify auto-publishes) or deploy until requested. `src/blue-home.mjs` and final `blue.css` provide bilingual homepage, labelled illustrative workflow tabs, pale-blue surfaces and accessible deeper-blue actions. Hanken, subtle glass header, weighted scrolling, film photos, generated founder portrait and landscape footer remain. Workflow illustrations are not actual product screenshots; no live provider connections. App/customer software remains untouched. Native Hungarian review and visual acceptance remain open.

Read HANDOFF.md, PLAN.md and docs/BRAND.md before continuing. This repository is the source of truth; the old Downloads prototype is a historical/publication working copy, not a second development branch.

## Product and brand
- One brand/domain: Feleo / feleo.ai. Feleo Voice is the software product name.
- Current preference: **Hanken Grotesk only**. Keep all text in Hanken; do not reintroduce serif headings or a public font selector without the owner's request.
- Current palette: **Neutral Glass** (selected 18 Oct). Pure white, neutral silver/gray glass, dark ink, monochrome feather. Original sky-blue system is superseded; color may come from imagery. Keep broad glass navigation and translucent silver actions; no yellow paper tones or solid dark CTA blocks.
- Three audiences: larger private dental clinics, HVAC/building services, staffed accounting offices. The agency pilot offers differ; do not describe all three as the same voice product.
- OpenPenguin Voice is a separate software repository; do not migrate or modify it through this marketing project without explicit scope.

## Implementation
- Current code is static HTML/CSS/JS with self-hosted Lenis 1.3.27; no npm install required. Edit src/content.mjs (bilingual copy/routes), src/render.mjs (templates), root CSS/JS and assets; run npm run check and npm run build. Never hand-edit dist.
- No secrets or private GTM dossiers in the repository. Keep third-party font license files.
- Test responsive layouts at 1440, 390 and 320px and check the primary interaction after changes.
- Keep example conversations labelled illustrative. No fake live-call, booking or submission confirmations.
- Prototype form sends and stores nothing. Real delivery requires explicit implemented endpoints, validation, spam controls, CRM/booking handling and verification.
- Keep preview noindex until a real public-domain release is ready. Preserve Sites privacy unless the user asks to change it.
- GitHub pushes alone do not deploy Sites. Use its supported publication workflow, preserve project ID, and never expose/persist temporary source credentials.

## Working style
Aleksa builds with coding agents; preparation should not be blocked on extensive partner meetings. Debóra will qualify/call leads and arrange appointments; Ákos handles Hungarian consultations and later delivery. Bring them in for focused copy and funnel handoff checks near launch. Do not assume an existing network or Fanni as a pilot customer.

## Motion implementation
`motion.css` and `motion.js` own the scroll/navigation choreography; `style.css` and `app.js` remain the base layout and business interactions. Build copies both motion files. Preserve native touch, no-JS content visibility, reduced-motion support and modal scroll locking. Keep the vendored Lenis MIT notice. Verify real wheel/anchor behavior, not screenshots alone.

## Multi-page architecture
The build generates 16 page types in HU/EN (32 routes). Root is Hungarian; /en/ is English. Preserve localized route equivalence and navigation. app.js handles mobile navigation and the local enquiry preview. motion.js must tolerate pages without a hero, conversation section or dialog. Use AI-generated brand portraits of Aleksa based on his supplied identity references, as explicitly requested; original selfies are reference material, not page imagery. Keep labelled initial-letter placeholders for Debóra/Ákos. Platform and project illustrations must remain labelled; never call them actual screenshots. Prior work/testimonials are attributed to ALEKSA AI, not invented Feleo customers. Legal/company pages are draft preview disclosures until real details are verified.

## Latest design correction
The owner rejected text-heavy repetitive sections, the software dropdown and invented software UI previews. Keep direct top navigation (What we do / Who we help / About), no dropdowns or fake product dashboard. Homepage is concise and image-led; product/industry detail is progressively disclosed. editorial.css owns this art-directed revision. Preserve the approved hero/motion. Use generated portrait and sector imagery from assets/people/aleksa-editorial-ai.png and assets/editorial/, with provenance in docs/IMAGE-DIRECTION.md.

## Enterprise direction — 2026-10-18
Owner authorized a more serious software-company presentation inspired by Parloa: broad full-width header (no pill), direct AI Agents / Industries / Implementation / Company links, neutral off-white/charcoal base, blue as accent, smaller radii and a concrete voice/chat hero. enterprise.css is the final override layer. Hanken, feather, film imagery, weighted scrolling and approved landscape footer remain. Founder text explains actual team responsibilities without inflating company size. This supersedes the earlier instruction to preserve the old hero wording/header shape. Current revision awaits visual review.

## Neutral Glass selected — 2026-10-18
Owner chose option 02 after a three-way visual comparison. Final section of enterprise.css implements neutral white/silver glass surfaces, dark logo on light surfaces, clear frosted header and silver translucent buttons. Favicon is assets/feather-neutral.svg. Keep Hanken, site structure, film images, weighted scrolling and approved landscape footer. No return to blue branding, yellow paper or opaque dark buttons without request. Reduced-transparency/forced-colors fallbacks are included.

## Buttons — 2026-10-18 correction
Owner rejected translucent bevelled glass buttons and inconsistent sizes. buttons.css is the final action-style layer: opaque white fill, restrained 1px neutral border, 6px radius, 48px desktop actions, 14px Hanken 500, unified 16px SVG arrow, equal 216px hero actions; compact mobile header is 44px tall. No gradients, blur, inner shadows, hover lift or glowing borders on buttons. Neutral Glass remains on surrounding header/image surfaces.

## Content and structure cleanup — 2026-10-18
Owner rejects decorative micro-labels, slogans without informational value, hero scroll/Budapest captions, orphan proof banners and inconsistent section styling. Homepage flow is hero → services → industries → team with attributed proof → contact. No hero eyebrow or bottom captions; no client-name ribbon immediately after hero. Services use concrete names and one useful sentence, no arbitrary numbering. Industry images align at the top. Shared width/spacing/heading rules live in structure.css (final layer). Retain useful names/roles, attribution and preview limitations; do not remove meaningful information indiscriminately.
