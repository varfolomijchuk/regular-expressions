import { Check } from 'lucide-react';

interface KeyTakeawaysProps {
  title?: string;
  items: string[];
}

export default function KeyTakeaways({ title = 'Belangrijkste punten', items }: KeyTakeawaysProps) {
  return (
    <div className="my-4 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
      <p className="font-bold text-gray-900 text-sm mb-2">{title}</p>
      <ul className="space-y-1.5">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2 items-start">
            <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800 leading-relaxed text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
