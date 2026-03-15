interface SearchBarProps {
  resultCount: number;
  fromDate: string;
  toDate: string;
  onFromDateChange: (value: string) => void;
  onToDateChange: (value: string) => void;
  onSearch: () => void;
}

export default function SearchBar({
  resultCount,
  fromDate,
  toDate,
  onFromDateChange,
  onToDateChange,
  onSearch,
}: SearchBarProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className="bg-white px-4 py-3">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

        <div className="flex flex-col items-start gap-3">
          <h1 className="text-sm font-bold text-gray-800">Search</h1>
          <span className="text-xs text-gray-500">
            Search results :{" "}
            <span className="font-semibold text-gray-700">{resultCount}</span>
          </span>
        </div>

        <div
          className="flex flex-wrap items-center gap-2"
          onKeyDown={handleKeyDown}
        >
          <div className="flex items-center gap-1">
            <label className="text-xs text-gray-600 font-medium whitespace-nowrap">
              Period
            </label>
            <select
              disabled
              value="Transmission"
              className="border border-gray-300 rounded px-2 py-1 text-xs bg-white text-gray-700 cursor-not-allowed opacity-80 focus:outline-none"
            >
              <option value="Transmission">Transmission</option>
            </select>
          </div>

          <div className="flex items-center gap-1">
            <label className="text-xs text-gray-600 font-medium whitespace-nowrap">
              Status
            </label>
            <select
              disabled
              value="Waiting"
              className="border border-gray-300 rounded px-2 py-1 text-xs bg-white text-gray-700 cursor-not-allowed opacity-80 focus:outline-none"
            >
              <option value="Waiting">Waiting</option>
            </select>
          </div>

          <div className="flex items-center gap-1 w-full sm:w-auto">
            <label className="text-xs text-gray-600 font-medium whitespace-nowrap w-10 md:w-full">
              From
            </label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => onFromDateChange(e.target.value)}
              className="flex-1 sm:flex-none border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-1 w-full sm:w-auto">
            <label className="text-xs text-gray-600 font-medium whitespace-nowrap w-10 md:w-full">
              To
            </label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => onToDateChange(e.target.value)}
              className="flex-1 sm:flex-none border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            onClick={onSearch}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-semibold px-6 py-2 rounded-full transition-colors"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
