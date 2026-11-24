import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import LegalHeader from '@/components/LegalHeader';
import SampleMessages from '@/components/SampleMessages';
import ContactBlock from '@/components/ContactBlock';
import {
  BRAND,
  SUPPORT_EMAIL,
  PHONE_DISPLAY,
  LEGAL_OPENING,
  DISCLAIMER_LINE,
  NO_SHARING_SENTENCE,
  linkClass,
  h2Class,
  h3Class,
  pClass,
  p4Class,
  ulClass,
  noteBoxClass,
} from '@/lib/siteConfig';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <LegalHeader title="Terms of Service" />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className={h2Class}>1. Acceptance of Terms</h2>
        <p className={pClass}>
          {LEGAL_OPENING} provides the {BRAND} employee recognition platform (the &quot;Service&quot;). By accessing or using the Service, you agree to these Terms of Service (&quot;Terms&quot;). If you do not agree, do not use the Service.
        </p>

        <h2 className={h2Class}>2. Description of Service</h2>
        <p className={p4Class}>
          {BRAND} is an employer-provided platform for continuous, everyday team recognition. The Service includes:
        </p>
        <ul className={ulClass}>
          <li>Peer and manager shout-outs on a shared team feed</li>
          <li>Team milestone, birthday and work anniversary celebrations, including team celebration cards</li>
          <li>Team groups organized by department, location and team</li>
          <li>Simple participation and recognition trends by department and location for administrators</li>
          <li>Optional text message and email notifications</li>
        </ul>

        <h2 className={h2Class}>3. Eligibility</h2>
        <p className={pClass}>
          The Service is available to employees of participating employers. You must request access with a Company ID provided by your employer, supply accurate information, and be at least 18 years old.
        </p>

        <h2 className={h2Class}>4. Recognition Disclaimer</h2>
        <div className={noteBoxClass}>{DISCLAIMER_LINE}</div>

        <h2 className={h2Class}>5. Acceptable Use</h2>
        <p className={p4Class}>You agree not to use the Service to:</p>
        <ul className={ulClass}>
          <li>Violate any law or the rights of others</li>
          <li>Post recognition that is harassing, discriminatory, defamatory or otherwise inappropriate</li>
          <li>Send spam or unsolicited messages, or engage in fraud</li>
          <li>Transmit malware or interfere with the Service</li>
          <li>Attempt to gain unauthorized access to the Service or other accounts</li>
          <li>Impersonate any person or misrepresent your affiliation</li>
        </ul>

        <h2 className={h2Class}>6. SMS Program</h2>
        <h3 className={h3Class}>6.1 Message Types</h3>
        <p className={p4Class}>If you opt in, you choose each type of message separately:</p>
        <ul className={ulClass}>
          <li><strong>Account notifications:</strong> recognition alerts, team milestone and anniversary notices, and account updates.</li>
          <li><strong>Promotional:</strong> new features and team recaps.</li>
        </ul>
        <SampleMessages level="h3" numbering="6.2" />
        <h3 className={h3Class}>6.3 STOP, HELP, Frequency and Rates</h3>
        <p className={pClass}>
          Reply <strong>STOP</strong> at any time to opt out. Reply <strong>HELP</strong> for help, or contact{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className={linkClass}>{SUPPORT_EMAIL}</a> or {PHONE_DISPLAY}. Message frequency varies. Message and data rates may apply. Carriers are not liable for delayed or undelivered messages.
        </p>
        <h3 className={h3Class}>6.4 Consent</h3>
        <p className={pClass}>
          Opting in is optional. Consent is not a condition of purchasing any products or services. See our{' '}
          <Link href="/sms-policy" className={linkClass}>SMS Policy</Link> for details.
        </p>
        <h3 className={h3Class}>6.5 Mobile Information</h3>
        <p className={pClass}><strong>{NO_SHARING_SENTENCE}</strong></p>

        <h2 className={h2Class}>7. Disclaimers and Limitation of Liability</h2>
        <p className={pClass}>
          THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY LAW, MEDIA DELIVERY SOLUTIONS LLC IS NOT LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF DATA, USE OR GOODWILL.
        </p>

        <h2 className={h2Class}>8. Privacy</h2>
        <p className={pClass}>
          Your use of the Service is also governed by our <Link href="/privacy" className={linkClass}>Privacy Policy</Link>.
        </p>

        <h2 className={h2Class}>9. Governing Law</h2>
        <p className={pClass}>
          These Terms are governed by the laws of the State of New Jersey, without regard to its conflict of law provisions.
        </p>

        <h2 className={h2Class}>10. Contact</h2>
        <ContactBlock />
      </section>

      <SiteFooter />
    </div>
  );
}
