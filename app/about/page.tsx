import Link from 'next/link';
import { MessageCircle, Flag, Cake, KeyRound } from 'lucide-react';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import ContactBlock from '@/components/ContactBlock';
import { BRAND, LEGAL_NAME, DISCLAIMER_LINE, linkClass, noteBoxClass } from '@/lib/siteConfig';

const activities = [
  {
    icon: <MessageCircle className="w-6 h-6 text-accent-ink" />,
    title: 'Send and receive shout-outs',
    desc: 'Teammates and managers recognize each other for project wins and everyday help, right when it happens.',
  },
  {
    icon: <Flag className="w-6 h-6 text-accent-ink" />,
    title: 'Celebrate team milestones',
    desc: 'Shared wins show up on the team feed so everyone can cheer them on together.',
  },
  {
    icon: <Cake className="w-6 h-6 text-accent-ink" />,
    title: 'Mark birthdays and anniversaries',
    desc: 'The whole team can celebrate birthdays and work anniversaries on one shared feed.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav active="about" />

      <section className="bg-bg-light border-b border-border py-20">
        <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-primary mb-6">About {BRAND}</h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            {BRAND} is an employer-provided employee recognition platform for continuous, everyday team recognition, so the whole team rises together.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-primary mb-4">Who We Are</h2>
        <p className="text-lg text-text-muted mb-4">
          {BRAND} is an employee recognition platform operated by {LEGAL_NAME}, a Wyoming limited liability company. Teammates and managers celebrate wins big and small as they happen on a shared team feed. Admins see simple participation and recognition trends by department and location.
        </p>
        <p className="text-lg text-text-muted">
          {BRAND} is about recognition itself: words, shout-outs and shared celebrations. It does not score individual performance.
        </p>
      </section>

      <section className="bg-bg-light border-y border-border py-16">
        <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-10">What Employees Do on {BRAND}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((a) => (
              <div key={a.title} className="bg-white border border-border rounded-xl p-6 text-center">
                <div className="bg-accent w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">{a.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-2">{a.title}</h3>
                <p className="text-text-muted">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-start gap-4 mb-12">
          <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
            <KeyRound className="w-6 h-6 text-accent-ink" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">How Access Works</h2>
            <p className="text-lg text-text-muted">
              Your employer provides a Company ID. Employees then sign up at{' '}
              <Link href="/signup" className={linkClass}>{BRAND} sign-up</Link> using that Company ID.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-primary mb-4">Text Messages (SMS)</h2>
        <p className="text-lg text-text-muted mb-4">
          Recognition and account texts are optional. You can opt in at signup, and you can reply STOP to opt out or HELP for help at any time. See our{' '}
          <Link href="/sms-policy" className={linkClass}>SMS Policy</Link> for details.
        </p>

        <div className={`${noteBoxClass} mt-10`}>{DISCLAIMER_LINE}</div>

        <h2 className="text-3xl font-bold text-primary mt-12 mb-4">Company Information</h2>
        <ContactBlock />
      </section>

      <SiteFooter />
    </div>
  );
}
