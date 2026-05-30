# Vidyut Enterprise Website

Production-ready Next.js website for Vidyut Enterprise, focused on industrial electrical products, earthing systems, lightning protection and enquiry generation.

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- SEO metadata, sitemap and robots routes
- Local assets in `public/images`
- PDF catalogues in `public/downloads`

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000/home`.

## Production Build

```bash
npm install
npm run build
npm run start
```

## Cloudflare Pages Deployment

1. Push this folder to a GitHub repository.
2. In Cloudflare Pages, choose **Create a project**.
3. Connect the GitHub repository.
4. Use these build settings:
   - Framework preset: `Next.js`
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Node.js version: `20` or newer
5. Add any production environment variables later if a real backend form handler is connected.
6. Deploy.

For Cloudflare Pages with the latest Next.js adapter, install and configure OpenNext if your Cloudflare account requires it:

```bash
npm install -D @opennextjs/cloudflare
npx opennextjs-cloudflare build
```

Then set the Cloudflare build command according to the adapter output recommended by Cloudflare at deployment time.

## Important Production Notes

- Replace placeholder phone/email in `lib/site.ts` with final business contact details if needed.
- Replace `https://www.vidyutenterprise.in` in `lib/site.ts` with the live domain before launch.
- Add a real Google Maps embed URL on the contact/home map placeholder when available.
- Connect forms to Formspree, a CRM, email API or backend endpoint for production form submissions.
