import { ChevronDown, Filter, Search } from "lucide-react";
import translations from "./translations";

interface FiltersProps {
  readonly translations: typeof translations.en;
}

export default function Filters({ translations }: FiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <div className="relative w-full sm:w-64">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          placeholder={translations.searchPlaceholder}
        />
      </div>
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <div className="relative">
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <Filter className="h-5 w-5 mr-2 text-gray-500" />
            {translations.filter}
            <ChevronDown className="h-5 w-5 ml-2 text-gray-500" />
          </button>
        </div>
        <div className="relative">
          <select className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 rounded-md pl-3 pr-8 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
            <option>{translations.allStatuses}</option>
            <option>{translations.active}</option>
            <option>{translations.planning}</option>
            <option>{translations.onHold}</option>
            <option>{translations.completed}</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronDown className="h-5 w-5 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
