#!/usr/bin/env python3
"""
Regenerate the website favicons from the brand shield master.

Source (external, in ownCloud):
  .../Agora Security Brand/Logo and Business Card/logo/Materiale/png300x300/scudo.png

Outputs (written into ../static):
  static/favicon.svg             vector shield (blue #0054F5, transparent, ~7% padding)
  static/favicon.ico             multi-size 16/32/48 (transparent)
  static/img/apple-touch-icon.png  180x180, shield on dark #0a0a0c (site theme-color)

Pipeline:
  1. Trace the shield's alpha mask to vector with `potrace`  -> favicon.svg
  2. Downscale the original PNG (faithful colour + AA)        -> favicon.ico
  3. Composite shield on the site dark background             -> apple-touch-icon.png

Run from the repo root:
  python3 scripts/build-favicons.py
  python3 scripts/build-favicons.py --src /path/to/scudo.png   # override source

Requires: Pillow, numpy, potrace, rsvg-convert (librsvg).
"""
from __future__ import annotations
import argparse, os, re, subprocess, sys, tempfile
from pathlib import Path

import numpy as np
from PIL import Image

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent
STATIC = ROOT / "static"

DEFAULT_SRC = ("/home/mbrunati/ownCloud/Spaces/AgoSec/Projects/"
               "Agora Security/Agora Security Brand/Logo and Business Card/"
               "logo/Materiale/png300x300/scudo.png")

SHIELD_BLUE = "#0054F5"   # authentic shield colour from the master asset
APPLE_BG = (0x0A, 0x0A, 0x0C, 0xFF)   # matches <meta name="theme-color"> in base.html
PAD_FRAC = 0.07           # padding fraction around the shield (vector)


def need(cmd: str) -> None:
    if not shutil_which(cmd):
        sys.exit(f"ERROR: required tool '{cmd}' not found on PATH.")


def shutil_which(cmd: str):
    from shutil import which
    return which(cmd)


def trace_svg(shield: Image.Image, tmp: Path) -> str:
    """Trace the shield alpha mask to a clean SVG via potrace."""
    sw, sh = shield.size
    alpha = np.array(shield)[:, :, 3]
    body = (alpha > 96).astype(np.uint8)          # 1 = shield body
    pad = int(max(sw, sh) * PAD_FRAC)
    cw, ch = sw + 2 * pad, sh + 2 * pad
    canvas = np.zeros((ch, cw), dtype=np.uint8)   # 0 = white (bg)
    canvas[pad:pad + sh, pad:pad + sw] = body
    pbm = tmp / "mask.pbm"
    with open(pbm, "w") as f:
        f.write(f"P1\n{cw} {ch}\n")
        f.write("\n".join(" ".join(map(str, canvas[y])) for y in range(ch)))
        f.write("\n")
    raw = tmp / "traced.svg"
    subprocess.run(["potrace", str(pbm), "-s", "-o", str(raw)], check=True)
    paths = re.findall(r'<path d="([^"]*)"', raw.read_text())
    vb = f"0 0 {cw} {ch}"
    tr = f"translate(0,{ch}) scale(0.1,-0.1)"
    out = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}">'
           f'<g transform="{tr}" fill="{SHIELD_BLUE}">')
    for d in paths:
        out += f'<path d="{d}"/>'
    return out + "</g></svg>"


def place(shield: Image.Image, size: int, frac: float,
          bg=None) -> Image.Image:
    """Scale shield to `frac` of an `size`x`size` canvas, centred."""
    s = int(round(size * frac))
    sw, sh = shield.size
    scale = s / max(sw, sh)
    nw, nh = int(round(sw * scale)), int(round(sh * scale))
    sm = shield.resize((nw, nh), Image.LANCZOS)
    canvas = Image.new("RGBA", (size, size), bg if bg else (0, 0, 0, 0))
    canvas.alpha_composite(sm, ((size - nw) // 2, (size - nh) // 2))
    return canvas


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--src", default=DEFAULT_SRC, help="path to scudo.png master")
    args = ap.parse_args()

    for c in ("potrace", "rsvg-convert"):
        need(c)

    src = Path(args.src).expanduser()
    if not src.is_file():
        sys.exit(f"ERROR: source shield not found: {src}")
    shield = Image.open(src).convert("RGBA").crop(
        Image.open(src).convert("RGBA").split()[-1].getbbox())

    STATIC.mkdir(exist_ok=True)
    (STATIC / "img").mkdir(exist_ok=True)

    with tempfile.TemporaryDirectory() as td:
        td = Path(td)
        svg = trace_svg(shield, td)
        (STATIC / "favicon.svg").write_text(svg)
        # sanity: SVG must render
        subprocess.run(["rsvg-convert", "-w", "64",
                        str(STATIC / "favicon.svg"), "-o", str(td / "t.png")],
                       check=True)

    # ICO: 16/32/48, transparent, shield ~86% (matches vector padding)
    f16 = place(shield, 16, 0.86)
    f32 = place(shield, 32, 0.86)
    f48 = place(shield, 48, 0.86)
    f48.save(STATIC / "favicon.ico", format="ICO",
             sizes=[(16, 16), (32, 32), (48, 48)],
             append_images=[f32, f16])

    # apple-touch-icon: 180, shield on dark site background
    place(shield, 180, 0.68, bg=APPLE_BG).save(STATIC / "img" / "apple-touch-icon.png")

    print("OK — wrote:")
    for p in (STATIC / "favicon.svg", STATIC / "favicon.ico",
              STATIC / "img" / "apple-touch-icon.png"):
        print(f"  {p.relative_to(ROOT)}  ({p.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
