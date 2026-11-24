import { LAST_UPDATED } from '@/lib/siteConfig';

export default function LegalHeader({ title, showDate = true }: { title: string; showDate?: boolean }) {
  return (
    <section className="bg-bg-light border-b border-border py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-primary mb-4">{title}</h1>
        {showDate && <p className="text-lg text-text-muted">Last Updated: {LAST_UPDATED}</p>}
      </div>
    </section>
  );
}
