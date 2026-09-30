# DrawWork-Docs

Source of the [Draw](https://draw.hatomagi.com) documentation site, built with [VitePress](https://vitepress.dev).

## Requirements

- Node.js 18+

## Development

```sh
npm install
npm run docs:dev      # dev server with hot reload
npm run docs:build    # static build to .vitepress/dist
npm run docs:preview  # serve the production build
```

## Layout

```
.
├── index.md              # home page
├── for-user/             # user command reference
├── for-developer/        # API reference
├── advertisement/
├── policy/
├── public/images/        # static assets, served at /images
├── .vitepress/config.mts # site config, nav and sidebar
└── .pages.yml            # Pages CMS config
```

Pages are Markdown; the file path is the URL. New pages must be added to the sidebar in `.vitepress/config.mts`.

## Deployment

Hosted on Cloudflare Pages. Every push to `main` triggers a build.

| Setting          | Value                |
| ---------------- | -------------------- |
| Build command    | `npm run docs:build` |
| Output directory | `.vitepress/dist`    |
| `NODE_VERSION`   | `20`                 |

## Editing

Content can be edited from [Pages CMS](https://app.pagescms.org) using `.pages.yml`. Each save is a commit to the repository.

## Commits

[Conventional Commits](https://www.conventionalcommits.org), English, subject line only.
