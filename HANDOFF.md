**Hetzner als neues Hostingziel beschlossen — 24.10.2026:** Owner entscheidet nach dem Anbieter-/Latenzvergleich ausdrücklich für Hetzner. **Umzug und vollständige Einrichtung erst in einer neuen Session**, inklusive Website, Feleo-App/Worker, selbst gehostetem Supabase und E-Mail-Lösung. Heute ausschließlich Dokumentation; keine Bestellung, Migration, DNS-/SMTP-/Modelländerung oder Löschung. Aktuelle Produktion läuft weiterhin auf dem ursprünglichen Scaleway-Paar; ältere „Scaleway-only“-Zielentscheidungen sind für die Zukunft überholt, die Scaleway-Betriebsdoku bleibt bis zum erfolgreichen Cutover gültig. Bestehender Hetzner-Testserver CPX32 Nürnberg `172216906` / `91.98.195.11`, Projekt `16522443`, läuft weiter und kostet ca.1,39€ netto/Tag; vor Neuanschaffung Bestand prüfen, keine Doppelbestellung. E-Mail-Umzug ausdrücklich mitplanen: aktuell Scaleway TEM für transaktionale App-Mails; Hetzner-Ziel/Relay noch nicht ausgewählt, keine automatische dauerhafte Scaleway-Abhängigkeit und keine ungeprüfte eigene SMTP-Zustellung versprechen. Bestehende IONOS-Mail-DNS/Microsoft-Konten erhalten, bis der konkrete neue Mailweg geprüft ist. Einstieg nächste Session: `ai-team/status/FELEO-HETZNER-HANDOFF.md` im Team-Repo und `~/Desktop/Projects/feleo-app/docs/HETZNER-MIGRATION-PLAN.md`.

## 24 October 2026 — Production live on Scaleway

https://feleo.ai is live on the owner-approved Scaleway Amsterdam app/worker server 51.15.114.118. IONOS A/AAAA updated, www redirects to apex, mail records preserved. All32 routes, assets, HTTPS, genuine404 and26-URL sitemap verified. Software https://app.feleo.ai and backend https://api.feleo.ai also migrated; operations/rollback in sibling feleo-app/docs/SCALEWAY-MIGRATION.md. No production Netlify hosting. Google indexing not requested; draft legal/company pages and enquiry delivery remain separate work. Save to codex/scaleway-website: main still triggers the historical Netlify preview. Live website receipt: docs/SCALEWAY-WEBSITE.md and artifacts/scaleway-live-20261024/. Earlier blockers below are historical.

## 23 October 2026 — Scaleway-only website direction (not deployed)

Owner explicitly rejects Netlify for the production website. Target: **https://feleo.ai** for the marketing site on Scaleway; **app.feleo.ai** is reserved for the later software migration. IONOS remains the registrar/DNS provider. Scaleway Transactional Email domain verification is separate from account ID approval.

An initial mistaken Netlify domain attachment/DNS change was reversed during this session. Netlify now has neither feleo.ai nor www.feleo.ai attached. Authoritative DNS was restored to IONOS parking A 217.160.0.106 and AAAA 2001:8d8:100f:f000::200; www CNAME points to feleo.ai. No mail or app/api record was changed. Old netlify.app preview still exists; it is not the production target and was not deleted. No source push was made, because main still auto-deploys there.

**Blocker verified in Console:** Your ID is awaiting approval; approved BASIC2-A2C-4G server quota in PAR 1/2/3 is 0/0. Other regions show quotas, but earlier approval is specifically for Paris; do not switch region/offer to bypass it. No server, IP or paid website hosting was ordered in this session. See sibling feleo-app/docs/SCALEWAY-PREFLIGHT.md for the existing two-server budget and prior authorization.

Prepared locally:
- `hosting/Caddyfile`: independent static website vhosts, automatic HTTPS, www-to-apex redirect preserving path/query, genuine custom 404. Intended alongside the later app on the approved app/worker server; no backend server required for this static site.
- `FELEO_PUBLIC_SITE=1 npm run build`: public canonical URLs, HU/EN language alternatives, crawlable robots.txt, 26-URL sitemap. Draft company/privacy and confirmation pages retain noindex. Default builds remain preview/noindex, preserving the separate Sites preview.
- `artifacts/domain-scaleway/website-public.tar.gz`: public static files only; no repository or secrets. Proof screenshot: quota-pending.png.

