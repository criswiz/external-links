# Shared External Links

A central Next.js app for public external pages used by mobile apps, such as privacy policies, support pages, terms pages, and app store links.

## Current routes

- /stackit/privacy - StackIt privacy policy

## Development

```sh
npm install
npm run dev
```

Open http://localhost:3000/stackit/privacy to view the StackIt privacy policy.

## Add another app or page

1. Open `src/content/apps.ts`.
2. Add a new app entry with a unique `slug`.
3. Add pages under that app's `pages` array.
4. Use direct app-store URLs in the format `https://your-domain.com/{appSlug}/{pageType}`.

Supported page types are currently `privacy`, `terms`, and `support`. The policy renderer is implemented for `privacy`; add a matching renderer before publishing other page types.

## Deployment

Deploy this project to Vercel as a standalone project with the project root set to:

```text
external-links
```

After deployment, use the production URL for app store privacy policy fields, for example:

```text
https://your-domain.com/stackit/privacy
```
