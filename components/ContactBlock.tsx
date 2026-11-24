import {
  LEGAL_NAME,
  ADDRESS_ONE_LINE,
  PHONE_DISPLAY,
  PHONE_TEL,
  SUPPORT_EMAIL,
  PRIVACY_EMAIL,
  DOMAIN,
  WEBSITE_URL,
  linkClass,
  infoBoxClass,
} from '@/lib/siteConfig';

export default function ContactBlock({ variant = 'support' }: { variant?: 'support' | 'privacy' }) {
  const email = variant === 'privacy' ? PRIVACY_EMAIL : SUPPORT_EMAIL;
  return (
    <div className={infoBoxClass}>
      <p className="text-primary font-semibold mb-2">{LEGAL_NAME}</p>
      <p className="text-text-body mb-2"><strong>Address:</strong> {ADDRESS_ONE_LINE}</p>
      <p className="text-text-body mb-2"><strong>Phone:</strong> <a href={PHONE_TEL} className={linkClass}>{PHONE_DISPLAY}</a></p>
      <p className="text-text-body mb-2"><strong>Email:</strong> <a href={`mailto:${email}`} className={linkClass}>{email}</a></p>
      <p className="text-text-body"><strong>Website:</strong> <a href={WEBSITE_URL} className={linkClass}>{DOMAIN}</a></p>
    </div>
  );
}
