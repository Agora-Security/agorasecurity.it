# Font self-hosted

Tutti i font devono essere serviti dal repo. **Niente Google Fonts CDN, niente Adobe Typekit** (privacy: leakage IP visitatori).

## File richiesti (woff2)

| Famiglia | File | Sorgente | Licenza |
|---|---|---|---|
| Inter Variable | `inter-var.woff2` | https://github.com/rsms/inter/releases | OFL 1.1 |
| Merriweather 700 | `merriweather-700.woff2` | https://fonts.google.com/specimen/Merriweather (download via google-webfonts-helper) | OFL 1.1 |
| Merriweather 900 italic | `merriweather-900italic.woff2` | id. | OFL 1.1 |
| JetBrains Mono 400 | `jetbrains-mono-400.woff2` | https://github.com/JetBrains/JetBrainsMono/releases | OFL 1.1 |
| JetBrains Mono 500 | `jetbrains-mono-500.woff2` | id. | OFL 1.1 |

## Tool consigliato

[`google-webfonts-helper`](https://gwfh.mranftl.com/fonts) per scaricare subset latin/latin-ext da Google senza chiamare il loro CDN.

## Verifica

```bash
ls -lh static/fonts/*.woff2
# Ogni file dovrebbe pesare 30-150KB.
```
