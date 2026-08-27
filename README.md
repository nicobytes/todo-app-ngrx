# MyDayApp — Angular Todo App with NgRx Signal Store

A [TodoMVC](https://todomvc.com/)-style task manager built with **Angular 22**
and **NgRx Signal Store**. It demonstrates modern Angular patterns: standalone
components, signals, reactive persistence, and route-based filtering.

![preview](https://i.imgur.com/et5mmr7.png)

## Overview

MyDayApp lets you create, complete, edit, and filter todos with data persisted
to `localStorage`. The UI follows the classic TodoMVC layout and styling.

## Tech Stack

| Layer       | Choice                                         |
| ----------- | ---------------------------------------------- |
| Framework   | Angular 22 (standalone components)             |
| State       | NgRx Signal Store (`@ngrx/signals`)            |
| Forms       | Reactive Forms                                 |
| Routing     | Angular Router (`/`, `/pending`, `/completed`) |
| Persistence | `localStorage` (key: `mydayapp-angular`)       |
| Unit tests  | Karma + Jasmine                                |
| E2E tests   | Playwright                                     |

## Features

- Add, toggle, edit, and delete todos
- Inline editing (Enter to save, Escape to cancel)
- Pending task counter with correct pluralization
- Clear completed todos
- Filter by route: `/all`, `/pending`, `/completed`
- Persist todos across page reloads
- Hide main/footer sections when the list is empty

## Architecture

```
src/app/
├── components/
│   ├── header/       # New todo input
│   ├── todos/        # List + route filter sync
│   ├── todo/         # Single todo item + inline edit
│   ├── footer/       # Filters + counter + clear button
│   ├── counter/
│   └── clear-btn/
├── pages/home/       # App shell layout
├── services/
│   ├── todos.store.ts    # Signal Store (source of truth)
│   └── storage.service.ts
└── models/
```

**State management:** `TodosStore` holds todos and the active filter. Mutations
go through store methods (`add`, `toggle`, `update`, etc.). Persistence reacts
to `store.todos` changes via `effect` (Phase 1) — migratable to `signalMethod`
(Phase 2); see the tutorial doc.

**Path aliases:** `@components/*`, `@services/*`, `@models/*`, `@pages/*`

## Getting Started

### Prerequisites

- Node.js (see [`.nvmrc`](.nvmrc))
- [pnpm](https://pnpm.io/)

### Install & run

```bash
pnpm install
pnpm start
```

Open [http://localhost:4200](http://localhost:4200).

### E2E setup (first time)

```bash
pnpm run e2e:install
pnpm run e2e
```

## Scripts

| Command                 | Description                         |
| ----------------------- | ----------------------------------- |
| `pnpm start`            | Dev server with live reload         |
| `pnpm run build`        | Production build → `dist/myapp`     |
| `pnpm run start:prod`   | Serve production build on port 8080 |
| `pnpm test`             | Unit tests (Karma)                  |
| `pnpm run e2e`          | E2E tests (Playwright)              |
| `pnpm run lint`         | ESLint                              |
| `pnpm run format`       | Prettier write                      |
| `pnpm run format:check` | Prettier check                      |

## Testing

- **Unit:** `pnpm ng test --no-watch --browsers=ChromeHeadless`
- **E2E:** `pnpm run e2e` (builds first, then runs 20 Playwright specs)

Specs cover store persistence and todo component sync behavior. E2E validates
full user flows including `localStorage` under the key `mydayapp-angular`.

## Styling

Styles live in [`src/styles.css`](src/styles.css) (TodoMVC-based). HTML class
names match that stylesheet — changing them may break E2E selectors.

## License

[MIT](https://opensource.org/licenses/MIT)

## Credits

- [TodoMVC Project](https://todomvc.com/)
- [MyDayApp — JavaScript](https://github.com/platzi/laboratorio-mydayapp-js)
  (original lab inspiration)
