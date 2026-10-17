> Latest revision: the owner rejected the text-heavy expansion, software dropdowns, fake UI preview and direct use of original photos. Current navigation is What we do / Who we help / About. The homepage uses short typographic service links, sector imagery and an AI-generated founder portrait. Product detail lives in image-led disclosures. Original plan below is retained as architectural history, not the current visual specification. See IMAGE-DIRECTION.md and HANDOFF.md.

# Website architecture — 17 October 2026

## Positioning
Feleo combines voice/chat agent software with hands-on implementation for businesses in Hungary. The platform exists; Feleo branding, Hungarian rollout and customer-specific channel setup must not be confused with a universally ready self-service product.

The approved sky-blue feather, Hanken typography and weighted desktop motion stay. The homepage identifies the product directly, then connects it to specific business workflows and the people who deliver it.

## Reference synthesis

| Reference | Observed structure | Applied to Feleo |
| --- | --- | --- |
| [Superchat](https://www.superchat.de/) | Product capabilities, industry applications, customer stories, demo | Platform overview and distinct industry entrances |
| [Fonio](https://www.fonio.ai/) | Product types separated from use cases and industries, product testing | Voice and Chat pages with useful illustrative demonstrations |
| [Enneo](https://www.enneo.ai/) | Problem, workflow, systems, human handoff, implementation | Show what happens after the first response; explain access and boundaries |
| [Xmethod](https://www.xmethod.de/en) | Projects early, explicit service scope, visible process and team, commercial starting points | Selected prior work, implementation steps, founder/team imagery and indicative project ranges |
| [Radyant conversion-first guidance](https://www.radyant.io/guides/drive-more-conversions-from-seo-organic-search-traffic) | Commercial intent and conversion journeys before traffic-only content | Build the offers, cost context and next steps before a large blog |
| [NN/G B2B usability](https://www.nngroup.com/articles/b2b-usability/) | Buyers need useful detail about fit, cost and compatibility | Dedicated capability, pricing, implementation and data/integration pages |
| [Google multilingual guidance](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites) | Distinct language URLs and explicit switching | Hungarian root routes, matching English /en/ routes |

These observations are design inputs, not verified conversion benchmarks. We do not transfer reference-company awards, conversion rates, customer logos or product claims.

## Main navigation
Software (overview, Voice, Chat, pricing); Industries (dental, HVAC, accounting); Implementation; About (team, experience, data/integrations). One consultation CTA plus the HU/EN language switch. Footer repeats substantive pages and legal-preview links.

## Homepage sequence
1. Approved atmospheric hero; direct voice/chat + implementation explanation.
2. Selected previous-work references with explicit attribution to Aleksa.
3. Platform section with interactive Voice/Chat workflow illustration.
4. Three industry entrances and their distinct problems.
5. Software + implementation explanation.
6. Attributed previous client testimonial.
7. Founder photograph and accountable delivery story.
8. Working process, relevant FAQs, consultation CTA.

## Pages implemented
16 page types × 2 languages = 32 routes. The page types are homepage, software, Voice, Chat, implementation, dental, HVAC, accounting, pricing, experience, About, contact, data/integrations, privacy preview, company-information preview, and a thank-you/preview-status route. See src/content.mjs for the exact English/Hungarian route map.

All pages are generated static HTML with real links and unique titles/descriptions. They deliberately remain noindex with a blocked preview robots file. Canonicals/hreflang/sitemap for the final domain are release work; the native language switch already preserves page context.

## Imagery and proof
- User-supplied founder photos copied unchanged into assets/people; CSS crops select the framing.
- Neutral initial-letter placeholders for Debóra and Ákos are explicitly labelled as missing portraits, as the owner authorized. They are not fabricated people.
- Product UI is an explicitly labelled workflow illustration using sample data, not an asserted current software screenshot. Real redacted software captures and recordings are a subsequent asset step.
- Project artwork is labelled illustration. Project descriptions and short testimonials come from the owner's aleksa.ai site. No project-count, revenue or conversion figures transferred because the source contains inconsistent totals and metrics need substantiation.
- Prior client work remains clearly attributed to Aleksa/ALEKSA AI before Feleo's Hungarian launch, not presented as local pilot evidence.

## Commercial and operational boundaries
Source context: owner's ANGEBOTE.md and PLAN.md dated 17 October 2026, plus subsequent conversation corrections. Files remain outside this repository; only approved offer scope is reflected in page copy.

The pricing page presents indicative standard project ranges with quote-specific tax, usage and third-party-cost details; they are not standalone SaaS subscription prices. It explains the planned six-week pilot model separately. Dental pilot excludes telephone and direct CRM writing; accounting pilot is existing document-process implementation; HVAC starts with missed-call coverage and callback tickets.

The contact experience validates locally, displays an enquiry preview and allows editing. It intentionally sends/stores nothing and makes no booking claim. It must not be used as a live campaign destination until real delivery/routing/booking is connected and tested.

## Remaining before public launch
Native review of Hungarian copy; commercial/tax wording sign-off; final company registration/contact details; provider-specific legal/privacy notices; real CRM/booking/sender connections; data handling and consent/tracking configuration; final domain/SEO configuration. Then real proof and actual software screenshots/audio where available. None of these require removing the approved visual system.
