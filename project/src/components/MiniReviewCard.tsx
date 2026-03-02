import { ArrowRight, Star, Check } from 'lucide-react';

interface MiniReviewCardProps {
  name: string;
  tagline: string;
  highlights: string[];
  rating?: number;
  ctaText: string;
  ctaLink: string;
  accentColor?: 'blue' | 'cyan' | 'teal';
}

const colorMap = {
  blue: {
    gradient: 'from-blue-600 to-blue-700',
    light: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-600',
    hover: 'hover:from-blue-700 hover:to-blue-800',
  },
  cyan: {
    gradient: 'from-cyan-600 to-cyan-700',
    light: 'bg-cyan-50',
    border: 'border-cyan-200',
    text: 'text-cyan-600',
    hover: 'hover:from-cyan-700 hover:to-cyan-800',
  },
  teal: {
    gradient: 'from-teal-600 to-teal-700',
    light: 'bg-teal-50',
    border: 'border-teal-200',
    text: 'text-teal-600',
    hover: 'hover:from-teal-700 hover:to-teal-800',
  },
};

export default function MiniReviewCard({
  name,
  tagline,
  highlights,
  rating,
  ctaText,
  ctaLink,
  accentColor = 'blue',
}: MiniReviewCardProps) {
  const colors = colorMap[accentColor];

  return (
    <div className={`rounded-xl border ${colors.border} overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow`}>
      <div className={`bg-gradient-to-r ${colors.gradient} px-5 py-4`}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">{name}</h3>
            <p className="text-white/90 text-sm mt-0.5">{tagline}</p>
          </div>
          {rating && (
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span className="text-white font-semibold text-sm">{rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-5">
        <ul className="space-y-2.5 mb-5">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <span className={`flex-shrink-0 w-5 h-5 rounded-full ${colors.light} flex items-center justify-center mt-0.5`}>
                <Check className={`w-3 h-3 ${colors.text}`} />
              </span>
              <span className="text-gray-700 text-sm leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>

        <a
          href={ctaLink}
          className={`w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r ${colors.gradient} ${colors.hover} text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-sm hover:shadow-md`}
        >
          {ctaText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
