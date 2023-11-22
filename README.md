# Atrioc 'ACLU' NextJs Nomination Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to run

Here is my .env file, API_URL and API_TOKEN provided by ACLU. Can refer to the `src/app/components/types.ts` to mock if you're curious.

```
TWITCH_CLIENT_ID=
TWITCH_CLIENT_SECRET=
NEXTAUTH_SECRET=
API_URL=
API_TOKEN=
DISCORD_WEBHOOK=
```

To initialize the database `cd` to the `scripts/` folder and run `node initDB.mjs`.

This will place the .db file in your root directory.
