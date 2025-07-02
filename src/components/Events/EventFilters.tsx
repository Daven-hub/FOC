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
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1 relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <Search className="text-gray-400 h-4 w-4 md:h-5 md:w-5" />
        </div>
        <Input
          placeholder="Rechercher par mot-clé..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 h-11 md:h-12 text-sm md:text-base"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            variant={activeFilter === filter.id ? 'default' : 'outline'}
            size="sm"
            className={`whitespace-nowrap rounded-full ${activeFilter === filter.id ? 'bg-destructive hover:bg-destructive text-white shadow-md' :'' }`}
          >
            {filter.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default EventFilters;