import { CheckCircle } from 'lucide-react';

const steps = [
  { num: 1, label: 'Company ID' },
  { num: 2, label: 'Your Details' },
];

export default function Stepper({ step }: { step: 1 | 2 }) {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-10">
      <div className="flex items-center justify-between">
        {steps.map((s, i) => (
          <div key={s.num} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${
                step > s.num
                  ? 'bg-accent border-accent text-accent-ink'
                  : step === s.num
                  ? 'bg-primary border-primary text-white'
                  : 'bg-white border-border text-text-muted'
              }`}>
                {step > s.num ? <CheckCircle className="w-5 h-5" /> : s.num}
              </div>
              <span className={`mt-2 text-xs font-medium ${step === s.num ? 'text-primary' : 'text-text-muted'}`}>{s.label}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-2 mb-5 ${step > s.num ? 'bg-accent' : 'bg-border'}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
