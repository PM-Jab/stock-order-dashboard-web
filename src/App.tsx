import { useState, useEffect, useRef } from 'react';
import { mockOrders } from './data/mockOrders';
import type { Order } from './types/order';
import { fetchOrders } from './api/ordersApi';
import SearchBar from './components/SearchBar';
import OrderTable from './components/OrderTable';

function filterOrders(orders: Order[], fromDate: string, toDate: string): Order[] {
  if (!fromDate && !toDate) return orders;
  return orders.filter(order => {
    const orderDate = order.date.substring(0, 10);
    if (fromDate && orderDate < fromDate) return false;
    if (toDate && orderDate > toDate) return false;
    return true;
  });
}

export default function App() {
  const [fromDate, setFromDate] = useState('2022-12-01');
  const [toDate, setToDate] = useState('2023-01-31');
  const [allOrders, setAllOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Keep a ref to the latest date values so the search handler is always current
  const fromDateRef = useRef(fromDate);
  const toDateRef = useRef(toDate);
  fromDateRef.current = fromDate;
  toDateRef.current = toDate;

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchOrders()
      .then((data) => {
        setAllOrders(data);
        setFilteredOrders(filterOrders(data, fromDateRef.current, toDateRef.current));
      })
      .catch(() => setError('Failed to load orders. Please try again.'))
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = () => {
    setFilteredOrders(filterOrders(allOrders.length ? allOrders : mockOrders, fromDate, toDate));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-white rounded shadow overflow-hidden">
          <SearchBar
            resultCount={filteredOrders.length}
            fromDate={fromDate}
            toDate={toDate}
            onFromDateChange={setFromDate}
            onToDateChange={setToDate}
            onSearch={handleSearch}
          />
          {loading ? (
            <div className="flex items-center justify-center py-16 text-gray-500 text-sm gap-2">
              <svg className="animate-spin w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              Loading orders…
            </div>
          ) : error ? (
            <div className="flex items-center justify-center py-16 text-red-500 text-sm">
              {error}
            </div>
          ) : (
            <OrderTable orders={filteredOrders} />
          )}
        </div>
      </div>
    </div>
  );
}
