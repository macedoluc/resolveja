# Architecture — resolveJá

## Overview

Monorepo with separate frontend and backend deploy targets.

- **Frontend:** React, TypeScript, Tailwind CSS → Vercel
- **Backend:** FastAPI, Python → Render / Fly.io
- **Database:** PostgreSQL on Neon

## User flow (MVP)

1. Landing page (institutional)
2. User chooses: hire a professional OR offer services
3. Login or register (role implied by journey)
4. Dashboard (future)

## Deferred decisions

| Topic | Current approach | Future |
|-------|------------------|--------|
| Containers | No Docker locally | Optional later |
| Auth tokens | Access JWT only | Refresh token |
| DB migrations | SQLAlchemy create_all | Alembic |
| Local Postgres | Neon (cloud) | Optional local install |

## Repository layout

- `frontend/` — SPA, pages, components
- `backend/` — API, services, models
- `docs/` — Architecture and ADRs