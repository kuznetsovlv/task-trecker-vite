# Task Tracker (Vite + React + TypeScript)

A small practice project built with **React**, **TypeScript**, and **Vite**.

The goal of the project is to explore the differences between modern frontend tooling (Vite vs Next.js) and to build a simple but realistic React application structure.

---

## Features

* Add tasks
* Toggle task completion
* Delete tasks
* Task statistics

Each task contains:

```
{
  id: string
  text: string
  completed: boolean
}
```

Task IDs are generated using `crypto.randomUUID()`.

---

## Tech Stack

* **React**
* **TypeScript**
* **Vite**
* **SCSS**
* **ESLint**

---

## Project Structure

```
src
├── components
│   ├── TaskInput
│   ├── TaskList
│   └── TaskItem
├── styles
│   └── global.scss
├── types
│   └── task.ts
├── App.tsx
└── main.tsx
```

---

## Path Aliases

The project uses a path alias for cleaner imports.

```
@ → src
```

Example:

```ts
import type { Task } from '@/types/task'
```

Aliases are configured in:

```
vite.config.ts
tsconfig.app.json
```

---

## Styling

SCSS is used for styling.

Example import:

```ts
import './styles.scss'
```

CSS Modules can also be used:

```
Component.module.scss
```

---

## Getting Started

Install dependencies:

```
npm install
```

Start development server:

```
npm run dev
```

Build for production:

```
npm run build
```

Preview production build:

```
npm run preview
```

---

## Why Vite?

Vite provides:

* extremely fast dev server startup
* native ES module support
* minimal configuration
* modern frontend tooling

Unlike older bundlers, Vite treats **HTML as the application entry point**, which allows it to build the dependency graph directly from the browser module system.

---

## Learning Goal

This repository is part of a learning exercise comparing:

```
Vite vs Next.js
```

The same application will later be implemented with Next.js to explore:

* App Router
* Client vs Server Components
* SSR / SSG
* Next.js project architecture

---

## License

MIT