Validation: syntax checks/build; all 32 public/preview metadata pairs; sitemap XML and 26 URL count; Linux Caddy configuration adaptation/validation; isolated local Linux container served all 32 routes byte-identically, returned custom 404 with HTTP 404 and www HTTP 301 preserving query/path. Local verification container stopped. Caddy validation image digest: sha256:eb4d35b7452d1ab6171fbdbe8d9275b2301dad6dad92115d91e19fb9b24d510f. No live TLS, Scaleway deployment or Google indexing claimed.

Resume: after Paris quota approval, provision the already approved app/worker target; restrict SSH, admit public HTTP/HTTPS, install Caddy from its official distribution. Extract the public archive into a versioned release under /srv/feleo-website/, point current to that directory, import hosting/Caddyfile into the server's Caddy config, validate it, then switch only apex A/AAAA to the confirmed server addresses and leave www CNAME at feleo.ai. Caddy needs persistent certificate storage. Verify HTTPS, both hosts, all routes, 404, robots, sitemap, assets and redirects externally before declaring complete. Google Search Console verification/index request remains pending; indexing can take days/weeks and is not guaranteed. Enquiry delivery and final company/privacy content remain existing unfinished work, not introduced by hosting.

# Feleo handoff

### Was wurde in dieser Session gemacht (2026-10-19)

Design System (Abschnitt „Website“) angewendet und nach Aleksas Freigabe live geschaltet (main `c46a1cd`, Netlify geprüft). Danach Fix `718d92d`: großes Wortbild „feleo“ im Fuß war durch die Farbmigration weiß und unsichtbar; jetzt Startseite `surface-selected` (hellblau), Unterseiten `border` (hellgrau), wie vorher. Branch `design-system` ist auf main nachgezogen. Anfragen-Versand weiterhin nicht verbunden.


## Design System auf die Website angewendet — 2026-10-19 (live)

**Seit 19.10. live:** Owner gab frei („Merge design-system into main and put it live“), Fast-Forward von main auf `c46a1cd`, Netlify-Deploy auf https://feleo-ai.netlify.app geprüft (EN und HU in Roboto, Zitat unter dem ersten Bild, brand.css und JPEGs ausgeliefert).

Owner-Auftrag: Website-Regeln ins Feleo Design System, dann Website auf einem Branch umbauen; er schaut vor dem Livegang drüber. Design System Abschnitt „Website“ + Baustein Website: https://claude.ai/artifact/NAy5eDsfgtcKruzcfdUwV4 (v25). Branch `design-system`, **nicht in main** (main deployt automatisch auf Netlify).

- `ds-tokens.css` (aus dem Design System erzeugt, nur hell) und `brand.css` (Markenschicht) werden zuletzt geladen. Alte Stildateien per Skript auf Tokens umgestellt: Farben, Gewichte 400/500/600, Schrift, Glas nur noch an der Kopfleiste (`--glass`), keine blaue Textfarbe außer dem Punkt im ersten Bild.
- Roboto (`assets/fonts/`), Wortbild Hanken. Großbuchstaben-Labels in `render.mjs` per `sc()` in Satzschreibung.
- Startseite: Zitat SYSTEMLINE direkt unter dem ersten Bild (`proof-line`), auf der Startseite nicht mehr doppelt im Gründerabschnitt. Alle Abschnitte auf einer Kante (`content-width`).
- Fotos als JPEG statt PNG (Startseite ca. 13 MB → unter 2 MB), PNG-Originale bleiben im Repo.
- Prüfung: 32 Seiten ohne Abweichung bei Schrift, Gewicht, Farbe; keine Querscroll-Seite bei 320 px; `npm run check` + Build grün. Headless Chrome zeigt die Einblendungen im ersten Bild nicht (Animation läuft dort nicht), Sichtprüfung deshalb im Browser mit abgeschalteten Animationen.
- Offen: Anfragen-Versand weiterhin nicht verbunden (Owner-Entscheidung). Die neun alten Stildateien sind umgestellt, aber nicht zusammengeführt.

## Session close — 2026-10-18, final state

