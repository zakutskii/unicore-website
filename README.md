# Unicore Website

Static marketing website exported from Framer and optimized for SEO and GitHub Pages deployment.

## Included optimization

- Expanded social/meta tags for Open Graph and Twitter
- Canonical and `og:url` configured for GitHub Pages
- Structured data (`SoftwareApplication` schema)
- `robots.txt` and `sitemap.xml`
- GitHub Actions workflow for automatic Pages deploy on push to `main`

## Deploy

1. Push to `main`.
2. In GitHub repository settings, enable **Pages** and choose **GitHub Actions** as source.
3. Site URL: `https://zakutskii.github.io/unicore-website/`.

## Notes

- If you use a custom domain later, update URL in:
  - `index.html` (`canonical`, `og:url`, `hreflang`, JSON-LD `url`)
  - `robots.txt`
  - `sitemap.xml`
