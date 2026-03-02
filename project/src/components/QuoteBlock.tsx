import { Quote } from 'lucide-react';

interface QuoteBlockProps {
  quote: string;
  author?: string;
  role?: string;
}

export default function QuoteBlock({ quote, author, role }: QuoteBlockProps) {
  return (
    <div className="my-4 p-4 bg-gray-50 border-l-4 border-gray-700 rounded-r-lg">
      <div className="flex gap-3">
        <Quote className="w-6 h-6 text-gray-400 flex-shrink-0" />
        <div>
          <p className="text-gray-900 text-sm leading-relaxed italic mb-2">
            "{quote}"
          </p>
          {author && (
            <div className="text-xs text-gray-600">
              <span className="font-semibold">{author}</span>
              {role && <span className="text-gray-500"> - {role}</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