Close explicitly authorizes saving and pushing the latest frontend changes; Netlify auto-publishes main. Current public host: https://feleo-ai.netlify.app/en/ (HU root). The separate private Sites mirror remains at its earlier version and was not republished. Earlier local-only and neutral-design notes below are historical.

Current design: sky-blue feather and buttons with WHITE text, software-matched material, Hanken, restored mountain hero, weighted motion, film imagery and landscape footer. No product demos. Solutions page includes the actual AgentBubble shader adapted from the local app, shown as an illustrative Nóra identity. Frontend offer/contact improvements are included. Owner explicitly deferred real enquiry delivery and booking: do not connect backend services without a new request. Native Hungarian/legal review and visual acceptance of recent additions remain open.

Research references: Avoca for vertical implementation, Smith.ai for software plus managed services, Emitrr for dental communication, moinAI for supported onboarding. Fonio/Superchat audit drove the concrete industry descriptions, pilot/pricing visibility, FAQ and compact contact page. Screenshots/report remain in Downloads/Feleo-branding/site-review/. No claim that competitor results were independently verified.

Product discussion: recommended a lightweight contact directory plus live API reads, not a full CRM and not API-only. Store minimal contact/communication/work-item data and external IDs; keep medical/accounting/contracts in their source systems, verify fresh data for sensitive actions. Contact matching is not authentication. This is a recommendation awaiting owner decision, not an implemented or approved app architecture. Existing customer production, including Beauty Lounge, was untouched.

Feature/use-case list delivered to Downloads/Feleo-Software-Features-und-Use-Cases.md. It describes target scope, not shipped capabilities. A durable copy is saved with the team handoff. No persona active in this session.

## Agent identity and button correction — 18 October 2026

Owner explicitly requires white text inside blue buttons, matching the software. This supersedes the prior dark-text contrast adjustment. Reused the actual local app AgentBubble shader and material for a labelled Nóra assistant identity on the Solutions page, not a product demo. Static fallback, reduced motion and visibility-aware animation included. No software files, customer data or providers changed. Latest website edits remain local and unpublished.


## Frontend conversion improvements — 2026-10-18

Owner authorized implementing the Fonio/Superchat research findings, then explicitly deferred enquiry delivery and booking: frontend only. Local revision retains hero image, Hanken, glass, blue and all existing routes; adds concrete industry captions, direct Solutions/Industries/How we work/Pilots & pricing/About navigation, honest solutions overview, visible industry pilot scope and pricing links, precise implementation copy, integration explanation, five buying FAQs and context for the existing attributed SYSTEMLINE quote. Contact page now presents explanation beside the form, with no redundant self-link hero. Mobile form precedes secondary team detail. Industry CTAs preselect the relevant form option, preview/edit remains local and explicitly unsent. Public-preview wording corrected; no backend/CRM/booking/app changes.

Primary website button text now uses dark ink on the same sky-blue fill for contrast; app code was not changed. Native Hungarian review and visual acceptance remain open. Syntax/build and all 32 local routes passed; browser verified 1440/390/320 layouts, mobile pricing navigation, sector preselection and local form preview. Not pushed/deployed in this turn; preview remains http://127.0.0.1:8772/en/.

## Publication authorized — 2026-10-18

Owner explicitly requested pushing the corrected blue website. This supersedes the local-only/no-push notes below. The approved publication scope restores the mountain hero, removes product demos and uses software-matched sky-blue buttons. Netlify automatically deploys main; Sites remains a separate publication mirror. Syntax check and 32-page build passed before push.

## Owner correction — 2026-10-18 (current)

The product-example preview was rejected. No product demos, simulated conversations or fake interfaces: the product is unfinished. Restored original mountain hero and its motion; removed workflow panels and tab JavaScript. Blue buttons now match the current local software theme: #1FB6FF, white text, 9px corners, subtle inset/drop shadow, white secondary controls; website touch-target height retained. Navigation/hero invite a consultation, not a product demo. The app source was read only and never modified. This supersedes the demo/tab and darker-action-blue descriptions below. Local preview only; no push/deployment.

## Local blue product preview — 2026-10-18

