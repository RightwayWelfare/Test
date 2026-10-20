# Right Way Women and Children Welfare Organization — Website

A responsive, multi-page NGO website starter designed for GitHub Pages.

## Pages
- `index.html` — Home, mission, impact highlights, featured projects, latest updates
- `projects.html` — Project showcase
- `gallery.html` — Filterable photo gallery with lightbox
- `blog.html` — Blog, news, announcements, shoutouts
- `archive.html` — Public document archive
- `contact.html` — Contact details, WhatsApp link, enquiry form layout

## Deploy with GitHub Pages
1. Create a GitHub repository, e.g. `right-way-welfare`.
2. Upload all files and folders in this project to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then click **Save**.
6. After deployment, GitHub will show the public website URL in the Pages section.

## Update these placeholders before publishing
Search the project for:
- `your-email@example.com` — replace with your official email
- `91XXXXXXXXXX` — replace with your WhatsApp number in international digits only (India example: 91 + 10-digit number, no plus sign or spaces)
- `+91 XXXXX XXXXX` — replace with the public contact number
- `Add your official office address here` — replace with approved address, or remove
- `DATE TO ADD`, sample article titles and sample project descriptions — replace with real information
- Sample impact figures and sample content — do not present unverified claims as fact

## Images
The starter uses remotely hosted Unsplash image URLs as temporary visuals. Replace them with organization-owned or properly licensed images before launch where possible. Get appropriate consent before publishing identifiable photographs, especially of children. For local images, place them in `assets/images/` and update the relevant `src` and lightbox paths.

## Blog/news updates
This is a static site. To publish a blog, edit `blog.html` and add a new article card, or use a static-site CMS later if you want non-technical editors to publish updates.

## Contact form limitation
GitHub Pages does not provide server-side form processing. The current form prepares an email in the visitor's email app using `mailto:`. For direct submissions, connect a reputable form service or build a backend. Replace the placeholder email address first.

## Documents
Upload only authentic, approved, public-facing documents to `documents/`. Then edit `archive.html` to link directly to the files. Do not publish private beneficiary data or confidential records.

## Custom domain
After purchasing a domain, configure it in **Repository Settings → Pages → Custom domain** and follow GitHub's DNS instructions. Keep your domain's DNS records and HTTPS settings correct.
