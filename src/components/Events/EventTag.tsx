import { motion } from 'framer-motion';

interface EventTagProps {
  children: React.ReactNode;
  color?: 'blue' | 'yellow' | 'red' | 'green' | 'purple';
}

const EventTag = ({ children, color = 'blue' }: EventTagProps) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    yellow: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
    red: 'bg-red-100 text-red-800 hover:bg-red-200',
    green: 'bg-green-100 text-green-800 hover:bg-green-200',
    purple: 'bg-purple-100 text-purple-800 hover:bg-purple-200',
  };

  return (
    <motion.span
      className={`text-xs font-medium px-2.5 py-0.5 rounded-full inline-flex items-center ${colorClasses[color]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  );
};

export default EventTag;