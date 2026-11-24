import Link from 'next/link';
import { TrendingUp } from 'lucide-react';
import { BRAND } from '@/lib/siteConfig';

export type NavKey = 'home' | 'about' | 'contact';

const navLinks: { key: NavKey; href: string; label: string }[] = [
  { key: 'home', href: '/', label: 'Home' },
  { key: 'about', href: '/about', label: 'About' },
  { key: 'contact', href: '/contact', label: 'Contact' },
];

function navLinkClass(isActive: boolean) {
  return `px-3 py-2 text-sm font-medium whitespace-nowrap hover:text-white hover:underline decoration-accent decoration-2 underline-offset-8 ${
    isActive ? 'text-white underline font-semibold' : 'text-on-dark-muted'
  }`;
}

export default function SiteNav({ active }: { active?: NavKey }) {
  return (
    <nav className="bg-primary border-b border-white/10">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <span className="flex w-9 h-9 bg-accent rounded-lg items-center justify-center">
              <TrendingUp className="w-5 h-5 text-accent-ink" />
            </span>
            <span className="text-xl sm:text-2xl font-extrabold text-on-dark tracking-tight">{BRAND}</span>
          </Link>
          <div className="flex items-center">
            <div className="hidden md:flex items-center mr-3">
              {navLinks.map((l) => (
                <Link key={l.key} href={l.href} className={navLinkClass(active === l.key)}>
                  {l.label}
                </Link>
              ))}
            </div>
            <Link
              href="/signup"
              className="bg-accent text-accent-ink hover:bg-accent-hover px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-colors"
            >
              Request Access
            </Link>
          </div>
        </div>
        <div className="md:hidden flex gap-2 overflow-x-auto pb-3">
          {navLinks.map((l) => (
            <Link key={l.key} href={l.href} className={navLinkClass(active === l.key)}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