Owner approved creating a local homepage direction based on Superchat and restoring blue. `src/blue-home.mjs` replaces the homepage composition; `blue.css` is the final shared palette/control layer. White hero with blue headline, accessible solid-blue actions, keyboard-operable Voice/Chat/Workflow tabs with explicitly illustrative conversations, three industry photos, concise implementation steps, founder/attributed proof and approved landscape footer. Hanken and existing motion retained. No real software screenshots are claimed or customer software touched.

Preview: http://127.0.0.1:8772/en/ (HU root). Run `PORT=8772 npm run dev` when server is stopped. Not pushed or deployed: main pushes now automatically deploy to Netlify. The prior neutral website remains live. Native Hungarian review, actual product captures, lead delivery and final legal content are still pending. Latest local revision awaits owner feedback.

Verification: syntax/build passed, 32 local routes returned HTTP 200; 1440/390/320px checks found no horizontal overflow. Browser verified tab click/arrow-key selection, mobile menu, HU/EN switching, demo link to the local enquiry page and industry anchor/compacting header. No console errors observed. Actual product captures remain a separate follow-up; the local homepage uses labelled workflow illustrations.

## Session close — 2026-10-18

Current website source: `4e33f1a` (homepage hierarchy cleanup). Private preview: https://feleo-design-study.enneo.chatgpt.site/en/; Hungarian at `/`. Successful Sites deployment `appgdep_6ad412b76c78819197221050c5bbef7a`, publication source `8c1ee2159b5530314a130d05de4747ed18fcd935`, version `appgprj_6ad3bc9d780481919b8308c846d2d977~appgver_1f78ea11af6081919c811c760a49e8eb`.

Current decisions in order of precedence:
- Hanken retained. **Neutral Glass** selected by owner: white/neutral surfaces and monochrome logo. Original blue and warm-paper directions are historical, not current defaults.
- Owner subsequently rejected glass action buttons. **Solid white controls**, fine border, no blur/bevel/glow; desktop header/hero actions verified at 216×48px. Glass remains in surrounding interface surfaces. See buttons.css.
- Film-like nostalgic sector imagery replaced pristine still lifes; generated founder portrait and landscape footer retained. Originals remain archived only.
- Latest cleanup removes decorative eyebrows, scroll cue, Budapest hero caption and orphan reference banner. Homepage sequence: hero → clear services → aligned industries → team with attributed quote → contact → footer landscape. Common structure.css governs width/spacing/headings. Do not restore these removed elements to make the page feel "richer".
- The owner said the direction was improving, then requested cleanup. The **latest cleanup has been published but not yet reviewed/approved by him**. Session close is not visual approval.

Next website session: open the current preview and obtain targeted feedback on the unified page structure before another broad redesign. Lead delivery/booking remain disconnected; native Hungarian and legal/commercial review still pending. No claim of mobile QA for the latest refinements: recent verification was source/build and desktop browser checks. Earlier 32-route responsive checks predate these changes.

Runtime customer software was not edited or deployed in this website session. A separate software session is active; do not overwrite its working changes or assume the earlier isolation-planning notes describe its latest state. Development preview server from this session was stopped; use the hosted preview or npm run dev.

## 2026-10-18 — Homepage hierarchy and content cleanup

Owner wanted unnecessary labels/captions removed and clearer, consistent section structure. Removed hero eyebrow, Make Room for More scroll cue, Budapest/international caption and orphan previous-client banner. Replaced service slogans with clear Voice/Chat/Implementation names plus one explanatory sentence. Industries now have equal top alignment and clear sector names instead of small numbered labels. Testimonial integrated with founder/team context, with attribution preserved; separate homepage quote block removed. Shared closing reduced to heading + action. Footer contact link now has an actual localized label (previously empty).

New structure.css establishes common content width, section gaps, heading scale and alignments. Images, palette, header glass, buttons, scroll and footer scenery retained. Build/syntax passed; homepage structure, working industry anchor and equal industry card geometry inspected in browser. No changes to production customer software.

## 2026-10-18 — Clean action controls

Owner rejected the glass-button appearance, transparency, inconsistent sizing and generic styling. Added buttons.css as the final action system: solid white, fine neutral border, no blur/gradient/shadow, consistent 48px desktop height and 14px Hanken, aligned 16px SVG arrows. Hero actions now equal 216px width. Secondary action is a restrained outlined variant; mobile header uses explicit compact 44px control. Glass remains in header and surrounding surfaces. Existing links/form behavior preserved. Desktop computed styles and links checked; build passes.

