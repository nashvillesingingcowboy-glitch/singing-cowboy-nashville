# Singing Cowboy Nashville — Website

Mobile-first website for **Singing Cowboy Nashville** — surprise singing performances
for bachelorette parties, birthdays, girls' trips and divorce parties in Nashville.

Brand: **SINGING COWBOY NASHVILLE** — the performer is referred to only as **THE COWBOY**.
No personal names, no personal phone numbers anywhere on the site.

## Pages

| File | Purpose | SEO target |
|---|---|---|
| `index.html` | Homepage — hero, packages, bachelorette, divorce, how it works, who is the Cowboy, FAQ | Nashville singing telegram |
| `nashville-singing-telegram.html` | Singing telegram explained | singing telegram Nashville |
| `nashville-bachelorette-party.html` | Bachelorette surprise landing page | Nashville bachelorette ideas |
| `nashville-birthday-surprise.html` | Birthday surprise landing page | Nashville birthday surprise |
| `nashville-divorce-party.html` | Divorce party landing page | Nashville divorce party ideas |
| `partners.html` | Wholesale + referral partners | partner/planner outreach |
| `book.html` | 4-step booking form + private dirt follow-up form | conversion |

## Replacing placeholder photos

Drop your real photos into `images/` using the **same filenames** — no layout changes needed:

- `images/cowboy-broadway.jpg` — Cowboy on Broadway (hero, portrait ~800×1000)
- `images/cowboy-acoustic-guitar.jpg` — Cowboy with guitar (portrait ~800×1000)
- `images/singing-cowboy-bachelorette.jpg` — bachelorette surprise (landscape ~800×600)
- `images/singing-cowboy-birthday.jpg` — birthday surprise (landscape ~800×600)
- `images/cowboy-live-nashville.jpg` — live performance (landscape ~800×600)
- `images/souvenir-button.jpg` — souvenir button (square ~600×600)
- `images/og-default.jpg` — social share card (1200×630)

Current placeholders are branded cream/red placeholder images — clearly not real photos.

## Booking form / email

The forms compose a pre-filled email to **book@singingcowboynashville.com**
(defined in `js/main.js`). To route inquiries somewhere else, change the address
in `js/main.js` (two places: booking form + dirt follow-up form).

The "GIVE THE COWBOY THE DIRT 🔥" section auto-reveals when a personalized package
($250 / $300) is selected. A private follow-up form at `book.html#dirt-later`
lets organizers send the dirt later, after booking.

## Custom domain

The site currently uses the GitHub Pages URL
`https://nashvillesingingcowboy-glitch.github.io/singing-cowboy-nashville/`.
Canonical/OG URLs and `sitemap.xml` reference that URL.

To use a custom domain (e.g. `singingcowboynashville.com`):
1. Update `sitemap.xml` and the `link rel="canonical"` / `og:url` / `og:image` tags
   in every HTML file (search for `nashvillesingingcowboy-glitch.github.io`).
2. Add a `CNAME` file containing the domain and set it in the repo's Pages settings.

## Deploy

This is a plain static site — no build step.

```bash
git add -A
git commit -m "..."
git push origin main
```

Then in GitHub repo settings → Pages → deploy from `main` branch root.

## Design notes

- Honky-tonk + vintage Hatch Show Print: Anton (display), Lora (body), Special Elite (labels)
- Palette: ink black, warm cream, distressed red, muted gold
- Mobile-first with sticky bottom booking CTA on phones
- No fake testimonials/reviews/counters; social-proof sections are placeholders
- FAQ uses native `<details>`; structured data uses legitimate Schema.org types
  (EntertainmentBusiness, Service, Offer)
