# Ca Topper — CA Intermediate Prep (Prototype)

This is a small Vite + React prototype for **Ca Topper**, a bilingual (English + Bengali) web app to help Bengali students prepare for CA Intermediate with study planner, English lab (spelling, pronunciation, writing), and mock test scaffolding.

## What's included
- Minimal Vite project (React)
- `src/App.jsx` — main app with language toggle and core features
- `styles.css` — basic styles
- LocalStorage-based profile & progress (no backend)

## Run locally
1. Install Node.js (v18+) and npm
2. In project folder:
   ```bash
   npm install
   npm run dev
   ```
3. Open the displayed localhost URL.

## Deploy (FREE) — Vercel / Netlify
### Vercel (recommended)
1. Create a free account at Vercel.
2. Import the Git repository (or drag & drop the project folder).
3. Build command: `npm run build`
4. Output directory: `dist`
Vercel will give a public URL after deployment.

### Netlify
1. Create a free account at Netlify.
2. Drag & drop the build folder or connect to Git.
3. Build command: `npm run build`, Publish directory: `dist`.

## Bilingual notes
- Strings are in `src/App.jsx` (object `STRINGS`).
- Add Bengali translations by expanding `STRINGS.bn`.

## Next steps I can do for you (pick any)
- Add chapter-wise quizzes & larger question bank.
- Add user accounts & cloud save (Firebase).
- Create downloadable PDFs for notes.
- Deploy the site for you and provide the live link.
- Convert to Android app (React Native) later.

If you want me to deploy it now, say **"Deploy for me"** and I will prepare a deployment bundle and (optionally) host it on a free platform — I will provide the live URL after deployment.
