# App Structure and Process

Use this file as the checklist for adding or updating public external links for any app in this project.

## Purpose

This repo is a shared Next.js project for public app pages that are needed outside the app itself, such as privacy policies, support pages, terms pages, and app store links.

All app-specific page content should live in `src/content/apps.ts` unless a new page type needs a dedicated renderer or special layout.

## Current Structure

- `src/content/apps.ts` defines every app and every supported external page.
- `src/app/page.tsx` renders the shared index of available apps and links.
- `src/app/[appSlug]/[pageType]/page.tsx` creates app/page routes from `apps`.
- `src/components/PolicyPage.tsx` renders privacy-policy-style content.
- `src/app/globals.css` contains shared styling.

## Supported Page Types

The `ExternalPage` type currently allows:

- `privacy`
- `terms`
- `support`

Only `privacy` pages are currently rendered by the dynamic route. Before publishing `terms` or `support` pages, add or connect a renderer for that page type in `src/app/[appSlug]/[pageType]/page.tsx`.

## Add a New App

1. Open `src/content/apps.ts`.
2. Add a new object to the `apps` array.
3. Use a short lowercase URL-safe `slug`, for example `my-game`.
4. Set the app `name` and `description`.
5. Add each external page under that app's `pages` array.
6. Keep `updated` as a human-readable date, for example `May 28, 2026`.
7. Keep legal/policy text specific to the app's real data use, third-party services, ads, analytics, accounts, purchases, and support flow.
8. Run lint/build before publishing.

Example app shape:

```ts
{
  slug: "my-game",
  name: "My Game",
  description: "A short public description of the app.",
  pages: [
    {
      type: "privacy",
      title: "Privacy Policy",
      eyebrow: "Privacy Policy",
      updated: "May 28, 2026",
      description: "Privacy Policy for My Game.",
      sections: [
        {
          title: "Overview",
          paragraphs: [
            "Explain what the app is and what this policy covers.",
          ],
        },
      ],
    },
  ],
}
```

## Add a New Page to an Existing App

1. Add a new entry to the app's `pages` array in `src/content/apps.ts`.
2. Confirm the `type` is listed in `ExternalPage`.
3. If the route should render publicly, update `src/app/[appSlug]/[pageType]/page.tsx` so it allows that page type.
4. Add or reuse a renderer component if the page is not policy-style content.
5. Confirm the home page link appears automatically from `app.pages`.

## Links and Routes

Routes follow this pattern:

```text
/{appSlug}/{pageType}
```

Examples:

```text
/stackit/privacy
/my-game/privacy
```

After deployment, use the production URL in app store fields:

```text
https://your-domain.com/{appSlug}/{pageType}
```

## Verification Checklist

Before using a link in an app store listing:

1. Run `npm run lint`.
2. Run `npm run build`.
3. Open the route locally and confirm the page renders.
4. Confirm the app appears on the shared index page.
5. Confirm all third-party links open correctly.
6. Confirm dates, app name, and policy details match the app being published.

## Notes for Future Work

- Add separate renderers for support and terms pages when those page types are needed.
- Keep route generation data-driven through `src/content/apps.ts`.
- Avoid duplicating app policy content across multiple files unless a page needs custom behavior.
- When working on Next.js code in this project, read the relevant local guide under `node_modules/next/dist/docs/` first because this Next.js version may differ from common conventions.
