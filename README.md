# Stock Order Dashboard

A responsive stock order search and management dashboard built with **React**, **TypeScript**, and **Tailwind CSS**.

## Features

- **Order search** — filter orders by date range (From / To)
- **Fixed filters** — Period is locked to `Transmission`, Status to `Waiting` (MVP)
- **Expandable rows** — click any row to reveal order detail: customer info, net amount, exchange rate, warnings, and Accept / Reject actions
- **Responsive layout** — desktop shows all columns; mobile shows only Account, Operation, Symbol, and Status
- **Mock API** — `fetchOrders()` simulates a backend call with a short delay; swap in a real endpoint when ready

## Tech Stack

| Layer | Library |
|-------|---------|
| Framework | React 19 + TypeScript |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 3 |
| Icons | lucide-react |

## Project Structure

```
src/
├── api/
│   └── ordersApi.ts        # Mock API (replace with real fetch)
├── components/
│   ├── SearchBar.tsx        # Date range inputs + Search button
│   ├── OrderTable.tsx       # Responsive table with sortable headers
│   ├── OrderRow.tsx         # Expandable row with chevron toggle
│   ├── OrderDetailPanel.tsx # Expanded detail: amounts, warnings, actions
│   └── StatusBadge.tsx      # Amber "Waiting" badge
├── data/
│   └── mockOrders.ts        # 16 sample orders (Dec 2022 – Jan 2023)
├── types/
│   └── order.ts             # Order & SearchParams TypeScript interfaces
└── App.tsx                  # Root component — state, filtering, layout
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the dev server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Data Model

```ts
interface Order {
  id: string;
  account: string;
  operation: 'Buy' | 'Sell';
  symbol: string;
  description: string;
  qty: number;
  filledQty: number;
  price: number;
  status: 'Waiting';
  date: string;        // ISO datetime string
  expiration: string;
  noRef: string;
  extRef: string;
  // Detail panel fields
  customerName: string;
  customerId: string;
  netAmount: number;
  currency: string;
  exchangeRate: number;
  qsLimit: number;
  referenceNumber: string;
  telephone: string;
  userId: string;
  warnings: string[];
}
```

## Connecting a Real Backend

Replace the mock in `src/api/ordersApi.ts` with a real HTTP call:

```ts
export async function fetchOrders(): Promise<Order[]> {
  const res = await fetch('/api/orders');
  if (!res.ok) throw new Error('Failed to fetch orders');
  return res.json();
}
```
