interface AuthorBlockProps {
  name: string;
  role?: string;
  credentials?: string;
  bio: string;
  avatarUrl?: string;
  email?: string;
  linkedIn?: string;
  updatedDate?: string;
  profileLink?: string;
  profileLinkText?: string;
  updatedLabel?: string;
}

export default function AuthorBlock({
  name,
  role,
  bio,
  avatarUrl,
  email,
  linkedIn,
  updatedDate,
  profileLink,
  profileLinkText = 'Volledig profiel',
  updatedLabel = 'Bijgewerkt'
}: AuthorBlockProps) {
  return (
    <div
      className="my-4 p-4 bg-white border border-gray-200 rounded-lg"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={`${name} - auteur van het artikel`}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-gray-200"
              width="80"
              height="80"
              loading="lazy"
              decoding="async"
              itemProp="image"
            />
          ) : (
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
              {name.charAt(0)}
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-lg font-bold text-gray-900 mb-0.5" itemProp="name">{name}</p>

          {role && (
            <p className="text-sm text-gray-600 mb-2 italic" itemProp="jobTitle">
              {role}
              {profileLink && (
                <>
                  {' '}
                  <a href={profileLink} className="text-blue-600 hover:text-blue-700 not-italic underline">
                    {profileLinkText}
                  </a>
                </>
              )}
            </p>
          )}

          <p className="text-gray-700 leading-relaxed text-sm mb-2" itemProp="description">
            {bio}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
            {email && (
              <a
                href={`mailto:${email}`}
                className="text-blue-600 hover:text-blue-700"
                itemProp="email"
              >
                {email}
              </a>
            )}
            {linkedIn && (
              <>
                <span>|</span>
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                  itemProp="url"
                >
                  LinkedIn
                </a>
              </>
            )}
          </div>

          {updatedDate && (
            <p className="text-xs text-gray-500 mt-2">
              {updatedLabel}: {updatedDate}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
