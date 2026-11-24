import Link from 'next/link';
import { BRAND } from '@/lib/siteConfig';
import { inlineLinkClass, checkboxClass } from './styles';

const TRANSACTIONAL_TEXT =
  'I agree to receive Transactional Account Notification SMS messages from RewardRise, including recognition alerts, team milestones and account updates. Reply STOP to opt out, reply HELP for help. Message and data rates may apply. Message frequency varies. Opting in is optional and not required to submit this form. Consent is not a condition of purchasing any products or services. See our';

const PROMOTIONAL_TEXT =
  'I agree to receive Promotional Marketing SMS messages from RewardRise, including new features and team recaps. Reply STOP to opt out, reply HELP for help. Message and data rates may apply. Message frequency varies. Opting in is optional and not required to submit this form. Consent is not a condition of purchasing any products or services. See our';

type Props = {
  smsTransactional: boolean;
  smsPromotional: boolean;
  termsAccepted: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function TermsPrivacyLinks() {
  return (
    <>
      <Link href="/terms" className={inlineLinkClass}>Terms</Link>{' '}
      and{' '}
      <Link href="/privacy" className={inlineLinkClass}>Privacy Policy</Link>.
    </>
  );
}

export default function ConsentFields({ smsTransactional, smsPromotional, termsAccepted, onChange }: Props) {
  return (
    <>
      {/* What we will text */}
      <div className="bg-accent-soft border border-accent rounded-lg p-5">
        <h3 className="text-base font-semibold text-primary mb-2">What {BRAND} will text you</h3>
        <ul className="list-disc pl-5 text-sm text-primary space-y-1">
          <li>Recognition alerts and shout-outs</li>
          <li>Team milestone and anniversary notices</li>
          <li>Account updates</li>
          <li>Only if you opt in to promotional texts: new features and team recaps</li>
        </ul>
      </div>

      {/* SMS Opt-in: Transactional (optional, unchecked by default) */}
      <div className="bg-bg-light border border-border rounded-lg p-5">
        <div className="flex items-start">
          <input type="checkbox" id="smsTransactional" name="smsTransactional" checked={smsTransactional}
            onChange={onChange} className={checkboxClass} />
          <label htmlFor="smsTransactional" className="ml-3 text-sm leading-relaxed text-text-body">
            {TRANSACTIONAL_TEXT} <TermsPrivacyLinks />
          </label>
        </div>
      </div>

      {/* SMS Opt-in: Promotional (optional, unchecked by default, separate) */}
      <div className="bg-bg-light border border-border rounded-lg p-5">
        <div className="flex items-start">
          <input type="checkbox" id="smsPromotional" name="smsPromotional" checked={smsPromotional}
            onChange={onChange} className={checkboxClass} />
          <label htmlFor="smsPromotional" className="ml-3 text-sm leading-relaxed text-text-body">
            {PROMOTIONAL_TEXT} <TermsPrivacyLinks />
          </label>
        </div>
      </div>

      {/* Terms (required) */}
      <div className="bg-bg-light border border-border rounded-lg p-5">
        <div className="flex items-start">
          <input type="checkbox" id="termsAccepted" name="termsAccepted" required checked={termsAccepted}
            onChange={onChange} className={checkboxClass} />
          <label htmlFor="termsAccepted" className="ml-3 text-sm leading-relaxed text-text-body">
            I agree to the{' '}
            <Link href="/terms" className={inlineLinkClass}>Terms of Service</Link>{' '}
            and{' '}
            <Link href="/privacy" className={inlineLinkClass}>Privacy Policy</Link>.
          </label>
        </div>
      </div>
    </>
  );
}
