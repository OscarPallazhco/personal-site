<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Repository guidance

- This repository uses the Next.js App Router. Confirm the installed version in `package.json` before making changes; the current project uses Next.js 16. Read the relevant guide under `node_modules/next/dist/docs/` because this installation can differ from familiar Next.js conventions.
- Keep `app/page.tsx` as a compact composition of the section components in `components/`. Put reusable profile, career, project, and contact values in `data/portfolio.ts` instead of duplicating them across sections.
- Preserve the existing visual language and responsive behavior in `app/globals.css`. Use the supplied local portrait in `public/` rather than adding a remote or stock image.
- Keep profile and career claims grounded in the supplied LinkedIn profile. Do not invent project URLs, metrics, credentials, or model names.
- After source changes, run `npm run lint` and `npm run build`. When changing layout or imagery, verify the page in a browser at desktop and mobile widths.
- Update `README.md` when setup, scripts, project organization, or tooling changes.
