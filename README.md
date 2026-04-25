# CytoRegenx — New WordPress Site

This package generates a complete, theme-agnostic WordPress site for **CytoRegenx Inc.** built from your existing WP export and the three product brochures (LAPL Epidural, BMSC Orthopedic, DERMATOGEN®).

## What's in the box

| File | Purpose |
|---|---|
| `cytoregenx-new-site.xml` | **The main deliverable.** WordPress WXR import file — 10 pages + 2 navigation menus, all built with native Gutenberg blocks so it works in *any* modern theme. |
| `preview.html` | Standalone HTML preview of the visual direction (home page). Open in a browser to see the design before importing. |
| `README.md` | This file. |

## The 10 pages

| # | Page | Slug |
|---|---|---|
| 1 | Home *(set as front page)* | `home` |
| 2 | About CytoRegenx | `about-cytoregenx` |
| 3 | Our Services *(parent)* | `our-services` |
| 4 | LAPL Epidural for Lower Back Pain | `lapl-epidural-lower-back-pain` |
| 5 | BMSC + LAPL for Orthopedic Use | `bmsc-lapl-orthopedic` |
| 6 | DERMATOGEN® for Wound Healing | `dermatogen-wound-healing` |
| 7 | Research & Innovation | `research-innovation` |
| 8 | For Clinicians | `for-clinicians` |
| 9 | News & Updates | `news-updates` |
| 10 | Contact Us | `contact-us` |

Plus two menus: **Main Menu** (header, 10 items) and **Footer Menu** (footer, 5 items).

## Design system

- **Colors:** Navy `#0E2C40`, Teal `#0A4D64` / `#0F6F8F`, Cyan accent `#7FD5EA`, light bg `#F7FAFC` / `#EAF6FA`. DERMATOGEN® page uses purple `#390F6F` as accent.
- **Blocks used:** `wp:cover`, `wp:columns`, `wp:group`, `wp:heading`, `wp:paragraph`, `wp:buttons`, `wp:list`, `wp:table`, `wp:spacer` — nothing page-builder-specific. No Beaver Builder, Elementor, or Divi lock-in.
- **Regulatory language:** Every product page includes the FDA-registered-vs-FDA-approved disclaimer in a visually distinct amber callout, preserving the exact language from your brochures.
- **Contact form:** Uses `[gravityform id="1"]` shortcode — assumes your existing Gravity Form ID 1 is still in place. If not, replace with your preferred form plugin shortcode after import.

## Import steps

### 1. Install the WordPress Importer plugin
In WP admin: **Tools → Import → WordPress → Install Now → Run Importer**.

### 2. Upload the XML
Upload `cytoregenx-new-site.xml`. When prompted for author mapping:
- The XML was authored as `116154pwpadmin` (matching your existing export).
- Assign content to your existing admin user (recommended) or let the importer create the new user.
- **Do NOT check "Download and import file attachments"** — the XML doesn't reference external media; you'll add images from the media library in step 5.

### 3. Set the front page
**Settings → Reading → Your homepage displays → A static page → Homepage: *Home***.

### 4. Assign the menus
**Appearance → Menus**:
- Select "Main Menu" → Menu Settings → check **Primary** (or your theme's header location) → Save.
- Select "Footer Menu" → check **Footer** (if your theme has one) → Save.

### 5. Add images
The XML uses color-block `wp:cover` hero sections rather than images, so the site is visually complete on import. To add the brochure images (LAPL diagrams, facility photos, BDNF chart, logo):
- **Media → Add New** → upload the figures.
- Edit each product page and replace the cover block's background color with the image, or add image blocks inline where the content references them.

### 6. Verify
Visit the front-end. You should see:
- Hero on Home with three product cards below
- Three product detail pages with comparison tables + disclaimers
- Contact page with address, phone, email, and Gravity Form slot
- Sticky header menu, footer menu

## Regenerating the XML

If you need to edit content and rebuild:

```bash
cd /path/to/cytoregenx
python3 build_all.py
```

The build scripts are modular:
- `build_wxr.py` — home + about
- `build_wxr_pt2.py` — services + LAPL Epidural
- `build_wxr_pt3.py` — BMSC + DERMATOGEN + Research (content definitions)
- `build_wxr_pt4.py` — Clinicians + Contact + News (content definitions)
- `build_all.py` — orchestrator that runs all four parts, appends pages 1005–1010, builds menus, assembles the WXR XML

## Compliance notes

- The site preserves the exact FDA-registered vs FDA-approved language from your brochures — **not FDA-approved**, physician-prescribed autologous therapy at an FDA-registered, cGMP-compliant facility.
- Research citations (Centeno et al. 2017) are kept intact on the LAPL page.
- No medical claims have been added beyond what's in the source brochures.

## Support

To change copy, colors, or add more pages, edit the content blocks in `build_wxr*.py` and re-run `build_all.py`. The generated XML can be re-imported; WordPress will update existing pages (matched by slug) rather than duplicating.
