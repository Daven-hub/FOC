import { motion } from 'framer-motion';

type TagColor = 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'gray';

interface EventTagProps {
  children: React.ReactNode;
  color?: TagColor;
}

const colorClasses = {
  blue: 'bg-blue-100 text-blue-800',
  green: 'bg-green-100 text-green-800',
  red: 'bg-red-100 text-red-800',
  yellow: 'bg-yellow-100 text-yellow-800',
  purple: 'bg-purple-100 text-purple-800',
  gray: 'bg-gray-100 text-gray-800'
};

const EventTag = ({ children, color = 'blue' }: EventTagProps) => {
  return (
    <motion.span
      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${colorClasses[color]}`}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.span>
  );
};

export default EventTag;