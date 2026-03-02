interface HowToStep {
  title: string;
  description: string;
  image?: string;
}

interface HowToProps {
  title: string;
  description?: string;
  steps: HowToStep[];
  totalTime?: string;
  totalTimeLabel?: string;
}

export default function HowTo({ title, description, steps, totalTime, totalTimeLabel }: HowToProps) {
  return (
    <div
      className="my-6"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      {title && <p className="text-xl font-bold text-gray-900 mb-3" itemProp="name">{title}</p>}
      {description && (
        <p className="text-gray-700 leading-relaxed mb-4 text-base" itemProp="description">
          {description}
        </p>
      )}
      {totalTime && (
        <p className="text-sm text-gray-700 mb-4">
          <strong>{totalTimeLabel || 'Celkový čas'}:</strong> <span itemProp="totalTime">{totalTime}</span>
        </p>
      )}
      <ol className="space-y-4">
        {steps.map((step, index) => (
          <li
            key={index}
            className="flex gap-4 p-4 bg-white border border-gray-200 rounded-lg"
            itemProp="step"
            itemScope
            itemType="https://schema.org/HowToStep"
          >
            <div className="flex-shrink-0 w-8 h-8 bg-gray-800 text-white flex items-center justify-center font-bold text-sm rounded" aria-hidden="true">
              {index + 1}
            </div>
            <div className="flex-1">
              <p className="text-base font-semibold text-gray-900 mb-2" itemProp="name">
                {step.title}
              </p>
              {step.image && (
                <img
                  src={step.image}
                  alt={`Krok ${index + 1}: ${step.title}`}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                  width="600"
                  height="192"
                  loading="lazy"
                  decoding="async"
                  itemProp="image"
                />
              )}
              <p className="text-gray-700 leading-relaxed text-sm" itemProp="text">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
