import { Info, AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

interface InfoBoxProps {
  type?: 'info' | 'warning' | 'success' | 'danger';
  title?: string;
  children: React.ReactNode;
}

export default function InfoBox({ type = 'info', title, children }: InfoBoxProps) {
  const styles = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: <Info className="w-4 h-4 text-blue-600" />,
      titleColor: 'text-blue-900'
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      icon: <AlertTriangle className="w-4 h-4 text-yellow-600" />,
      titleColor: 'text-yellow-900'
    },
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: <CheckCircle className="w-4 h-4 text-green-600" />,
      titleColor: 'text-green-900'
    },
    danger: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: <AlertCircle className="w-4 h-4 text-red-600" />,
      titleColor: 'text-red-900'
    }
  };

  const style = styles[type];

  return (
    <div className={`${style.bg} border ${style.border} rounded-lg p-4 my-4`}>
      <div className="flex gap-2">
        <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
        <div className="flex-1">
          {title && (
            <p className={`font-semibold ${style.titleColor} mb-1 text-sm`}>{title}</p>
          )}
          <div className="text-gray-700 text-sm leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
