import { ExternalLink } from 'lucide-react';
import type { Order } from '../types/order';

interface OrderDetailPanelProps {
  order: Order;
}

export default function OrderDetailPanel({ order }: OrderDetailPanelProps) {
  return (
    <div className="bg-white border-t border-blue-100 px-4 py-4">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-semibold text-sm text-blue-500">{order.customerName}</span>
          <span className="text-blue-500 text-xs font-semibold">
            ( {order.customerId} )
          </span>
          <button className="inline-flex items-center gap-1 text-xs text-blue-600 border border-blue-300 rounded-full px-2 py-1 hover:bg-blue-100 transition-colors">
            Full review details
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-6 py-1.5 rounded-full transition-colors">
            ACCEPT
          </button>
          <button className="border border-red-600 bg-white hover:bg-gray-50 text-red-600 text-xs font-semibold px-6 py-1.5 rounded-full inline-flex items-center gap-1 transition-colors">
            Reject
            <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 10L4 6h8z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2 text-xs mb-4">
        <div>
          <span className="text-gray-500">Net Amount: </span>
          <span className="font-semibold text-gray-800">
            {order.netAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {order.currency}
          </span>
        </div>
        <div>
          <span className="text-gray-500">Price: </span>
          <span className="font-semibold text-gray-800">
            {order.price.toFixed(2)}
          </span>
        </div>
        <div>
          <span className="text-gray-500">Exchange Rate: </span>
          <span className="font-semibold text-gray-800">{order.exchangeRate.toFixed(4)}</span>
        </div>
        <div>
          <span className="text-gray-500">Q/S Limit: </span>
          <span className="font-semibold text-gray-800">{order.qsLimit.toFixed(1)}</span>
        </div>
        <div>
          <span className="text-gray-500">Reference Number: </span>
          <span className="font-semibold text-gray-800">{order.referenceNumber}</span>
        </div>
        <div>
          <span className="text-gray-500">Date / Time: </span>
          <span className="font-semibold text-gray-800">
            {order.date.replace('T', ' ')}
          </span>
        </div>
        <div>
          <span className="text-gray-500">Telephone: </span>
          <span className="font-semibold text-gray-800">{order.telephone}</span>
        </div>
        <div>
          <span className="text-gray-500">User ID: </span>
          <span className="font-semibold text-gray-800">{order.userId}</span>
        </div>
      </div>

      {order.warnings.length > 0 && (
        <div className="bg-gray-50 rounded p-3">
          <p className="text-xs font-semibold text-gray-700 mb-1">Warning(s)</p>
          <ul className="list-disc list-inside space-y-0.5">
            {order.warnings.map((warning, idx) => (
              <li key={idx} className="text-xs text-gray-600">{warning}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
