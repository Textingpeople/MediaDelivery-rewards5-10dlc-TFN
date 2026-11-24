import Link from 'next/link';
import { CheckCircle, Heart, Zap } from 'lucide-react';
import { BRAND, DISCLAIMER_LINE } from '@/lib/siteConfig';

const benefits = [
  {
    icon: <CheckCircle className="w-7 h-7 text-accent-ink" />,
    title: 'Instant Recognition',
    desc: 'Get recognized the moment you do something great — right when it happens, in front of your whole team.',
  },
  {
    icon: <Heart className="w-7 h-7 text-accent-ink" />,
    title: 'Team Connection',
    desc: 'Celebrate wins together. Peer recognition builds stronger bonds and a more supportive culture.',
  },
  {
    icon: <Zap className="w-7 h-7 text-accent-ink" />,
    title: 'Shared Celebrations',
    desc: 'Birthdays, anniversaries and team milestones are celebrated by the whole team on one feed.',
  },
];

export default function BenefitsCtaSection() {
  return (
    <>
      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary">Why Teams Love {BRAND}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">{b.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-2">{b.title}</h3>
                <p className="text-text-muted">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-primary rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build a Culture People Love?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Bring continuous recognition to your team. Request access today.
            </p>
            <Link
              href="/signup"
              className="inline-block px-8 py-4 bg-accent text-accent-ink text-lg font-semibold rounded-lg hover:bg-accent-hover transition-colors shadow-lg"
            >
              Request Access
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <p className="text-sm text-text-muted text-center">{DISCLAIMER_LINE}</p>
      </section>
    </>
  );
}
