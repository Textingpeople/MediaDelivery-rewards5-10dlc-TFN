import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import LegalHeader from '@/components/LegalHeader';
import SampleMessages from '@/components/SampleMessages';
import ContactBlock from '@/components/ContactBlock';
import {
  BRAND,
  DOMAIN,
  SUPPORT_EMAIL,
  PRIVACY_EMAIL,
  PHONE_DISPLAY,
  ADDRESS_ONE_LINE,
  LEGAL_OPENING,
  NO_SHARING_SENTENCE,
  NO_SENSITIVE_TEXTS_SENTENCE,
  linkClass,
  h2Class,
  pClass,
  p4Class,
  ulClass,
} from '@/lib/siteConfig';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <LegalHeader title="Privacy Policy" />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className={h2Class}>1. Introduction</h2>
        <p className={pClass}>
          {LEGAL_OPENING} respects your privacy. This Privacy Policy explains how we collect, use and protect information when you use the {BRAND} employee recognition platform and our website at {DOMAIN}.
        </p>

        <h2 className={h2Class}>2. Information We Collect</h2>
        <p className={p4Class}>When you request access to your employer&apos;s program and use the platform, we collect:</p>
        <ul className={ulClass}>
          <li>Your name and work email</li>
          <li>Your job title and department</li>
          <li>Your mobile number, only if you choose to provide it</li>
          <li>Recognition activity, such as shout-outs you send and receive and team celebrations you take part in</li>
          <li>Your text messaging preferences</li>
        </ul>

        <h2 className={h2Class}>3. How We Use Information</h2>
        <ul className={ulClass}>
          <li>To provide and maintain the recognition platform</li>
          <li>To show recognition and celebrations on your team feed</li>
          <li>To show administrators simple participation and recognition trends by department and location</li>
          <li>To manage your account and send service communications</li>
          <li>To send text messages you have opted in to receive</li>
          <li>To prevent fraud and abuse and to comply with the law</li>
        </ul>

        <h2 className={h2Class}>4. SMS Communications</h2>
        <p className={p4Class}>
          We send text messages only to users who opt in. You choose each type separately: Account Notifications (recognition alerts, team milestone and anniversary notices, account updates) and Promotional messages (new features and team recaps).
        </p>
        <p className={p4Class}>{NO_SENSITIVE_TEXTS_SENTENCE}</p>
        <p className={p4Class}>
          Message and data rates may apply. Message frequency varies. Reply <strong>STOP</strong> to opt out at any time. Reply <strong>HELP</strong> for help, or contact us at{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className={linkClass}>{SUPPORT_EMAIL}</a>. See our{' '}
          <Link href="/sms-policy" className={linkClass}>SMS Policy</Link>.
        </p>
        <SampleMessages level="h3" />

        <h2 className={h2Class}>5. Mobile Information</h2>
        <p className={pClass}><strong>{NO_SHARING_SENTENCE}</strong></p>

        <h2 className={h2Class}>6. Data Security</h2>
        <p className={pClass}>
          We use reasonable technical and organizational safeguards, including encryption in transit and access controls, to protect your information. No system is completely secure.
        </p>

        <h2 className={h2Class}>7. Retention</h2>
        <p className={pClass}>
          We keep information only as long as needed for the purposes in this policy, while your employer&apos;s program is active, and for a reasonable period afterward for legal and business purposes.
        </p>

        <h2 className={h2Class}>8. Your Choices</h2>
        <p className={pClass}>
          You may ask to access, correct or delete your information, and you may opt out of text messages at any time by replying STOP. To make a request, email{' '}
          <a href={`mailto:${PRIVACY_EMAIL}`} className={linkClass}>{PRIVACY_EMAIL}</a>.
        </p>

        <h2 className={h2Class}>9. Children</h2>
        <p className={pClass}>
          {BRAND} is not intended for anyone under 18, and we do not knowingly collect information from children.
        </p>

        <h2 className={h2Class}>10. Changes to This Policy</h2>
        <p className={pClass}>
          We may update this policy from time to time. We will post the new version here and update the &quot;Last Updated&quot; date.
        </p>

        <h2 className={h2Class}>11. Contact Us</h2>
        <p className={p4Class}>
          Questions about this policy? Email <a href={`mailto:${PRIVACY_EMAIL}`} className={linkClass}>{PRIVACY_EMAIL}</a>, write to {ADDRESS_ONE_LINE}, or call {PHONE_DISPLAY}.
        </p>
        <ContactBlock variant="privacy" />
      </section>

      <SiteFooter />
    </div>
  );
}
