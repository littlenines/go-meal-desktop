# GoMeal

A food delivery dashboard UI, built as a practice project for learning **Vue 3** (`<script setup>`, TypeScript, component composition) together with a **7-1 SCSS architecture**.

This is a static front-end recreation of a Figma design — no backend, no real data, no routing. The goal was hands-on practice with Vue 3 fundamentals: props, slots, `v-for`, component composition/extraction, and scoped SCSS with shared variables/mixins.

![GoMeal design](./gomeal-design.png)

## Tech stack

- [Vue 3](https://vuejs.org/) with `<script setup lang="ts">`
- TypeScript
- [Vite](https://vite.dev/)
- SCSS (Sass), organized with the [7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern)

## Installation

```bash
git clone <this-repo-url>
cd GoMeal
pnpm install
```

(`npm install` or `yarn install` work too, if you don't have pnpm.)

## Running the app

```bash
pnpm dev
```

This starts the Vite dev server (with hot reload) — open the printed local URL in your browser.

## Building for production

```bash
pnpm build
```

Type-checks the project (`vue-tsc`) and builds an optimized production bundle into `dist/`.

## Previewing the production build

```bash
pnpm preview
```

Serves the built `dist/` folder locally, so you can sanity-check the production build before deploying.
