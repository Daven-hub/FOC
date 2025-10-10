import { ReactNode } from 'react';

interface EventTagProps {
  children: ReactNode;
  color: 'blue' | 'red' | 'green';
}

const EventTag = ({ children, color }: EventTagProps) => {
  const colorClasses = {
    blue: 'bg-foc-blue/10 text-foc-blue border-foc-blue/20',
    red: 'bg-foc-red/10 text-foc-red border-foc-red/20',
    green: 'bg-green-100 text-green-800 border-green-200'
  };

  return (
    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${colorClasses[color]}`}>
      {children}
    </span>
  );
};

export default EventTag;