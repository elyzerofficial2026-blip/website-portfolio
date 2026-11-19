# Elyzer Furagganan: portfolio website

A static website with no build step. Plain HTML, CSS and JavaScript. Open `index.html` in a browser to preview it, edit the files in any text editor, and upload the folder to GitHub Pages, Netlify or Vercel.

> Keep this README outside your public site if you prefer. It is safe to publish, but it lists your prices and setup notes.

---

## A. Project overview

```
index.html            Homepage: hero, proof strip, search section, services, samples, process, pricing, about, FAQ, brief form
trial.html            Paid trial order page and form
404.html              "Page not found" page (self-contained styles)
robots.txt            Tells search engines they may crawl the site
sitemap.xml           List of pages for search engines
llms.txt              Plain-text summary of you and the site for AI tools
samples/              One small page ("shell") per case study
assets/css/styles.css All styles. Colours and fonts are set at the top.
assets/js/samples.js  ALL sample data. Controls homepage cards, filters and case-study pages.
assets/js/sample-page.js  Builds each case-study page from samples.js
assets/js/main.js     Mobile menu, sample cards and filters, footer year
assets/js/forms.js    Form checks and sending. Your Formspree ID goes here.
assets/js/analytics.js  Visit counting with GoatCounter. Your GoatCounter code goes here.
assets/files/         Elyzer-Furagganan-CV.pdf (linked in the About section and every footer)
assets/images/        og-image.png, the preview shown when your link is shared
assets/fonts/         Self-hosted Newsreader and Inter fonts (no Google requests)
```

How they work together: every page loads `styles.css`. The homepage reads `samples.js` to draw the sample cards and filters. Each file in `samples/` only says which sample it is (`<body data-slug="...">`); `sample-page.js` fills in the case study from `samples.js`. If JavaScript is off, each shell still shows the title, summary and the live-article link.

## B. Editing homepage copy

All homepage text is in `index.html`. Search for these comments:

- **Hero headline**: `HERO HEADLINE` (the `<h1>` below it). The paragraph under it is the supporting text.
- **About section**: search `id="about"`.
- **Services**: search `id="services"`. Each service is one `<article class="service">`.
- **Availability**: search `AVAILABILITY`. It appears twice (hero and the final call to action). Change both.
- **CTA text**: search `Start with a paid trial article` and `Send me your brief`. Keep the wording the same everywhere.
- **Pricing**: search `TRIAL PRICE` and `id="pricing"`. Prices also appear in `trial.html`, the FAQ, the JSON-LD block in the `<head>` of `index.html`, and `llms.txt`.
- **Revision policy**: search `REVISION POLICY`, and also update `trial.html` and the FAQ.

## C. Adding writing samples

1. Open `assets/js/samples.js`. Copy one whole `{ ... },` block and paste it at the end of the list.
2. Fill in every field:
   - `slug`: lower case, words joined with hyphens, e.g. `daily-vs-weekly-office-cleaning`. It becomes the page address.
   - `status`: `"published"` to show it, `"draft"` to hide it everywhere.
   - `industry`: a short label. New labels automatically create a new filter chip.
   - `contentTypes`: a list, e.g. `["SEO/GEO Article"]` or `["Content Consolidation", "SEO/GEO Article"]`.
   - `liveUrl`: the full `https://` address. Leave `""` to hide the button.
   - `pdf`: e.g. `"assets/pdfs/my-article.pdf"` after you upload the PDF there. Leave `""` to hide the download.
   - `result`: only a real, documented result (for example, a ranking or traffic number you can show). Leave `""` and the section is hidden.
   - The text fields (`brief`, `challenge`, `workPerformed`, `geoElements`, `constraints`) are what visitors read on the case-study page.
3. Make the HTML shell: copy any file in `samples/`, rename it to `your-slug.html`, then change:
   - `<body data-slug="...">` to your slug,
   - the `<title>`, `<meta name="description">`, `canonical` and `og:` tags,
   - the fallback title, summary and live link inside `<div id="case">`.
4. Add the page to `sitemap.xml` (copy a `<url>` line) and to the Pages list in `llms.txt`.
5. Optionally add a fallback card to the `<ul id="sample-grid">` list in `index.html` (only seen when JavaScript is off).
6. Upload the changed files. That's it.

To hide a sample, set `status: "draft"`. Its page still exists at its address, so also remove it from `sitemap.xml`.

## D. Connecting the contact forms

Until you connect Formspree, both forms still work: when someone presses Send, their email app opens with the details filled in. Connect Formspree before you start outreach, because a long trial brief may be too long for some email apps.

