import { LucideIcon } from 'lucide-react';

interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
}

interface StatGridProps {
  stats: StatItem[];
  columns?: 2 | 3 | 4;
}

export default function StatGrid({ stats, columns = 3 }: StatGridProps) {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4 my-6`}>
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 text-center hover:shadow-sm transition-shadow"
          >
            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-blue-50 flex items-center justify-center">
              <Icon className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
}
