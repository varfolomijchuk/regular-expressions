import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title: string;
  items: FAQItem[];
}

export default function FAQ({ title, items }: FAQProps) {
  return (
    <div className="my-6" itemScope itemType="https://schema.org/FAQPage">
      {title && <p className="text-xl font-bold text-gray-900 mb-4">{title}</p>}
      <div className="space-y-3">
        {items.map((item, index) => (
          <details
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <summary className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors text-left min-h-[48px] cursor-pointer list-none">
              <span className="text-base font-semibold text-gray-900 pr-4" itemProp="name">
                {item.question}
              </span>
              <ChevronDown
                className="w-5 h-5 text-gray-700 flex-shrink-0 transition-transform details-chevron"
                aria-hidden="true"
              />
            </summary>
            <div
              className="px-4 pb-4 bg-white border-t border-gray-200"
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <p className="text-gray-700 leading-relaxed text-base pt-3" itemProp="text">
                {item.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
