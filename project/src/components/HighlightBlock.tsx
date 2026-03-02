import { LucideIcon } from 'lucide-react';

interface HighlightBlockProps {
  text: string;
  variant?: 'quote' | 'callout' | 'emphasis';
  icon?: LucideIcon;
}

export default function HighlightBlock({ text, variant = 'callout', icon: Icon }: HighlightBlockProps) {
  if (variant === 'quote') {
    return (
      <blockquote className="my-6 relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
        <div className="pl-6 py-1">
          <p className="text-lg text-gray-800 font-medium italic leading-relaxed">
            "{text}"
          </p>
        </div>
      </blockquote>
    );
  }

  if (variant === 'emphasis') {
    return (
      <div className="my-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200">
        <div className="flex items-start gap-3">
          {Icon && (
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
              <Icon className="w-5 h-5 text-blue-600" />
            </div>
          )}
          <p className="text-gray-700 leading-relaxed flex-1">{text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="my-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-100">
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
            <Icon className="w-5 h-5 text-blue-600" />
          </div>
        )}
        <p className="text-gray-700 leading-relaxed flex-1 font-medium">{text}</p>
      </div>
    </div>
  );
}
