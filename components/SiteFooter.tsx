import Link from 'next/link';
import {
  BRAND,
  LEGAL_NAME,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  PHONE_DISPLAY,
  PHONE_TEL,
  SUPPORT_EMAIL,
  FOOTER_TAGLINE,
  DISCLAIMER_LINE,
  COPYRIGHT_LINE,
} from '@/lib/siteConfig';

const footerLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/sms-policy', label: 'SMS Policy' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteFooter() {
  return (
    <footer className="bg-primary text-on-dark py-12">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-extrabold text-on-dark tracking-tight">{BRAND}</span>
            <p className="text-on-dark-muted mt-3 max-w-sm">{FOOTER_TAGLINE}</p>
          </div>
          <ul className="space-y-2">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-on-dark-muted hover:text-accent underline-offset-4 hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-on-dark-muted text-sm space-y-1">
            <p className="font-semibold text-on-dark">{LEGAL_NAME}</p>
            <p>{ADDRESS_LINE_1}</p>
            <p>{ADDRESS_LINE_2}</p>
            <p>
              <a href={PHONE_TEL} className="hover:text-accent underline underline-offset-4">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-accent underline underline-offset-4">
                {SUPPORT_EMAIL}
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-white/15 mt-8 pt-8 text-on-dark-muted text-sm space-y-3">
          <p>{DISCLAIMER_LINE}</p>
          <p>{COPYRIGHT_LINE}</p>
        </div>
      </div>
    </footer>
  );
}
