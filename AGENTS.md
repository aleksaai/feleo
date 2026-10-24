**Feleo auf Hetzner live — 24.10.2026 (Marcus):** Owner beauftragt und genehmigt Umzug, Zusatzserver, Backup, Mailpaket und abschließende Scaleway-Löschung. Vorhandener CPX32 jetzt `feleo-core-01` (172216906 / 91.98.195.11), neuer CPX22 `feleo-app-01` (172222148 / 167.235.22.248), beide Nürnberg. Website/App/API samt vier Workern und selbst gehostetem Supabase live; 141 Tabellen beim finalen angehaltenen Transfer exakt, 225 ACL/RLS-Objekte und sechs Storage-Policies erhalten, 211 Tests/Build/Browser/private Dateien bestanden. Drei echte Prüf-Mails über Hetzner `noreply@notify.feleo.ai` zugestellt; IONOS-Hauptdomain-Mail und Microsoft-Verbindungen erhalten. BX11 Falkenstein 682286 mit verschlüsselten täglichen Borg-Backups, Retention 7/4/3, wöchentlicher Integritätsprüfung und echter Datenbank-Restoreprobe; lokale Health-Timer, kein externes Alarmziel/keine HA. Gesamt genehmigt 61,42 €/Monat netto vor Verbrauch/Steuern. Alte zwei Scaleway-Hosts, drei Volumes, vier IPs, TEM-Domain und SMTP-App/API-Key ausdrücklich gelöscht; alter SPF/DKIM entfernt, Konto erhalten/angefallene Nutzung bleibt zahlbar. Neue Betriebsquelle `feleo-app/docs/HETZNER-MIGRATION.md`, Beleg `docs/hetzner-release-verification.json`. Alte Scaleway-Betriebsanweisungen jetzt historisch; kein DNS-Rollback auf alten Datenstand. Modelle/Voice/PSTN separat, kein Mistralwechsel durch diesen Umzug.

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

## Current brand reference — 23 October 2026

The owner requested consolidation after approving Eisweiß, the current white tiles and original Feleo Schwung icons. The maintained brand/design package is `../feleo-app/brand-system/README.md` (private repository `aleksaai/feleo_software`, `brand-system/`). Use it over conflicting older artifact/export notes below. Roboto is ordinary text, Hanken is the wordmark; #1FB6FF remains the brand blue. Eisweiß is the app-frame decision; preserve the existing website composition until a website change is requested. This update changes guidance, not website CSS or published pages.

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

## Design System gilt — 2026-10-19
Quelle der Wahrheit für Marke und Gestaltung ist das Feleo Design System (https://claude.ai/artifact/NAy5eDsfgtcKruzcfdUwV4), Abschnitt „Website“. Das überholt die Hanken-only-, Neutral-Glass- und Blau-Notizen unten. Roboto (Wortbild Hanken), Tokens aus `ds-tokens.css`, Markenschicht `brand.css` zuletzt geladen. Neue Stile nur mit Tokens; keine neuen Gewichte außer 400/500/600, keine Großbuchstaben-Labels, Glas nur an der Kopfleiste. Stand siehe HANDOFF.md.

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
