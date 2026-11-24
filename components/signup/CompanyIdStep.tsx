import { ChevronRight, Hash } from 'lucide-react';
import { DEMO_COMPANY_ID } from '@/lib/siteConfig';
import { inputClass, labelClass } from './styles';

type Props = {
  value: string;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export default function CompanyIdStep({ value, error, onChange, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-1">Enter your Company ID</h2>
        <p className="text-text-muted text-sm">Step 1 of 2 — Provided by your employer</p>
      </div>

      <div>
        <label htmlFor="companyId" className={labelClass}>Company ID *</label>
        <div className="relative">
          <Hash className="absolute left-3 top-3.5 h-5 w-5 text-text-muted" />
          <input
            type="text"
            id="companyId"
            name="companyId"
            required
            value={value}
            onChange={onChange}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? 'companyId-error' : undefined}
            className={`${inputClass} pl-10 pr-3 text-lg ${error ? 'border-red-500 bg-red-50' : ''}`}
            placeholder={`e.g. ${DEMO_COMPANY_ID}`}
          />
        </div>
        {error && (
          <p id="companyId-error" role="alert" className="text-red-700 text-sm mt-2 font-medium">{error}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-accent hover:bg-accent-hover text-accent-ink text-lg font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 transition-colors"
      >
        Continue <ChevronRight className="w-5 h-5" />
      </button>
    </form>
  );
}
