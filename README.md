# FilrAI marketing site

Static HTML and CSS for GitHub Pages. No JavaScript is required.

## Local preview

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173/. No install or build step is required.

## Product screenshots

The five original user-supplied app screenshots are kept in `assets/`. CSS removes the outer screenshot padding for the page presentation. The Filing Tracker section uses a portrait CSS crop of the supplied sidebar capture, showing the watchlist selector, recent filings, and expanded summary. The original captures and their data are retained in assets; screenshot figures do not link to the full images.

The Model Builder screenshot shows the Release layout preview, not a populated in-app workbook. The accompanying copy explains the Excel export workflow.

## Review before publishing

Check the page at desktop and mobile widths and follow navigation links. Privacy and terms wording is preserved; older disclosure URLs still redirect to terms.html. Publish through the existing GitHub Pages workflow after review.

## Documentation draft

`docs/index.html` is the documentation directory. Each chapter is a standalone HTML page with shared `docs/docs.css` styling and the site's `page.css`. No build step or JavaScript is required. Navigation, section permalinks, and previous/next chapter links work directly on GitHub Pages.

The current pages are an outline for review, not a completed manual. Screenshot slots describe the required captures; shortcut bindings and financial methodology must be checked against the release app before filling them in. Viewer shortcuts have a dedicated section linked from the documentation home and Reference chapter. Draft pages have `noindex` metadata; remove it when the relevant page is complete and approved for publication.

When adding a chapter, keep the chapter navigation in every documentation page consistent. Existing screenshots can be linked from `../assets/`; keep source captures unchanged and use CSS for presentation crops. Check desktop/mobile layout and enlarged text before publishing.