## 2026-10-18 — Neutral Glass selected and implemented

Owner rejected the warm paper/blue mix and loss of liquid glass. Shown three image comparisons; explicitly selected **Neutral Glass**. Applied to the existing website (no replacement of imagery/layout): pure white canvas, monochrome dark feather/favicon, silver translucent CTA buttons, broad frosted glass header, neutralized service/founder/pilot/form surfaces. Founder panel lightly overlaps its image to make the glass material legible. Reduced-transparency and forced-colors fallbacks included. Hanken, film images, motion and landscape footer preserved. Original blue SVG remains available but not used as current favicon.

Implementation lives in the final Neutral Glass block of enterprise.css. Source/build checks passed; desktop visual and anchor navigation checked in the in-app browser. Existing app/customer infrastructure untouched. Latest rendered site still needs owner's visual evaluation; the direction itself was selected.

## 2026-10-18 — Enterprise visual direction

Owner explicitly asked to move beyond a small-business/studio appearance and approved implementation. Added enterprise.css as final shared layer: full-width neutral header contracts vertically on scroll; direct AI Agents/Industries/Implementation/Company navigation; rectangular restrained buttons, smaller radii, neutral ink/paper surfaces and subdued hero landscape. Hero now clearly states voice/chat agent purpose in HU/EN. Founder copy describes the real three-person responsibilities rather than "I build it". Existing Hanken, logo, film imagery, slow scroll and landscape footer remain. Also restored the missing #platform anchor on the shared service section.

Build/syntax passed; desktop render, software nav and localized paths inspected. No production software/customer resources touched. Review this visual direction before further design expansion.

## 2026-10-18 — Nostalgic sector-image update

Owner requested film-like, softly blurred, nostalgic editorial imagery inspired by Parloa. Replaced three sector image references on homepage and detail pages with new *-film.png assets (clinic reception, technician approaching van, accounting hands/papers/laptop). Generated with built-in image tool; original image versions retained. Founder portrait, hero, footer, layout and software runtime untouched. Prompt briefs in docs/IMAGE-DIRECTION.md.

## Owner approval and software handoff — 2026-10-17

Aleksa explicitly approved the new open CTA, landscape footer and large pale lettering, and expressed satisfaction with this implementation. Preserve it. Website code `2432a4eb2599cc4ffd639f233d539382e25df9f4` is published privately; Sites source `3b99d09c8603fb781ca58ad76822b96c9c1813bc`, successful deployment `appgdep_6ad3e316d59c81918e28291d9fad0e34`. Earlier "awaiting reaction" notes below describe prior checkpoints. This visual approval does not make the draft forms/legal pages production-ready.

Next owner focus is the existing voice/chat software in a new Marcus session. Hard requirement: no changes to existing customer/white-label behavior, especially Beauty Lounge behind the owner's app.aleksa.ai account. A read-only source review indicates shared backend/deployment surfaces; a frontend branch/domain alone is insufficient. Full proposed isolated-environment plan is saved in the team repository at `ai-team/status/FELEO-SOFTWARE-HANDOFF.md`. No application changes or infrastructure provisioning occurred. Keep this repository as marketing-site code, not the software app.

## 2026-10-17 — Open CTA and landscape footer

Owner disliked the large blue closing CTA box and supplied a Superchat footer reference with an oversized pale wordmark above a landscape. Replaced the shared blue box with an unboxed, left-aligned invitation and working localized contact CTA. Appended an original AI-generated panoramic river landscape with large pale Hanken `feleo` lettering after the footer navigation/legal row. It is decorative, not a claimed real location. Applies across shared HU/EN templates; existing hero and motion retained.

New asset: assets/editorial/feleo-horizon.png. Native image proportions maintained; CSS masks fade sky into the page while keeping the lettering readable. Verified HU/EN CTA links, desktop 1440 and mobile 390/320 layouts, no overflow or browser/resource errors. This is a new revision awaiting owner reaction, not blanket approval of the site.

## Session close — 2026-10-17

