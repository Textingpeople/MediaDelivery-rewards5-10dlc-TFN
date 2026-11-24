import { Mail, Phone, MapPin } from 'lucide-react';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import ContactForm from '@/components/ContactForm';
import {
  BRAND,
  LEGAL_NAME,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  ADDRESS_COUNTRY,
  PHONE_DISPLAY,
  PHONE_TEL,
  SUPPORT_EMAIL,
  NO_SHARING_SENTENCE,
} from '@/lib/siteConfig';

const contactLinkClass =
  'text-primary underline decoration-accent decoration-2 underline-offset-2 hover:text-accent-hover text-lg';
const iconWrapClass = 'flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-5';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav active="contact" />

      <section className="bg-bg-light border-b border-border py-16">
        <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-primary mb-4">Contact Us</h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Have a question about {BRAND}? Reach out and our team will get back to you.
          </p>
        </div>
      </section>

      <section className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className={iconWrapClass}><MapPin className="w-6 h-6 text-accent-ink" /></div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">Company</h3>
                  <p className="text-text-muted text-lg leading-relaxed">
                    {LEGAL_NAME}<br />
                    {ADDRESS_LINE_1}<br />
                    {ADDRESS_LINE_2}<br />
                    {ADDRESS_COUNTRY}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className={iconWrapClass}><Phone className="w-6 h-6 text-accent-ink" /></div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">Phone</h3>
                  <a href={PHONE_TEL} className={contactLinkClass}>{PHONE_DISPLAY}</a>
                </div>
              </div>
              <div className="flex items-start">
                <div className={iconWrapClass}><Mail className="w-6 h-6 text-accent-ink" /></div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">Email</h3>
                  <a href={`mailto:${SUPPORT_EMAIL}`} className={contactLinkClass}>{SUPPORT_EMAIL}</a>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-accent-soft border border-accent rounded-lg p-5">
              <h3 className="text-lg font-semibold text-primary mb-2">Text Messaging Privacy</h3>
              <p className="text-primary text-sm leading-relaxed">{NO_SHARING_SENTENCE}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-border">
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
