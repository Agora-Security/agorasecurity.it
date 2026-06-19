# Asset immagini

Asset da popolare prima del deploy:

| File | Sorgente | Note |
|---|---|---|
| `scudo_250x250.png` | Deck value proposition | Logo blu su sfondo bianco |
| `scudo_250x250_yellow.png` | Deck value proposition | Logo giallo su sfondo scuro |
| `agoro_negativo_all_white_no_sfondo.png` | Deck value proposition | Lockup orizzontale, negativo |
| `og.png` | Da generare | Open Graph 1200×630, scudo + tagline |
| `hero-bg.jpg` | **Da generare con AI** | **Sfondo statico dell'hero della home.** 16:9 ~2560×1440, base scura `#0a0a0c`, blu `#0066FE` + oro `#FFC000`, centro "calmo" per il testo, nessun testo/logo nell'immagine. Referenziato da `sass/_extra-2026.scss` → `.hero-bg`. |
| `hero-poster.avif` | Da generare | Frame statico hero per `prefers-reduced-motion` (opzionale, ora coperto da `hero-bg.jpg`) |
| `apple-touch-icon.png` | Da generare | 180×180 |
| `favicon.svg` | Da generare | SVG single color |
| `favicon.ico` | Da generare | Multi-size |
| `partners/*.{webp,avif}` | Selezione finale TBD | Loghi clienti/partner |

## Conversione consigliata

```bash
# WebP
cwebp -q 90 input.png -o output.webp
# AVIF (più compresso, slow encoder)
avifenc -s 8 -j all input.png output.avif
```
