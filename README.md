# Gaurav Kumar - NLP Research Portfolio

Professional single-page portfolio built with Next.js for an NLP PhD researcher profile.

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript
- Framer Motion + Lucide React

## Sections

- Hero (`#home`)
- Research Focus (`#research`)
- Publications (`#publications`)
- Work Experience (`#experience`)
- Projects (`#projects`)
- Gallery (`#gallery`)
- Talks, Workshops, and Service (`#talks`)
- Awards and Certifications (`#awards`)
- Skills (`#skills`)
- Education (`#education`)
- Contact (`#contact`)

## Content Editing Workflow

All profile content is centralized and typed.

- Type definitions: `src/types/profile.ts`
- Content source: `src/data/profile.ts`

To update publications, experience, gallery, contact, or any section, edit only `src/data/profile.ts`.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run build
```

## Deployment Notes (Vercel-ready)

1. Set `NEXT_PUBLIC_SITE_URL` in deployment environment.
2. Metadata, Open Graph, `robots.ts`, and `sitemap.ts` are already wired.
3. Keep `public/` assets optimized for card previews and gallery rendering.

## Privacy Defaults

The contact section intentionally exposes professional channels only:

- Academic/professional emails
- LinkedIn
- GitHub

No phone number or detailed residential address is shown.
