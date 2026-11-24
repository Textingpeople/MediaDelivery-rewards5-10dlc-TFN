import Link from 'next/link';
import { Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center">
        <div className="inline-flex items-center bg-accent text-accent-ink px-4 py-2 rounded-full text-sm font-semibold mb-8">
          <Star className="w-4 h-4 mr-2" />
          Rise Together Through Recognition
        </div>
        <h1 className="text-5xl font-extrabold text-primary sm:text-6xl md:text-7xl leading-tight">
          Recognition That
          <span className="block text-accent [-webkit-text-stroke:2px_#1A1A1A]">Lifts Everyone</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-text-muted">
          RewardRise creates a culture of continuous recognition where every teammate can rise. Celebrate wins big and small, recognize everyday effort, and bring your team closer together.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/signup"
            className="px-8 py-4 bg-accent text-accent-ink text-lg font-semibold rounded-lg hover:bg-accent-hover transition-colors shadow-md"
          >
            Request Access
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 bg-white text-primary text-lg font-semibold rounded-lg hover:bg-bg-light transition-colors border-2 border-primary"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
