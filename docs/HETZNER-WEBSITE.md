# Feleo Website auf Hetzner

Seit 24.10.2026 liegen feleo.ai und app.feleo.ai auf Hetzner CPX22 `feleo-app-01`, 172222148, Nürnberg, 167.235.22.248 / 2a01:4f8:1c19:ab5f::1. www bleibt CNAME feleo.ai. IONOS bleibt Registrar und DNS-Anbieter.

Die bestehende Website-Version wurde unverändert übernommen: `/srv/feleo-website/current`, Caddy `feleo-edge`, `/etc/caddy`, persistente Zertifikate `/srv/feleo-caddy`. 33 HTML-Dateien inklusive direkter 404.html bytegleich zum Build; 32 reguläre Seiten, echte 404 bei unbekanntem Pfad, www-301 inklusive Query, robots und Sitemap mit 26 URLs geprüft. HTTPS über die neue IPv6-Adresse verifiziert.

Software/Core/Backup/Mail und Rollback: [HETZNER-MIGRATION.md](../../feleo-app/docs/HETZNER-MIGRATION.md). Sämtliche ursprünglichen Scaleway-Hosts, IPs und Volumes wurden nach erfolgreichem Cutover und ausdrücklicher Ownerfreigabe gelöscht. DNS-Rückkehr auf deren Adressen ist kein Rollback.

Website-Inhalt und Brand blieben unverändert. Kein Google-Indexierungsnachweis, keine Fertigstellung von Rechtstexten oder Anfragezustellung. Keine Netlify-Veröffentlichung; dessen historische Preview-Automation auf main weiterhin berücksichtigen.

Private Prüfbelege liegen im App-Repo unter `.local/hetzner-migration/`; bereinigter Releasebeleg `feleo-app/docs/hetzner-release-verification.json`.
