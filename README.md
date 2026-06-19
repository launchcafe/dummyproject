# Dummy Project (fake customer repo)

This is a **fake customer codebase** used for demoing [Launch Café](https://launchcafe.dev) —
an external tool that connects to a SaaS company's frontend repo, reads its
Storybook components, and analyzes/redesigns UX flows.

It is not a real product. It exists so the demo has a real, working
React + Tailwind + Storybook setup to point Launch Café at, instead of
placeholder files.

## Components (`src/components/`)

- **Button** — `children`, `variant` (`primary` | `secondary`), `disabled`
- **Input** — `label`, `error` (renders an error state with message)
- **Card** — `children`, `className`
- **Badge** — `children`, `tone` (`neutral` | `success` | `warning` | `danger`)
- **Nav** — `items` (array of `{ label, href }`), `activeHref`

Each component has a matching `*.stories.jsx` file with a story per
documented variant.

## Pages (`src/pages/`)

- **Onboarding** — a "step 3: complete profile" form with six required
  fields (`full_name`, `role`, `team_size`, `company_logo`, `bio`,
  `timezone`) on a single screen. This simulates a real onboarding UX
  bottleneck (too many required fields, no progress save, no grouping)
  that an external agent can analyze and propose improvements for.

## Running Storybook locally

```bash
npm install
npm run storybook
```

Storybook will start on http://localhost:6006.

To build a static Storybook export:

```bash
npm run build-storybook
```
