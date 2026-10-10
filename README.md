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

| Command              | Purpose                                     |
| -------------------- | ------------------------------------------- |
| `npm run dev`        | Start the local development server          |
| `npm run build`      | Create a static production export in `out/` |
| `npm run lint`       | Run ESLint                                  |
| `npm run format:css` | Format the global stylesheet with Prettier  |

## Project layout

```text
app/                 App Router entry point, metadata, and global styles
components/          Header, hero, profile, career, work, contact, and footer sections
data/portfolio.ts    Profile links, career history, and project summaries
public/              Static assets, including the profile portrait
```

The route at `app/page.tsx` composes the page sections. Edit the content in `data/portfolio.ts`; styles are in `app/globals.css`.

The header language selector switches the portfolio between English and Spanish during the current visit. The footer's update time is generated during the static build and displayed in Ecuador time.

## GitHub Pages deployment

The static site is published at [oscarpallazhco.github.io](https://oscarpallazhco.github.io/) from the root of the `master` branch in [OscarPallazhco.github.io](https://github.com/OscarPallazhco/OscarPallazhco.github.io). This project uses Next.js static export, so `npm run build` creates the deployable files in `out/` rather than a server-run `.next/` application.

The `Build and deploy portfolio` GitHub Actions workflow runs on every push to `main` and can also be started manually. It runs lint and build, then publishes the contents of `out/` to the Pages repository's `master` branch. The deployment commit message includes the source repository, source branch, and short commit SHA. The previous Pages content is preserved on its `backup/before-portfolio-deploy` branch.

To enable cross-repository publishing, add a fine-grained personal access token as the `PAGES_DEPLOY_TOKEN` Actions secret in this repository. Limit the token to the `OscarPallazhco.github.io` repository and grant **Contents: Read and write**. Until that secret is configured, Actions will still validate and build the site, then skip the publish steps. Never commit or share the token value.

## Contact links

Email, LinkedIn, and WhatsApp URLs are configured in `data/portfolio.ts`. The WhatsApp link opens a chat with the configured Ecuador country code and a prefilled greeting.
