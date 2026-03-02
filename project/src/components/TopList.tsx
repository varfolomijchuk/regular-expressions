import { Check } from 'lucide-react';

interface TopListItem {
  rank: number;
  title: string;
  subtitle?: string;
  description: string;
  features?: string[];
  ctaText?: string;
  ctaLink?: string;
  logo?: string;
}

interface TopListProps {
  title: string;
  items: TopListItem[];
  defaultCtaText?: string;
}

export default function TopList({ title, items, defaultCtaText = 'Bezoeken' }: TopListProps) {
  return (
    <div>
      {title && <p className="text-lg font-bold text-gray-900 mb-4">{title}</p>}
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.rank} className="bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 p-3">
              <div className="flex-shrink-0">
                {item.logo ? (
                  <img src={item.logo} alt={`${item.title} logo`} className="w-12 h-12 object-contain" width="48" height="48" loading="lazy" decoding="async" />
                ) : (
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{item.rank}</span>
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-sm sm:text-base font-bold text-gray-900">{item.title}</p>
                  {item.subtitle && (
                    <span className="text-sm text-gray-600 hidden sm:inline">- {item.subtitle}</span>
                  )}
                </div>
                {item.features && item.features.length > 0 && (
                  <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1">
                    {item.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="flex items-center gap-1 text-xs text-gray-600">
                        <Check className="w-3 h-3 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex-shrink-0">
                {item.ctaLink ? (
                  <a
                    href={item.ctaLink}
                    className="block px-5 py-2.5 min-h-[44px] min-w-[80px] bg-green-600 hover:bg-green-700 text-white font-bold text-center rounded-full transition-colors uppercase text-xs flex items-center justify-center"
                  >
                    {item.ctaText || defaultCtaText}
                  </a>
                ) : (
                  <button className="px-5 py-2.5 min-h-[44px] min-w-[80px] bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-colors uppercase text-xs">
                    {item.ctaText || defaultCtaText}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
