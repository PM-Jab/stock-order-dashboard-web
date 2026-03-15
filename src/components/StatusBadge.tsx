interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1 text-xs text-gray-700">
      <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-amber-400 text-white font-bold text-xs leading-none">
        i
      </span>
      {status}
    </span>
  );
}
