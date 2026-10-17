# Feleo website — completion plan

Status: 2026-10-17. Source of truth: `aleksaai/feleo`.

## Outcome

A polished, Hungarian-first website on **feleo.ai** that explains the three agency offers, qualifies relevant enquiries, and helps visitors book a consultation. Feleo Voice is presented accurately as the software behind suitable services, with product readiness stated truthfully. The marketing site is separate from the existing OpenPenguin application.

The current prototype establishes the visual direction. The next objective is a **pilot-ready acquisition funnel**, followed by the broader public launch. Building the software and preparing campaign assets can run alongside the website; there is no need to wait for a perfect platform or for speculative discovery meetings.

## Decisions already made

- Feleo name, one domain, two-part feather, sky blue, **Hanken Grotesk only**.
- Preserve generous whitespace, atmospheric imagery and restrained glass navigation from the approved prototype.
- Target: private dental clinics with foreign enquiries; HVAC/refrigeration/building services; accounting offices with staff.
- Lead flow: capture contact and a small amount of qualification → optional calendar booking. Leads who do not book remain actionable callbacks, not lost form sessions.
- Aleksa builds the site, software and campaigns. Debóra qualifies/calls incoming leads and helps arrange appointments; Ákos conducts Hungarian consultations and later supports delivery.
- No assumed network, no assumed pilot participation from existing contacts. No fabricated case studies.

## What is done

- [x] Source imported into the owner's GitHub repository.
- [x] Hanken-only baseline; public typography-comparison toolbar removed.
- [x] Responsive homepage, industry example switcher, local-only enquiry preview.
- [x] Added practical FAQs.
- [x] Self-hosted font/license, existing generated hero and feather SVG preserved.
- [x] Reproducible static build and syntax/build CI configuration.
- [x] Private preview retained; no production DNS changes.

## Implementation progress — multi-page expansion

- [x] Shared static page/locale generator and cross-language route switching.
- [x] Software overview plus dedicated Voice and Chat pages.
- [x] Industry pages with distinct pilot scope; implementation and indicative pricing pages.
- [x] Founder/team imagery; owner-authorized placeholders for Debóra and Ákos.
- [x] Previous-work references and short attributed testimonials.
- [x] Local enquiry preview with basic form validation and edit/review state.
- [x] Data/integration explanation and explicitly draft legal/company pages.
- [ ] Native Hungarian copy review and commercial wording confirmation.
- [ ] Actual redacted product screenshots/audio; current views are labelled illustrations.
- [ ] Live lead delivery, CRM/booking/sender and tracking/consent wiring.
- [ ] Complete verified company/legal information and production domain/SEO release.

The current route map is src/content.mjs; architecture decisions and sources are in docs/WEBSITE-STRUCTURE.md. This progress section supersedes the earlier preliminary route names below without declaring the full phases complete.

## Work sequence

### Phase 1 — Finish the design and content structure

**Owner:** Aleksa with coding agents. **External dependencies:** none for implementation.

- [ ] Finalize Hanken scale, line lengths and weights for desktop/mobile, using long Hungarian text as well as English.
- [ ] Refine feather SVG and export favicon, monochrome/reversed mark and social avatar. Keep the approved shape, no new logo exploration.
- [ ] Define reusable navigation, footer, CTA, FAQ, form and content sections. Keep pages static and fast; use a light build-time template system when shared pages are added rather than duplicating everything. Do not migrate to a large app framework merely for the marketing pages.
- [ ] Extract text into locale/content files; prepare Hungarian as the primary visitor language and English as the secondary language. Do not simply machine-translate the English slogan.
- [ ] Write page briefs from the existing offers, distinguishing pilot scope from future add-ons and available integrations from planned ones.
- [ ] Optimize self-hosted fonts to WOFF2 for the web, preserve full Hungarian coverage and retain desktop font files for document assets. Optimize generated imagery and reserve image dimensions.

**Done when:** approved Hanken/sky-blue treatment works on phone and desktop, reusable page structure exists, and every planned page has a specific audience/action. The homepage identifies AI implementation early enough that visitors do not mistake it for a lifestyle product.

### Phase 2 — Build the pages and sector-specific pilot funnels

**Owner:** Aleksa with coding agents. **Partner input:** a focused native-language review after drafts are ready.

Planned routes (final Hungarian slugs can be adjusted before launch):

