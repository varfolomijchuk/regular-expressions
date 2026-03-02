interface Step {
  title: string;
  description: string;
}

interface StepByStepProps {
  title: string;
  steps: Step[];
}

export default function StepByStep({ title, steps }: StepByStepProps) {
  return (
    <div className="my-6">
      {title && <p className="text-xl font-bold text-gray-900 mb-4">{title}</p>}
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4 items-start p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-800 text-white flex items-center justify-center font-bold text-sm rounded" aria-hidden="true">
              {index + 1}
            </div>
            <div className="flex-1 pt-0.5">
              <p className="text-base font-semibold text-gray-900 mb-1">{step.title}</p>
              <p className="text-gray-700 leading-relaxed text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
