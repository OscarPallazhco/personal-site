# Oscar Pallazhco Portfolio

A personal portfolio built with Next.js App Router, React, TypeScript, and CSS. It presents Oscar's engineering background, selected product work, and contact links.

## Created with

- **IDE:** Visual Studio Code
- **Coding assistant:** GitHub Copilot
- **Model:** The exact underlying Copilot model identifier was not exposed by the development environment, so it is not recorded here.
- **Application stack:** Next.js App Router, React, TypeScript, ESLint, and `lucide-react` icons.

The site content was organized into small section components, with profile links, career history, and project summaries kept in a shared data module. The profile portrait is served locally from `public/`. No AI model is called by the portfolio website itself.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run format:css` | Format the global stylesheet with Prettier |

## Project layout

```text
app/                 App Router entry point, metadata, and global styles
components/          Header, hero, profile, career, work, contact, and footer sections
data/portfolio.ts    Profile links, career history, and project summaries
public/              Static assets, including the profile portrait
```

The route at `app/page.tsx` composes the page sections. Edit the content in `data/portfolio.ts`; styles are in `app/globals.css`.

## Contact links

Email, LinkedIn, and WhatsApp URLs are configured in `data/portfolio.ts`. The WhatsApp link opens a chat with the configured Ecuador country code and a prefilled greeting.