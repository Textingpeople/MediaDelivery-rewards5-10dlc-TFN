import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { SUPPORT_EMAIL, PHONE_DISPLAY, PHONE_TEL } from '@/lib/siteConfig';
import { inlineLinkClass } from './styles';

export default function ThankYou() {
  return (
    <div className="text-center py-8">
      <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-12 h-12 text-accent" />
      </div>
      <h2 className="text-3xl font-bold text-primary mb-3">Request received</h2>
      <p className="text-lg text-text-muted mb-6 max-w-md mx-auto">
        Thanks! Your RewardRise access request has been sent to your employer&apos;s program admin. If you opted in to texts, you&apos;ll get a confirmation text from RewardRise. Reply STOP to opt out, HELP for help.
      </p>
      <p className="text-text-muted text-sm mb-8">
        Questions? Contact us at{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`} className={inlineLinkClass}>{SUPPORT_EMAIL}</a>{' '}
        or call <a href={PHONE_TEL} className={inlineLinkClass}>{PHONE_DISPLAY}</a>.
      </p>
      <Link href="/"
        className="inline-block px-8 py-4 bg-accent text-accent-ink text-lg font-semibold rounded-lg hover:bg-accent-hover transition-colors shadow-md">
        Back to Home
      </Link>
    </div>
  );
}
