# React | TypeScript | Vite | Feature Sliced Design (Please read info below)

Information about project:

- Official Swapi API doesn't provide `page` query for `search` service, so I used another similar endpoint of Swapi - `https://swapi.py4e.com/api/`
- Both Swapi API's don't provide `id` field for `routing request by id`, but there is `url` field, which contains needed value for request -> `people/${id}`
- I was used the famous Feature sliced design architecture for best code organize
- In requirements I didn't see any state manager library, so I used the most popular solution `@reduxjs/toolkit`
- Error handling done via `Toasts`
- UI Kit `Material`
- Main container with characters is `scrollable`
- Character editing(`people/${id}` route), saving and searching was done via debounce
- In addition I wrote a couple of tests via `jest` for example

## File structure by FSD:

Layers:

- /app - contains main providers, routers and styles
- /shared - all reusable items and types
- /entities - business logic and low level ui components
- /features - user actions components like Search, Pagination, Field etc
- /widgets - big blocks, which are connected features and entities
- /pages - page components with widgets

Each layer is divided into business directions(slices) - characters(list) and character(separate view for character item)

And each slice is didided into segments like `ui`, `model`, `utils`.

Thank you for attention, have a nice day :)