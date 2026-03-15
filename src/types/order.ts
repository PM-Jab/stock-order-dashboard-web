export interface Order {
  id: string;
  account: string;
  operation: 'Buy' | 'Sell';
  symbol: string;
  description: string;
  qty: number;
  filledQty: number;
  price: number;
  status: 'Waiting';
  date: string;
  expiration: string;
  noRef: string;
  extRef: string;
  // Detail fields
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

export interface SearchParams {
  period: string;
  status: string;
  fromDate: string;
  toDate: string;
}