1. Create a free account at https://formspree.io and click **New form**. Use `elyzerofficial2026@gmail.com` as the destination.
2. Copy the form ID. In the endpoint `https://formspree.io/f/abcdwxyz`, the ID is `abcdwxyz`.
3. Open `assets/js/forms.js` and replace `[[FORMSPREE_FORM_ID]]` with your ID.
4. The fallback email is set on the line `contactEmail:` in the same file.
5. Test: publish the site, fill in the brief form with your own details and send it. You should see a green "Thanks for sending your brief" message, and Formspree will email you (the first submission asks you to confirm the form).
6. Test the error state: turn off your Wi-Fi and submit again. You should see a red message offering to send the details by email instead. Nothing is shown as "sent" unless Formspree confirms it.

Both forms use the same Formspree form; the email subject tells you which one was used (`New brief…` or `Paid trial request…`). A hidden "honeypot" field blocks simple spam bots.

## D2. Turning on visitor stats (GoatCounter)

This tells you whether prospects open your link and which case studies they read. It uses no cookies and collects no personal data, so you don't need a cookie banner.

1. Sign up free at https://www.goatcounter.com. Pick a code, for example `elyzer`. Your dashboard becomes `https://elyzer.goatcounter.com`.
2. Open `assets/js/analytics.js` and replace `[[GOATCOUNTER_CODE]]` with your code (just `elyzer`, not the full address).
3. Push the change. Visits from your own computer while previewing locally are not counted.

What you'll see in the dashboard: page visits, where visitors came from, and these click events:

- `cta-trial-header`, `cta-trial-hero`, `cta-trial-pricing`, `cta-trial-final`, `cta-trial-case-study`: clicks on a paid-trial button
- `cta-brief-hero`, `cta-email-final`: clicks to send a brief or email you
- `cv-download-about`, `cv-download-footer`: CV downloads
- `live-article-<slug>`: clicks through to a live article
- `form-sent-brief`, `form-sent-trial`: forms that were actually sent (needs Formspree connected)

**Tip for outreach:** add a tag to the link you send, such as `https://yoursite/?ref=linkedin` or `?utm_campaign=agency-emails-dec`. GoatCounter shows these as the source, so you can see which outreach channel gets clicks.

**Calendly:** no Calendly link was supplied, so there is no booking button. To add one later, place a button like `<a class="btn btn--secondary" href="[[CALENDLY_URL_OR_REMOVE]]">Book a 15-minute call</a>` next to the other buttons in the final call-to-action section.

## E. Publishing on GitHub Pages

1. Sign in to GitHub and click **New repository**. Name it, for example, `portfolio`. Make it Public.
2. Click **uploading an existing file** and drag in everything inside this folder (so `index.html` is at the top level, not inside another folder). Commit.
3. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
4. Wait a minute. Your site appears at `https://yourusername.github.io/portfolio/`.
5. Root domain vs project site: all links in this site are relative, so it works both at `https://yourusername.github.io/portfolio/` (a project site) and at a root domain such as `https://elyzer.com`. The 404 page detects GitHub project sites automatically.
6. Open the address, click through every page, open a case study, try the filters and send a test form.

## F. Publishing on Netlify

1. Sign in at https://app.netlify.com.
2. Go to **Add new site → Deploy manually** and drag this whole folder onto the drop area.
3. Netlify gives you an address like `https://something.netlify.app`. Rename it under **Site configuration → Change site name**.
4. No build command and no publish directory settings are needed. Netlify uses `404.html` automatically.

## G. Publishing on Vercel

1. Sign in at https://vercel.com. The easiest route is to put the folder on GitHub first (steps E1–E2).
2. Click **Add New → Project**, import the repository.
3. Framework Preset: **Other**. Leave Build Command and Output Directory empty. Click **Deploy**.
4. Vercel serves `404.html` for missing pages automatically.

**After publishing anywhere:** replace every `[[SITE_URL]]` with your real address, with no slash at the end (for example `https://elyzer.netlify.app`). Use your editor's find-and-replace across all files. It appears in `<head>` tags, the JSON-LD, `sitemap.xml`, `robots.txt` and `llms.txt`.

## H. Updating the website over time

