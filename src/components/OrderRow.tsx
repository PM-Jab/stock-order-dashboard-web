import { ChevronRight, MoreHorizontal } from 'lucide-react';
import type { Order } from '../types/order';
import StatusBadge from './StatusBadge';
import OrderDetailPanel from './OrderDetailPanel';

interface OrderRowProps {
  order: Order;
  isExpanded: boolean;
  onToggle: () => void;
}

function formatDate(dateStr: string): string {
  return dateStr.replace('T', ' ');
}

export default function OrderRow({ order, isExpanded, onToggle }: OrderRowProps) {
  return (
    <>
      <tr
        className={`border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors ${isExpanded ? 'bg-blue-50' : ''}`}
        onClick={onToggle}
      >
        {/* Chevron */}
        <td className="pl-3 pr-1 py-2 w-6">
          <ChevronRight
            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
          />
        </td>

        {/* Account */}
        <td className="px-2 py-2 text-xs">
          <span className="text-blue-500 font-medium hover:underline cursor-pointer">
            {order.account}
          </span>
        </td>

        {/* Operation */}
        <td className="px-2 py-2 text-xs text-gray-700">{order.operation}</td>

        {/* Symbol */}
        <td className="px-2 py-2 text-xs text-gray-700">{order.symbol}</td>

        {/* Description - hidden on mobile */}
        <td className="px-2 py-2 text-xs text-gray-700 hidden md:table-cell">{order.description}</td>

        {/* Qty - hidden on mobile */}
        <td className="px-2 py-2 text-xs text-gray-700 text-right hidden md:table-cell">{order.qty}</td>

        {/* Filled Qty - hidden on mobile */}
        <td className="px-2 py-2 text-xs text-gray-700 text-right hidden md:table-cell">{order.filledQty}</td>

        {/* Price - hidden on mobile */}
        <td className="px-2 py-2 text-xs text-gray-700 text-right hidden md:table-cell">
          {order.price.toFixed(2)}
        </td>

        {/* Status */}
        <td className="px-2 py-2 text-xs">
          <StatusBadge status={order.status} />
        </td>

        {/* Date - hidden on mobile */}
        <td className="px-2 py-2 text-xs text-gray-700 hidden md:table-cell whitespace-nowrap">
          {formatDate(order.date)}
        </td>

        {/* Expiration - hidden on mobile */}
        <td className="px-2 py-2 text-xs text-gray-700 hidden md:table-cell whitespace-nowrap">
          {formatDate(order.expiration)}
        </td>

        {/* No. Ref - hidden on mobile */}
        <td className="px-2 py-2 text-xs font-semibold text-gray-700 hidden md:table-cell">{order.noRef}</td>

        {/* Ext. Ref - hidden on mobile */}
        <td className="px-2 py-2 text-xs text-gray-700 hidden md:table-cell">{order.extRef}</td>

        {/* More options - hidden on mobile */}
        <td className="px-2 py-2 hidden md:table-cell">
          <button
            className="text-cyan-600 hover:text-gray-600 p-1 rounded-full bg-gray-100"
            onClick={(e) => { e.stopPropagation(); }}
          >
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </td>
      </tr>

      {/* Expanded detail row */}
      {isExpanded && (
        <tr>
          <td colSpan={14} className="p-0">
            <OrderDetailPanel order={order} />
          </td>
        </tr>
      )}
    </>
  );
}
