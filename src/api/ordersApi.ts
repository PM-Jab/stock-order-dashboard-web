import type { Order } from '../types/order';
import { mockOrders } from '../data/mockOrders';

export async function fetchOrders(): Promise<Order[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockOrders), 600); // delay api
  });
}