- Current private preview: https://feleo-design-study.enneo.chatgpt.site/en/ (English); `/` is Hungarian. Latest website source on GitHub: `d59cd352e95f3687c37326c654be2ac3e5abb79e`.
- Verified successful Sites publication: source `3e46c25fc254e9a483836cda0e1dd79fdc9c15a7`, deployment `appgdep_6ad3dcbf0ccc8191bbe823af6e6ca429`, version `appgprj_6ad3bc9d780481919b8308c846d2d977~appgver_e91bcf04af54819196bafa2a70e0bb42`. GitHub and Sites source commits differ by design.
- Approval state matters: Aleksa explicitly liked Hanken, sky blue, the clean hero and weighted scrolling. He rejected the first multi-page expansion. The latest image-led correction was published, but he has **not yet evaluated or approved it**; `/close` is not design approval. Resume by reviewing that revision with him rather than automatically restoring old sections or adding more copy.
- Preserve: direct navigation, no invented software dashboard, concise copy, generated founder imagery based on supplied reference photos, labelled partner placeholders. Image briefs and provenance are in `docs/IMAGE-DIRECTION.md`.
- Next after visual review: native HU/commercial review, actual lead delivery/CRM/booking, final legal/company information and production domain configuration. Private/noindex remains. No campaigns or production DNS were changed.
- No persona was activated. No software-app changes were made in `aleksa-ai-app`; it was consulted read-only. Local preview servers were stopped. Temporary Sites credentials were not written into the repository.

## 2026-10-17 — Visual correction after owner feedback

Owner rejected the generic/text-heavy expansion, software dropdown, invented interface preview and use of original photos. Implemented a shorter image-led homepage, direct What we do / Who we help / About navigation, a typographic voice/chat/automation section instead of fake UI, staggered industry photography, a new founder portrait panel, and image-led product/sector pages with expandable detail. About no longer uses the original Budapest event photo; project diagrams are removed from visual presentation. All 32 HU/EN routes remain.

Generated a photorealistic founder portrait using three supplied photos as identity references, plus three consistent sector images, with the built-in image tool. Originals remain archived assets but are not referenced by rendered pages. AI portrait attribution is present on About and in alt text. New editorial.css is included in build. No live delivery/bookings added.

Validation: 32 routes at 1440/390/320px, zero overflow/browser errors; no .product-demo or .nav-dropdown in generated DOM. Verified images, scope disclosures, mobile direct navigation and local form preview/editing. Source provenance and prompt briefs: docs/IMAGE-DIRECTION.md.

## 2026-10-17 — Multi-page bilingual expansion

User authorized starting the researched website architecture, added Xmethod as a reference and supplied five founder photos. Expanded to 16 page types × HU/EN = 32 static routes. Preserved the approved Hanken/sky-blue identity and weighted scroll. Added software overview, Voice, Chat, three industry offers, implementation, pricing/pilot scope, selected prior work/testimonials, founder/team, data/integration explanation, enquiry and explicitly draft legal/company/confirmation pages.

New source: src/content.mjs (copy/routes), src/render.mjs (shared templates), pages.css. Build generates dist only; old editable root index.html removed. npm run dev builds once then serves; rerun build to refresh edits. Photos in assets/people are unchanged originals, cropped with CSS. Debóra/Ákos use owner-authorized labelled placeholders.

Product views are workflow illustrations, not screenshots or live agents. Contact form is a local preview: zero sending/storage/booking. Hungarian copy is a native-review draft. Pricing is indicative, not checkout. Previous experience explicitly attributed to Aleksa/ALEKSA AI. No unsupported metric or Feleo client-count claims. Full architecture: docs/WEBSITE-STRUCTURE.md.

Verification: all 32 routes and 32 internal route targets returned successfully. Checked all pages at 1440/390/320px with no horizontal overflow, one H1 each and no browser errors. Verified Voice/Chat tabs, dropdown navigation, matching language routes, local form validation/editing with zero POSTs, image loading, mobile navigation, desktop Lenis/compact header, reduced motion, no-JS content and the 404 page.

Next: native-copy and commercial review; capture real redacted platform visuals; connect actual CRM/booking/sender for a pilot-ready funnel. Current privacy/company pages are not production legal completion. Maintain private/noindex preview.

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
