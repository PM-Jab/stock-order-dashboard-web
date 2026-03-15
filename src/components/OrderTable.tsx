import { useState } from 'react';
import type { Order } from '../types/order';
import OrderRow from './OrderRow';

interface OrderTableProps {
  orders: Order[];
}

export default function OrderTable({ orders }: OrderTableProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b-2 border-cyan-600 border-opacity-20 bg-white">
            {/* Spacer for chevron */}
            <th className="w-6" />

            <th className="px-2 py-2 text-left text-xs font-semibold text-cyan-700 whitespace-nowrap">
              Account <span className="text-gray-300 font-light ml-1">|</span>
            </th>
            <th className="px-2 py-2 text-left text-xs font-semibold text-cyan-700 whitespace-nowrap">
              Operation <span className="text-gray-300 font-light ml-1">|</span>
            </th>
            <th className="px-2 py-2 text-left text-xs font-semibold text-cyan-700 whitespace-nowrap">
              Symbol <span className="text-gray-300 font-light ml-1">|</span>
            </th>
            <th className="px-2 py-2 text-left text-xs font-semibold text-cyan-700 whitespace-nowrap hidden md:table-cell">
              Description <span className="text-gray-300 font-light ml-1">|</span>
            </th>
            <th className="px-2 py-2 text-right text-xs font-semibold text-cyan-700 whitespace-nowrap hidden md:table-cell">
              Qty. <span className="text-gray-300 font-light ml-1">|</span>
            </th>
            <th className="px-2 py-2 text-right text-xs font-semibold text-cyan-700 whitespace-nowrap hidden md:table-cell">
              Filled Qty <span className="text-gray-300 font-light ml-1">|</span>
            </th>
            <th className="px-2 py-2 text-right text-xs font-semibold text-cyan-700 whitespace-nowrap hidden md:table-cell">
              Price <span className="text-gray-300 font-light ml-1">|</span>
            </th>
            <th className="px-2 py-2 text-left text-xs font-semibold text-cyan-700 whitespace-nowrap">
              Status <span className="text-gray-300 font-light ml-1">|</span>
            </th>
            <th className="px-2 py-2 text-left text-xs font-semibold text-cyan-700 whitespace-nowrap hidden md:table-cell">
              Date ↑ <span className="text-gray-300 font-light ml-1">|</span>
            </th>
            <th className="px-2 py-2 text-left text-xs font-semibold text-cyan-700 whitespace-nowrap hidden md:table-cell">
              Expiration <span className="text-gray-300 font-light ml-1">|</span>
            </th>
            <th className="px-2 py-2 text-left text-xs font-semibold text-cyan-700 whitespace-nowrap hidden md:table-cell">
              No. Ref. <span className="text-gray-300 font-light ml-1">|</span>
            </th>
            <th className="px-2 py-2 text-left text-xs font-semibold text-cyan-700 whitespace-nowrap hidden md:table-cell">
              Ext. Ref. <span className="text-gray-300 font-light ml-1">|</span>
            </th>
            <th className="px-2 py-2 hidden md:table-cell" />
          </tr>
        </thead>
        <tbody className="bg-white">
          {orders.length === 0 ? (
            <tr>
              <td colSpan={14} className="text-center py-12 text-gray-500 text-sm">
                No orders found for the selected date range.
              </td>
            </tr>
          ) : (
            orders.map(order => (
              <OrderRow
                key={order.id}
                order={order}
                isExpanded={expandedId === order.id}
                onToggle={() => handleToggle(order.id)}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
