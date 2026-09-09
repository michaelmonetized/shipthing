# ShipThing - Development Plan

## Project Overview

**HEAD reality:** ShipThing is a Next.js 16 app with a **contacts CRM spine** (Clerk + Convex + Resend) and a `proxy.ts` Next 16 auth guardrail. It is **not** yet a carrier rate / label product.

Carrier rate comparison and label generation remain a **future product aspiration**, not the shipped stack.

## Current State (aligned to HEAD)

### Shipped / present
- ✅ Next.js 16 app router + `proxy.ts` (no legacy `middleware.ts`)
- ✅ Clerk authentication (`@clerk/nextjs`)
- ✅ Convex schema + `contacts` table / CRUD (`convex/schema.ts`, `convex/contacts.ts`)
- ✅ Resend email API routes (`app/api/send/...`)
- ✅ Public login surface + app shell
- ✅ Sentry / PostHog / Stripe deps present in package.json (integration depth varies)

### Not started (carrier product)
- ⬜ USPS / UPS / FedEx / DHL carrier APIs
- ⬜ Rate comparison engine
- ⬜ Label generation (ZPL/PDF)
- ⬜ Order import / batch labels / tracking unification

## Phase A — Contacts spine (current focus)

- [x] Next.js + Convex project scaffold
- [x] Clerk auth guard via `proxy.ts`
- [x] Contacts schema + mutations/queries
- [x] Resend notification/confirmation routes
- [ ] Richer contacts UI / admin beyond scaffold pages
- [ ] Harden env docs (`.env.example` completeness)

## Phase B — Carrier / shipping product (future; aspirational)

Only pursue after contacts spine is solid:

1. Carrier aggregator (EasyPost/Shippo) **or** direct USPS/UPS/FedEx
2. Rate comparison
3. Label generation + history
4. Address validation + package presets

Do **not** treat unchecked carrier items below as “in progress at HEAD.”

### Deferred backlog (Not Started at HEAD)
- Carrier APIs, rate comparison, label generation
- Order import, batch labels, tracking, returns, insurance, multi-location

## Success Metrics (when Phase B starts)
- Active users / labels printed / savings vs retail — TBD once carrier path ships

*PLAN parity sync: 2026-09-08 — PLAN now matches contacts spine; carrier APIs explicitly future.*
