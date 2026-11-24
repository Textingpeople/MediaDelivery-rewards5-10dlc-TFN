'use client';

import { useState } from 'react';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Stepper from '@/components/signup/Stepper';
import CompanyIdStep from '@/components/signup/CompanyIdStep';
import DetailsFields from '@/components/signup/DetailsFields';
import ConsentFields from '@/components/signup/ConsentFields';
import ThankYou from '@/components/signup/ThankYou';
import { BRAND, DEMO_COMPANY_ID } from '@/lib/siteConfig';

type Step = 1 | 2 | 3;

const PHONE_ERROR = 'Enter a valid mobile number to receive texts.';
const COMPANY_ID_ERROR = "We couldn't find that Company ID. Check with your HR team.";

export default function SignupPage() {
  const [step, setStep] = useState<Step>(1);
  const [companyIdError, setCompanyIdError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [formData, setFormData] = useState({
    companyId: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    department: '',
    smsTransactional: false,
    smsPromotional: false,
    termsAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormData((prev) => ({ ...prev, [target.name]: value }));
    if (phoneError && (target.name === 'phone' || target.name.startsWith('sms'))) {
      setPhoneError('');
    }
  };

  const handleCompanyIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    setCompanyIdError('');
  };

  const handleCompanyIdSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.companyId.trim() !== DEMO_COMPANY_ID) {
      setCompanyIdError(COMPANY_ID_ERROR);
      return;
    }
    setCompanyIdError('');
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const wantsTexts = formData.smsTransactional || formData.smsPromotional;
    const digits = formData.phone.replace(/\D/g, '');

    if (wantsTexts && digits.length !== 10) {
      setPhoneError(PHONE_ERROR);
      return;
    }

    setPhoneError('');
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-bg-light">
      <SiteNav />

      <section className="bg-white border-b border-border py-12">
        <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-primary mb-3">Request Access to {BRAND}</h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Join your team&apos;s recognition program. Your employer provides your Company ID.
          </p>
        </div>
      </section>

      {step < 3 && <Stepper step={step as 1 | 2} />}

      <section className="max-w-2xl mx-auto px-4 py-10 pb-20">
        <div className="bg-white rounded-2xl shadow-xl border border-border p-8 md:p-12">
          {step === 1 && (
            <CompanyIdStep
              value={formData.companyId}
              error={companyIdError}
              onChange={handleCompanyIdChange}
              onSubmit={handleCompanyIdSubmit}
            />
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-1">Your details</h2>
                <p className="text-text-muted text-sm">Step 2 of 2 — Tell us about yourself and confirm your preferences</p>
              </div>

              <DetailsFields values={formData} phoneError={phoneError} onChange={handleChange} />
              <ConsentFields
                smsTransactional={formData.smsTransactional}
                smsPromotional={formData.smsPromotional}
                termsAccepted={formData.termsAccepted}
                onChange={handleChange}
              />

              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)}
                  className="flex-1 py-4 border-2 border-primary text-primary text-lg font-semibold rounded-lg hover:bg-bg-light transition-colors">
                  Back
                </button>
                <button type="submit"
                  className="flex-1 py-4 bg-accent hover:bg-accent-hover text-accent-ink text-lg font-semibold rounded-lg shadow-lg transition-colors">
                  Submit Request
                </button>
              </div>
            </form>
          )}

          {step === 3 && <ThankYou />}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
