# agorasecurity.it

Sito web aziendale di **Agorà Security S.r.l.** — generato con [Zola](https://www.getzola.org/), pubblicato su GitHub Pages, servito tramite Cloudflare.

## Stack

- **Generator**: Zola 0.22+ (Rust, single binary)
- **Hosting**: GitHub Pages via GitHub Actions
- **DNS / CDN / TLS**: Cloudflare
- **Lingue**: IT (default) + EN (i18n nativo Zola)
- **Hero 3D**: Three.js self-hosted
- **CSS**: SCSS vanilla con design tokens (no Tailwind)
- **JS**: vanilla ES2022, no framework, no bundler
- **Font**: self-hosted woff2 (Inter, Merriweather, JetBrains Mono — niente Google Fonts CDN)
- **Analytics**: Cloudflare Web Analytics (cookieless)
- **Lead capture**: `mailto:` (no form, no reCAPTCHA)

## Sviluppo locale

Prerequisiti: [Zola](https://www.getzola.org/documentation/getting-started/installation/) installato (`~/.local/bin/zola` su questa macchina).

```bash
# Dev server con hot reload
zola serve --interface 0.0.0.0 --port 1111
# Apri http://localhost:1111 (IT) e http://localhost:1111/en/ (EN)

# Check (parsing + link interni, senza output)
zola check

# Build di produzione
zola build --minify
# Output in public/
```

## Setup pre-deploy

Operazioni una tantum prima del primo deploy:

1. **Vendoring Three.js** (vedi `static/js/three.module.min.js` per istruzioni). Verificare integrità SHA-256 e licenza MIT.
2. **Font self-hosted** in `static/fonts/` (vedi `static/fonts/README.md`).
3. **Asset immagini** in `static/img/` (vedi `static/img/README.md`).
4. **Configurare GitHub Pages**: repo Settings → Pages → Source = "GitHub Actions".
5. **Configurare DNS Cloudflare**:
   - Record CNAME `agorasecurity.it` → `<USERNAME>.github.io` (proxied).
   - Record CNAME `www` → `agorasecurity.it`.
   - SSL/TLS mode: `Full (strict)`.
6. **Security headers** via Cloudflare Transform Rules (consume `static/_headers` come reference).
7. **Cloudflare Web Analytics**: aggiungere snippet `<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token":"..."}'></script>` in `templates/base.html` (block `extra_head` o footer).

## Struttura del repo

```
agorasecurity-site/
├── config.toml                 Zola config + i18n IT/EN
├── content/                    Markdown per ogni pagina (.md = IT, .en.md = EN)
├── templates/                  Tera templates (base + per-tipo)
├── sass/                       SCSS modulare (compilato da Zola → main.css)
├── static/                     Asset serviti as-is (img, fonts, js, _headers, CNAME)
└── .github/workflows/deploy.yml CI/CD GitHub Pages
```

## Privacy / compliance — invarianti

Il sito è il showcase di compliance dell'azienda. **Mai introdurre**:

- Google Fonts CDN, Adobe Typekit, font CDN extra-EU
- YouTube/Vimeo embed (link esterno se serve video)
- reCAPTCHA, hCaptcha (no form di contatto)
- GA4, Hotjar, Microsoft Clarity, Facebook Pixel, LinkedIn Insight Tag
- CDN per JS/CSS/img extra-EU
- Iframe verso terze parti

**Sempre verificare a delivery**:

- `https://webbkoll.dataskydd.net/it/` su URL produzione → ≥90/100
- `https://securityheaders.com/` → A o A+
- `https://observatory.mozilla.org/` → B+ minimo, target A
- DevTools Network → filtro Third-party: vuoto o solo Cloudflare

## Verifica accessibilità & performance

- Lighthouse target: Performance ≥90, A11y/Best Practices/SEO ≥95
- WCAG 2.2 AA
- `prefers-reduced-motion`: hero 3D si disattiva, mostra poster statico

## Licenze

- Codice: vedi [LICENSE](LICENSE).
- Contenuti, marchi, loghi: © Agorà Security S.r.l.
- Three.js: MIT (mrdoob & contributors).
- Inter / Merriweather / JetBrains Mono: SIL Open Font License 1.1.
