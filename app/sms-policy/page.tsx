import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import LegalHeader from '@/components/LegalHeader';
import SampleMessages from '@/components/SampleMessages';
import ContactBlock from '@/components/ContactBlock';
import {
  BRAND,
  LEGAL_NAME,
  SUPPORT_EMAIL,
  PHONE_DISPLAY,
  NO_SHARING_SENTENCE,
  NO_SENSITIVE_TEXTS_SENTENCE,
  linkClass,
  h2Class,
  pClass,
  ulClass,
} from '@/lib/siteConfig';

export default function SmsPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <LegalHeader title="SMS Policy" />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className={h2Class}>Program</h2>
        <p className={pClass}>
          Program name: {BRAND}. The {BRAND} text messaging program is operated by {LEGAL_NAME}. This page describes how and when we use SMS (text messaging) to communicate with users of the {BRAND} employee recognition platform.
        </p>

        <h2 className={h2Class}>How You Opt In</h2>
        <p className={pClass}>
          You can opt in to texts in step 2 of the {BRAND} sign-up form. There are two separate optional checkboxes: one for Transactional Account Notification messages and one for Promotional Marketing messages. Both are unchecked by default. A mobile number is required only if you check one of them. Opting in is optional, and consent is not a condition of purchasing any products or services.
        </p>

        <h2 className={h2Class}>Message Types</h2>
        <ul className={ulClass}>
          <li><strong>Account notifications:</strong> recognition alerts and shout-outs, team milestone and anniversary notices, and account updates.</li>
          <li><strong>Promotional:</strong> new features and team recaps, sent only if you opt in to promotional texts.</li>
        </ul>
        <p className={pClass}>{NO_SENSITIVE_TEXTS_SENTENCE}</p>

        <SampleMessages level="h2" />

        <h2 className={h2Class}>Message Frequency</h2>
        <p className={pClass}>Message frequency varies.</p>

        <h2 className={h2Class}>Message &amp; Data Rates</h2>
        <p className={pClass}>Message and data rates may apply, depending on your mobile carrier and plan.</p>

        <h2 className={h2Class}>Opt Out (STOP)</h2>
        <p className={pClass}>
          You can opt out at any time by replying <strong>STOP</strong> to any message. You will receive one confirmation message, and then you will no longer receive texts from {BRAND}.
        </p>

        <h2 className={h2Class}>Help (HELP)</h2>
        <p className={pClass}>
          Reply <strong>HELP</strong> to any message for help, or contact us at{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className={linkClass}>{SUPPORT_EMAIL}</a> or {PHONE_DISPLAY}.
        </p>
        <ContactBlock />

        <h2 className={h2Class}>Carriers</h2>
        <p className={pClass}>Carriers are not liable for delayed or undelivered messages.</p>

        <h2 className={h2Class}>Your Mobile Information</h2>
        <p className={pClass}><strong>{NO_SHARING_SENTENCE}</strong></p>

        <h2 className={h2Class}>Related Policies</h2>
        <p className={pClass}>
          Please also read our <Link href="/terms" className={linkClass}>Terms of Service</Link> and{' '}
          <Link href="/privacy" className={linkClass}>Privacy Policy</Link>.
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
