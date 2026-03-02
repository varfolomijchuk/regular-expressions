import { Clock, Info, Award } from 'lucide-react';

interface AuthorSnippetLabels {
  author?: string;
  factChecker?: string;
  updated?: string;
  howWeReviewTitle?: string;
  howWeReviewText?: string;
  trustTitle?: string;
  trustText?: string;
}

interface AuthorSnippetProps {
  authorName: string;
  authorRole?: string;
  authorAvatar?: string;
  factCheckerName?: string;
  factCheckerRole?: string;
  factCheckerAvatar?: string;
  updatedDate?: string;
  labels?: AuthorSnippetLabels;
}

export default function AuthorSnippet({
  authorName,
  authorRole: _authorRole,
  authorAvatar,
  factCheckerName,
  factCheckerRole: _factCheckerRole,
  factCheckerAvatar,
  updatedDate,
  labels = {}
}: AuthorSnippetProps) {
  const defaultLabels: AuthorSnippetLabels = {
    author: 'Auteur',
    factChecker: 'Geverifieerd',
    updated: 'Bijgewerkt',
    howWeReviewTitle: 'Hoe wij beoordelen',
    howWeReviewText: 'Ons team test en beoordeelt elke optie op basis van functies, prijzen, prestaties en gebruikerservaring. Alle reviews zijn onafhankelijk en onpartijdig.',
    trustTitle: 'Vertrouwen en transparantie',
    trustText: 'Deze inhoud is geverifieerd door experts uit de branche. We kunnen commissie ontvangen via partnerlinks, maar dit heeft nooit invloed op onze beoordelingen of aanbevelingen.'
  };

  const l = { ...defaultLabels, ...labels };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 mt-3 border-t border-gray-200">
      <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
        <div className="flex items-center gap-2">
          {authorAvatar ? (
            <img
              src={authorAvatar}
              alt={authorName}
              className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
              width="40"
              height="40"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
              {authorName.charAt(0)}
            </div>
          )}
          <div>
            <p className="text-xs text-gray-600">{l.author}</p>
            <p className="text-sm font-semibold text-gray-900">{authorName}</p>
          </div>
        </div>

        {factCheckerName && (
          <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-gray-200">
            {factCheckerAvatar ? (
              <img
                src={factCheckerAvatar}
                alt={factCheckerName}
                className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                width="40"
                height="40"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm">
                {factCheckerName.charAt(0)}
              </div>
            )}
            <div>
              <p className="text-xs text-gray-600">{l.factChecker}</p>
              <p className="text-sm font-semibold text-gray-900">{factCheckerName}</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        {updatedDate && (
          <div className="flex items-center gap-1.5 text-xs text-gray-600 mr-2">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{l.updated}: {updatedDate}</span>
          </div>
        )}

        <div className="group relative">
          <button
            className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-colors"
            aria-label={l.howWeReviewTitle}
            title={l.howWeReviewTitle}
          >
            <Info className="w-4 h-4" />
          </button>
          <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all">
            <p className="font-semibold mb-1">{l.howWeReviewTitle}</p>
            <p className="text-gray-300 leading-relaxed">{l.howWeReviewText}</p>
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
          </div>
        </div>

        <div className="group relative">
          <button
            className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-colors"
            aria-label={l.trustTitle}
            title={l.trustTitle}
          >
            <Award className="w-4 h-4" />
          </button>
          <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all">
            <p className="font-semibold mb-1">{l.trustTitle}</p>
            <p className="text-gray-300 leading-relaxed">{l.trustText}</p>
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
