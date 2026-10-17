# Feleo

Marketing website for Feleo, a Budapest-based AI implementation business and future home of Feleo Voice.

- **Source of truth:** https://github.com/aleksaai/feleo
- **Private design preview:** https://feleo-design-study.enneo.chatgpt.site
- **Planned brand domain:** feleo.ai — not connected by this repository setup.
- **Completion roadmap:** [PLAN.md](PLAN.md)
- **Brand decisions:** [docs/BRAND.md](docs/BRAND.md)
- **Resume work:** [HANDOFF.md](HANDOFF.md)

## Run

Node 22 or newer. No package installation required. Lenis 1.3.27 is vendored locally with its MIT license for weighted desktop scrolling.

```sh
npm run dev
npm run check
npm run build
npm run preview
```

Development and preview default to http://127.0.0.1:8769. Set `PORT` if needed. Run only one server on that port at a time.

`index.html`, `style.css`, `motion.css`, `app.js`, `motion.js` and `assets/` are the editable source. `npm run build` produces `dist/`; never edit the generated directory. CI checks JavaScript syntax and builds the site. It does not deploy it.

## Current scope

Responsive English homepage with Hanken Grotesk, sky-blue feather branding, restrained glass navigation, generated landscape artwork, three illustrative industry conversations, FAQs and a local enquiry preview. No live voice, form submission, CRM, analytics or booking integration. The form explicitly states that nothing is sent or saved. Preview indexing is disabled.

## Hosting

The retained `.openai/hosting.json` identifies the existing private Sites preview. GitHub is the canonical development repository; Sites has a separate managed publication source. A GitHub push does **not** automatically update that preview. See [docs/PUBLISHING.md](docs/PUBLISHING.md).

## Assets

Hanken Grotesk is self-hosted with its OFL license in `assets/`. The landscape was generated for this design study. The feather SVG is a prototype reconstruction of the selected concept; final optical refinement remains on the roadmap. No license for the entire repository is implied by the included font license.

## Motion

Fixed glass navigation contracts on scroll; a sliding indicator follows the active section. Desktop wheel scrolling uses locally vendored Lenis (lerp 0.065, multiplier 0.85). Hero imagery moves subtly with scrolling, content enters with long eased reveals, and the example panel settles into place. Touch uses native scrolling. Reduced-motion changes disable smoothing/parallax/reveals; opening the enquiry dialog stops background smoothing. All content remains visible without motion JavaScript.
