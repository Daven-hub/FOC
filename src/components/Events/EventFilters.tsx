import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { FilterOption } from './types';

interface EventFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  filters: FilterOption[];
}

const EventFilters = ({ 
  searchTerm, 
  setSearchTerm, 
  activeFilter, 
  setActiveFilter, 
  filters 
}: EventFiltersProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
      <div className="flex-1 relative w-full">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <Search className="text-gray-400 h-4 w-4" />
        </div>
        <Input
          placeholder="Rechercher un événement..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 h-10 text-sm"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            variant={activeFilter === filter.id ? 'default' : 'outline'}
            size="sm"
            className={`whitespace-nowrap rounded-full ${
              activeFilter === filter.id 
                ? 'bg-foc-red hover:bg-foc-blue text-white' 
                : 'text-gray-700 hover:bg-gray-100 border-gray-300'
            }`}
          >
            {filter.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default EventFilters;