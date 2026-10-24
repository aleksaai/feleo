**Hetzner als neues Hostingziel beschlossen — 24.10.2026:** Owner entscheidet nach dem Anbieter-/Latenzvergleich ausdrücklich für Hetzner. **Umzug und vollständige Einrichtung erst in einer neuen Session**, inklusive Website, Feleo-App/Worker, selbst gehostetem Supabase und E-Mail-Lösung. Heute ausschließlich Dokumentation; keine Bestellung, Migration, DNS-/SMTP-/Modelländerung oder Löschung. Aktuelle Produktion läuft weiterhin auf dem ursprünglichen Scaleway-Paar; ältere „Scaleway-only“-Zielentscheidungen sind für die Zukunft überholt, die Scaleway-Betriebsdoku bleibt bis zum erfolgreichen Cutover gültig. Bestehender Hetzner-Testserver CPX32 Nürnberg `172216906` / `91.98.195.11`, Projekt `16522443`, läuft weiter und kostet ca.1,39€ netto/Tag; vor Neuanschaffung Bestand prüfen, keine Doppelbestellung. E-Mail-Umzug ausdrücklich mitplanen: aktuell Scaleway TEM für transaktionale App-Mails; Hetzner-Ziel/Relay noch nicht ausgewählt, keine automatische dauerhafte Scaleway-Abhängigkeit und keine ungeprüfte eigene SMTP-Zustellung versprechen. Bestehende IONOS-Mail-DNS/Microsoft-Konten erhalten, bis der konkrete neue Mailweg geprüft ist. Einstieg nächste Session: `ai-team/status/FELEO-HETZNER-HANDOFF.md` im Team-Repo und `~/Desktop/Projects/feleo-app/docs/HETZNER-MIGRATION-PLAN.md`.

# Scaleway website deployment

## Live release — 24 October 2026

https://feleo.ai now runs on Scaleway Amsterdam, original approved app/worker server 51.15.114.118 (BASIC2-A2C-4G). Caddy serves /srv/feleo-website/current -> releases/20261024-a2a22f9 with persistent TLS certificates and www redirect. IONOS A/AAAA updated; www CNAME retained. All32 routes and assets byte-identical over real HTTPS; sitemap26 URLs, robots and genuine404 verified. Public proof: artifacts/scaleway-live-20261024/verification.json and website-live.png.

Software https://app.feleo.ai and API https://api.feleo.ai also migrated in this authorized session; see sibling feleo-app/docs/SCALEWAY-MIGRATION.md. Mail DNS unchanged. Production uses no Netlify hosting; the historical unbound preview remains. Save this branch rather than main while main still triggers that historical preview. Google indexing/Search Console submission not claimed; crawl metadata is live. Draft legal/company pages and enquiry delivery remain separate work. The earlier identity/Paris blockers below are historical: owner subsequently approved Amsterdam.

## Session close — 2026-10-24

Preparation is saved on `codex/scaleway-website`, not pushed to `main`, because main still triggers Netlify publication. Scaleway deployment remains pending; the prior successful checks above do not establish live hosting.

Identity-verification research: Scaleway's troubleshooting guide recommends contacting Support for manual verification when more than 15 minutes have elapsed since starting. Its setup guide describes a 15-minute window to **complete the submission flow**, not a guaranteed approval turnaround. No official manual-review completion time was found. The owner reported waiting approximately three hours. Support contact was recommended and a message drafted in chat; no ticket was submitted. The status page also reported support-ticket processing delays at research time; this does not prove the cause of this account's pending approval.

Sources: https://www.scaleway.com/en/docs/account/troubleshooting/cannot-verify-identity/ · https://www.scaleway.com/en/docs/account/setup-lifecycle/verify-identity/ · https://status.scaleway.com/

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

