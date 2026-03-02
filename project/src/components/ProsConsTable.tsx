import { Check, X } from 'lucide-react';

interface ProsConsTableProps {
  title: string;
  pros: string[];
  cons: string[];
  prosLabel?: string;
  consLabel?: string;
}

export default function ProsConsTable({ title, pros, cons, prosLabel = "Voordelen", consLabel = "Nadelen" }: ProsConsTableProps) {
  return (
    <div className="my-6">
      {title && <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-300 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Check className="w-5 h-5 text-green-700" />
            <h4 className="text-lg font-semibold text-gray-900">{prosLabel}</h4>
          </div>
          <ul className="space-y-2">
            {pros.map((pro, index) => (
              <li key={index} className="flex gap-3 items-start">
                <Check className="w-4 h-4 text-green-700 flex-shrink-0 mt-1" />
                <span className="text-gray-700 leading-relaxed text-base">{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-gray-300 p-6">
          <div className="flex items-center gap-2 mb-4">
            <X className="w-5 h-5 text-red-700" />
            <h4 className="text-lg font-semibold text-gray-900">{consLabel}</h4>
          </div>
          <ul className="space-y-2">
            {cons.map((con, index) => (
              <li key={index} className="flex gap-3 items-start">
                <X className="w-4 h-4 text-red-700 flex-shrink-0 mt-1" />
                <span className="text-gray-700 leading-relaxed text-base">{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