| Page | Purpose | Primary action |
| --- | --- | --- |
| `/` | Hungarian brand homepage, concrete services and links to sector offers | Choose sector / discuss a use case |
| `/en/` | English brand homepage | Request consultation |
| `/fogaszatok/` | Multilingual first response and qualification for private dental clinics | Request a focused pilot discussion |
| `/klima/` | Overflow/missed-call handling for HVAC and heating businesses | Request a callback / pilot discussion |
| `/konyveloirodak/` | Introduce existing document processes and onboard clients | Request a process discussion |
| `/voice/` | Feleo Voice capability, boundaries, integrations and appropriate demo | Discuss suitability; no unready self-service signup |
| `/rolunk/` | Actual Budapest business, people and delivery approach | Consultation |
| `/kapcsolat/` | Shared enquiry and qualification funnel | Submit enquiry, then optional booking |
| `/koszonjuk/` | Submission status and optional calendar; recoverable booking state | Book or request callback |
| `/adatvedelem/`, `/cegadatok/`, `/sutik/` | Verified operator/privacy/cookie information | Inform and provide preferences |

Sector pilot copy must reflect the existing offer:
- **HVAC:** catch unanswered calls, collect the issue, prepare a callback ticket; no broad dispatch/ERP claims. Viber/SMS and scheduling claims depend on the configured pilot integration.
- **Dental:** multilingual email/form/WhatsApp response, qualification and structured handoff. Telephone and CRM writes are outside the initial pilot scope unless separately verified and added. No medical judgement or pricing plan generated by the agent.
- **Accounting:** introduce one existing document intake workflow for a limited client cohort, including onboarding. No tax advice, no claim that a new AI platform replaces the accounting package. Any eÁFA dates and regulatory assertions must be checked against current primary sources before publication.

Shared sections: actual problem → concrete workflow example → pilot scope/exclusions → onboarding steps → FAQs → enquiry. Keep example data clearly illustrative. Do not add unsupported customer counts, ROI claims, vendor logos or blanket EU-only processing promises.

**Done when:** each campaign/email can link directly to one relevant landing page; a visitor understands the offer and next step without a sales explanation. No unfinished routes or placeholder legal/company claims are public.

### Phase 3 — Connect lead capture, qualification and appointments

**Owner:** Aleksa builds. Debóra and Ákos test their receiving workflow near completion.

- [ ] Choose the CRM/lead destination, scheduling provider and transactional sender. Decide together as one implementation choice; do not block earlier frontend work on it.
- [ ] Build a server-side endpoint with input validation, spam/rate controls, server-held credentials, idempotency and durable lead storage.
- [ ] Form captures name, business, work email/phone, sector, role and one short pain/volume question. Use progressive questions instead of a long mandatory survey. Keep patient, client and tax documents out of the marketing form.
- [ ] Record a minimal attribution payload (landing page, channel and UTM values) under the agreed privacy policy; avoid unnecessary personal data in URLs or analytics.
- [ ] After successful persistence, show a booking option. A calendar-provider outage must not erase the submitted enquiry.
- [ ] Calendar uses Europe/Budapest timezone and actual availability. Verify confirmations, cancellation/rescheduling and reminders with the chosen provider.
- [ ] Unbooked valid leads go into Debóra's callback queue. Booked leads and their qualification summary go to Ákos. Make ownership and states visible.
- [ ] Add booking-webhook verification, duplicate-event handling and reconciliation; success must be confirmed by the provider, not inferred from opening the calendar.
- [ ] Implement transactional acknowledgements and internal notifications; confirm delivery. Keep marketing consent separate where relevant.
- [ ] Preserve form values after recoverable errors, prevent duplicate submits, show honest failure/retry states, support keyboard/screen readers.

Lead stages: `new → callback needed / booked → qualified / not a fit → meeting held / no-show → pilot proposed → won / lost`. Do not count every form as a qualified sales conversation. Qualification considers sector, suitable company size, decision authority, concrete problem and willingness to pay; confirm this in the human workflow rather than relying only on self-reported form fields.

**Done when:** test enquiry appears exactly once in the lead destination; an optional booking updates the same lead; unbooked leads remain assigned; cancellation and no-show states can be recorded. No placeholder success message.

### Phase 4 — Add relevant demos and launch-ready content

**Owner:** Aleksa; focused Hungarian language check with Debóra/Ákos.

- [ ] Replace generic example copy with honest sector-specific demonstration scripts. Keep the current examples until real assets exist.
- [ ] Add a real Hungarian audio example for the HVAC offer, with suitable transcription, disclosure and consent/rights. A live voice demo is optional, not a website-launch dependency; if added, protect credentials and cap usage.
- [ ] Show dental response/handoff and accounting intake/onboarding examples, rather than forcing a voice demo onto every offer.
- [ ] Finalize paid pilot scope, duration, price treatment, usage limits and continuation terms. Current working model: focused six-week pilot, no setup fee and half the relevant monthly test price, with explicit decision about continuation. Reconcile exact public pricing with approved commercial terms before showing numbers.
- [ ] Add genuine team/company information and approved imagery. Include a useful integration policy: check access first, offer a human handoff where calendar/CRM writes are unavailable.
- [ ] Create one matching document template (proposal) and one ad layout using Hanken, feather and sky blue. These provide a reusable brand system across channels.

