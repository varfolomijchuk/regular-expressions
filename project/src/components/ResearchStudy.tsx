import { BookOpen, ExternalLink } from 'lucide-react';

interface ResearchStudyProps {
  title: string;
  source: string;
  year?: string;
  findings: string[];
  integrationContext?: string;
  sourceUrl?: string;
}

export default function ResearchStudy({
  title,
  source,
  year,
  findings,
  integrationContext,
  sourceUrl
}: ResearchStudyProps) {
  return (
    <div
      className="my-6 bg-gradient-to-br from-slate-50 to-gray-100 border border-slate-200 rounded-xl overflow-hidden"
      itemScope
      itemType="https://schema.org/ScholarlyArticle"
    >
      <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-6 py-4">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="w-6 h-6" />
          <span className="text-sm font-semibold uppercase tracking-wide">Výzkumná studie</span>
        </div>
        <h3 className="text-xl font-bold leading-tight" itemProp="name">{title}</h3>
      </div>

      <div className="px-6 py-5">
        <div className="mb-4">
          <div className="flex items-center gap-2 text-gray-700">
            <span className="font-semibold">Zdroj:</span>
            <span itemProp="publisher">{source}</span>
            {year && <span className="text-gray-500">({year})</span>}
          </div>
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm mt-2"
            >
              Zobrazit původní studii
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        <div className="mb-4">
          <h4 className="font-bold text-gray-900 mb-3">Klíčová zjištění:</h4>
          <ol className="space-y-3">
            {findings.map((finding, index) => (
              <li key={index} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-slate-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <span className="text-gray-700 flex-1 pt-0.5">{finding}</span>
              </li>
            ))}
          </ol>
        </div>

        {integrationContext && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <h4 className="font-bold text-gray-900 mb-2">Praktické využití:</h4>
            <p className="text-gray-700">{integrationContext}</p>
          </div>
        )}
      </div>
    </div>
  );
}
