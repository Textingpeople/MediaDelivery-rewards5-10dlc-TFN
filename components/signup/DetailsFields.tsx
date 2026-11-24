import { Mail, Building, Phone, User, Briefcase } from 'lucide-react';
import { inputClass, labelClass } from './styles';

type Props = {
  values: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    jobTitle: string;
    department: string;
  };
  phoneError: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

const departments = [
  ['sales', 'Sales'],
  ['marketing', 'Marketing'],
  ['engineering', 'Engineering'],
  ['operations', 'Operations'],
  ['hr', 'Human Resources'],
  ['finance', 'Finance'],
  ['customer_success', 'Customer Success'],
  ['product', 'Product'],
  ['other', 'Other'],
];

export default function DetailsFields({ values, phoneError, onChange }: Props) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className={labelClass}>First Name *</label>
          <div className="relative">
            <User className="absolute left-3 top-3.5 h-4 w-4 text-text-muted" />
            <input type="text" id="firstName" name="firstName" required value={values.firstName} onChange={onChange}
              className={`${inputClass} pl-9 pr-3`} placeholder="Jane" />
          </div>
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>Last Name *</label>
          <input type="text" id="lastName" name="lastName" required value={values.lastName} onChange={onChange}
            className={`${inputClass} px-3`} placeholder="Smith" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Work Email *</label>
        <div className="relative">
          <Mail className="absolute left-3 top-3.5 h-4 w-4 text-text-muted" />
          <input type="email" id="email" name="email" required value={values.email} onChange={onChange}
            className={`${inputClass} pl-9 pr-3`} placeholder="jane@company.com" />
        </div>
      </div>

      <div>
        <label htmlFor="jobTitle" className={labelClass}>Job Title *</label>
        <div className="relative">
          <Briefcase className="absolute left-3 top-3.5 h-4 w-4 text-text-muted" />
          <input type="text" id="jobTitle" name="jobTitle" required value={values.jobTitle} onChange={onChange}
            className={`${inputClass} pl-9 pr-3`} placeholder="e.g. Marketing Manager" />
        </div>
      </div>

      <div>
        <label htmlFor="department" className={labelClass}>Department *</label>
        <div className="relative">
          <Building className="absolute left-3 top-3.5 h-4 w-4 text-text-muted" />
          <select id="department" name="department" required value={values.department} onChange={onChange}
            className={`${inputClass} pl-9 pr-3`}>
            <option value="">Select your department...</option>
            {departments.map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>Mobile Number (optional)</label>
        <div className="relative">
          <Phone className="absolute left-3 top-3.5 h-4 w-4 text-text-muted" />
          <input type="tel" id="phone" name="phone" value={values.phone} onChange={onChange}
            aria-invalid={phoneError ? true : undefined}
            aria-describedby={phoneError ? 'phone-error' : undefined}
            className={`${inputClass} pl-9 pr-3 ${phoneError ? 'border-red-500 bg-red-50' : ''}`}
            placeholder="(555) 555-5555" />
        </div>
        {phoneError && (
          <p id="phone-error" role="alert" className="text-red-700 text-sm mt-2 font-medium">{phoneError}</p>
        )}
      </div>
    </>
  );
}