**Done when:** public copy matches deliverable capabilities, Hungarian text is reviewed, and demonstration assets support the offers without fabricated outcomes. Case studies are added later with measured results and permission; they do not block the pilot launch.

### Phase 5 — Tracking, search, privacy and public deployment

**Owner:** Aleksa. **Dependencies:** final company details, hosting/domain access and chosen data-processing stack; legal review scoped to the actual setup.

- [ ] Choose production hosting and connect feleo.ai with HTTPS, canonical host redirects and a documented rollback path. Keep private preview independent.
- [ ] Complete privacy/operator/cookie pages against the actual vendors, destinations, retention and contact details. No copied generic compliance claims.
- [ ] Implement consent controls appropriate to the final tracking stack. Do not load optional marketing tags before required consent; refusal must preserve site and form use.
- [ ] Events: landing view, form start, persisted lead, confirmed booking, qualified lead, held meeting. Define server/browser deduplication for Meta if both are used. No contact details, transcript text or sensitive fields in analytics events.
- [ ] Separate booked/held/qualified metrics; report sector and channel. Ads optimization events must reflect real backend outcomes.
- [ ] Add localized titles/descriptions, canonical/hreflang, sitemap, robots, social previews, accessible image alternatives and a useful 404 page. Structured data contains only true business information.
- [ ] Keep previews noindex. Remove noindex only on the approved production release with live legal/contact/funnel pages.
- [ ] Add delivery/error monitoring and a practical lead-failure alert. Document access and recovery without putting credentials in the repo.

**Done when:** correct domain and metadata resolve; search indexing configuration is intentional; consent behavior is verified; a real test journey reaches the right person and is attributed once.

### Phase 6 — Pilot launch and broader launch

- [ ] Test 320/390/768/1440px layouts, keyboard navigation, focus, contrast, reduced motion and all form states. Check relevant Safari/Chrome behavior.
- [ ] Test empty/invalid/duplicate submissions, provider outage, calendar cancel/reschedule, confirmation links, declined consent and blocked analytics.
- [ ] Check representative mobile performance, image/font loading and layout stability. Targets: LCP ≤2.5s, CLS ≤0.1, INP ≤200ms where measurable; before launch use lab checks and instrument real-user metrics later, not an unsubstantiated performance guarantee.
- [ ] Complete one consented end-to-end test with Debóra's callback queue and one booking/consultation handoff to Ákos.
- [ ] Start small campaigns only for pages whose corresponding pilot can be fulfilled. Learn from real enquiries and adjust copy/qualification before expanding spend.
- [ ] Add genuine proof and refine the Voice product page as the software becomes ready. Separate later self-service billing/login from this site's pilot enquiry funnel.

**Pilot-ready release:** clear relevant landing page + working persisted enquiry + optional verified booking + assigned follow-up + accurate legal/privacy setup + deliverable pilot. Full blog, calculators, customer portal and extensive case studies are not required.

**Full website release:** core pages and locales complete; live conversion flow and tracking verified; accessibility/performance checks passed; domain/metadata/monitoring configured; content accurately represents operations.

## Timing and next execution slice

The earlier GTM plan targets a small November pilot campaign, winter preparation and larger February/March campaigns. Treat those as intended windows, not evidence that every sector or channel behaves identically. Start building now; do not wait for February to prepare the funnel.

Next build slice, in order:
1. Shared page/template and locale structure; refine the Hanken-only visual system.
2. HVAC pilot landing page and shared enquiry UX, followed by dental and accounting pages using their distinct scopes.
3. CRM + calendar + sender selection and real server-side lead flow.
4. Hungarian review, tracking/privacy integration and end-to-end pilot launch checks.

No automatic campaigns, purchases, DNS switch, public-access change or messages to prospective customers are included in this plan. Those are separate execution actions when requested and ready.

## Inputs needed later, not blockers to frontend preparation

| Input | Needed for |
| --- | --- |
| CRM, scheduler and sending mailbox selection/access | Phase 3 integration |
| Debóra/Ákos availability, receiving accounts and agreed callbacks | End-to-end routing/booking checks |
| Correct Kft. address, registration/contact details and actual vendors | Public operator/privacy pages |
| Approved pilot commercial terms | Public offer and pricing text |
| feleo.ai DNS access and production-host choice | Phase 5 release |
| Native review of finished Hungarian copy | Pilot publication |

## Deliberately outside this repository

OpenPenguin/Feleo Voice application migration, production agent infrastructure, billing internals, patient uploads and accounting-data processing. Coordinate branding and links, but keep the marketing site focused on explaining the offer and acquiring suitable enquiries.
