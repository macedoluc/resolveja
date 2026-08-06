# ADR 001: Initial project structure

## Status

Accepted

## Context

Starting resolveJá as a learning-focused, incrementally evolving marketplace.
Goal: understand architecture before adding complexity.

## Decision

1. **Monorepo** with `frontend/`, `backend/`, `docs/`
2. **No Docker** in early stages
3. **No refresh token** initially — JWT access token only
4. **No Alembic** initially — use SQLAlchemy `create_all`, add Alembic later
5. **Neon** for PostgreSQL instead of local install
6. **Landing page first**, then auth (not login as entry point)
7. **UI in Portuguese**, **technical docs in English**

## Consequences

- Faster onboarding, fewer moving parts
- Schema changes in Stage 2 require manual care until Alembic is added
- Longer JWT expiry or re-login until refresh token is implemented
- Neon dependency for database work in Stage 2