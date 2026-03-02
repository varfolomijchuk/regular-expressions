import { ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <details
          key={index}
          className="border border-gray-300 rounded-lg overflow-hidden group"
        >
          <summary className="w-full flex items-center justify-between p-4 bg-gray-100 hover:bg-gray-200 transition-colors text-left cursor-pointer list-none">
            <span className="font-semibold text-gray-900">{item.title}</span>
            <ChevronDown className="w-5 h-5 text-gray-600 transition-transform flex-shrink-0 details-chevron" />
          </summary>
          <div className="p-4 bg-white border-t border-gray-300">
            {item.content}
          </div>
        </details>
      ))}
    </div>
  );
}