| Task | Where |
|---|---|
| Add a sample | Section C |
| Update availability | `index.html`, search `AVAILABILITY` (two places) |
| Update prices | `index.html` pricing section, FAQ and JSON-LD; `trial.html`; `llms.txt` |
| Change trial turnaround | `index.html` (pricing, FAQ), `trial.html` (terms, steps, deadline hint) |
| Change contact email | Find-and-replace `elyzerofficial2026@gmail.com` in all files, including `forms.js` |
| Change LinkedIn | Find-and-replace the LinkedIn URL in all files |
| Add Calendly | Section D |
| Replace the CV | Overwrite `assets/files/Elyzer-Furagganan-CV.pdf`, same file name |
| Change the share image | Overwrite `assets/images/og-image.png` (1200×630) |
| Update sitemap | Add or remove `<url>` lines in `sitemap.xml`; update `<lastmod>` dates |
| Update llms.txt | Edit the plain text; keep it factual |

## I. Design system

Colours (CSS variables at the top of `styles.css`):

| Variable | Value | Use |
|---|---|---|
| `--paper` | `#faf8f3` | Page background |
| `--surface` | `#f2efe7` | Alternate section background |
| `--card` | `#ffffff` | Cards, form fields |
| `--ink` | `#1c1f1e` | Main text |
| `--ink-muted` | `#545b58` | Secondary text |
| `--rule` | `#e2ddd2` | Borders |
| `--accent` | `#0f5e59` | Deep teal: buttons, links, highlights (same as the CV) |
| `--accent-dark` | `#0a4642` | Hover states |
| `--accent-tint` | `#e6efec` | Tags, light highlights |

Fonts: **Newsreader** (serif, headings) and **Inter** (sans-serif, body), self-hosted in `assets/fonts/` under the SIL Open Font Licence.

Type scale: body 17px; small 14px; `--step-1` 20px; `--step-2` 24px; section titles 28–38px; hero 36–58px (fluid).

Spacing: `--space-1` 8px, `--space-2` 16px, `--space-3` 24px, `--space-4` 32px, `--space-5` 48px, `--space-6` 64–104px between sections. Container max width 72rem (1152px). Reading width 40rem.

## J. Headline alternatives

1. **Selected:** "I make complex topics easy to read and easier to find."
2. "Tax rules, health research, company law: written so readers and AI search both get it."
3. "A teacher's clarity and an SEO writer's structure, built for how people search now."

---

## Pricing decisions (set 17 November 2026)

- Paid trial: **USD 120**, one article up to about 1,200 words, 4 business days after payment, 2 revision rounds, credited to the first package.
- Starter **USD 360/month** (2 articles), Growth **USD 680/month** (4 articles), Agency white-label **USD 1,200/month** (8 articles). Articles up to 1,500 words.
- Extras: +USD 10 per extra 100 words; consolidation from USD 200 per merged article.
- Capacity: up to 4 articles a week across all clients. Availability shown as "Open to 2 new clients for December 2026".

---

## Placeholder register: what to fill in before publishing

**1. Personal and contact details**
- [x] Name, email and LinkedIn are filled in.
- [ ] Check the availability line (month and number of slots) before each outreach round.

**2. Pricing and commercial details**
- [x] Trial price, turnaround, packages and revision policy are filled in. Review them if you change your rates.

**3. Website and social links**
- [ ] `[[SITE_URL]]`: your live address, in `index.html`, `trial.html`, all `samples/*.html`, `sitemap.xml`, `robots.txt`, `llms.txt`.

**4. Writing sample information**
- [x] Four samples are complete with live links.
- [ ] Optional: add documented results to `result` in `samples.js` if a client shares ranking or traffic data you may publish.

**5. Images and PDFs**
- [x] Share image (`assets/images/og-image.png`, 1200×630) is on every page.
- [x] CV PDF (`assets/files/Elyzer-Furagganan-CV.pdf`) is linked in the About section and every footer. When you update the CV, export the new PDF with the same file name and replace this file.
- [ ] PDF copies of each sample (recommended in case a client changes or removes an article): upload to `assets/pdfs/` and set `pdf` in `samples.js`.
- [ ] A portrait photo, if you want one. The site uses an "EF" monogram for now.

**6. Form and scheduling integrations**
- [ ] `[[FORMSPREE_FORM_ID]]` in `assets/js/forms.js` (section D).
- [ ] `[[GOATCOUNTER_CODE]]` in `assets/js/analytics.js` (section D2).
- [ ] `[[CALENDLY_URL_OR_REMOVE]]`: optional, not used yet.

**7. Legal or privacy items to review**
- [ ] Check your employment contract for confidentiality, moonlighting and non-solicitation terms before naming your employer and linking client work.
- [ ] The samples are ghostwritten agency work published under client bylines. The case studies say so. One live article shows a manager's name as author; consider telling them you list it.
- [ ] The privacy line on the forms is a simple statement. If you collect enquiries from the EU or other regulated markets, consider a short privacy page.
