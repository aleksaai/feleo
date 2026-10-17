# Feleo project instructions

Read HANDOFF.md, PLAN.md and docs/BRAND.md before continuing. This repository is the source of truth; the old Downloads prototype is a historical/publication working copy, not a second development branch.

## Product and brand
- One brand/domain: Feleo / feleo.ai. Feleo Voice is the software product name.
- Current preference: **Hanken Grotesk only**. Keep all text in Hanken; do not reintroduce serif headings or a public font selector without the owner's request.
- Sky blue #1FB6FF, near-white blue #F4FAFF, dark ink. Two-part feather icon. Retain spacious design and subtle glass navigation; avoid generic dashboard decoration and fabricated testimonials.
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
