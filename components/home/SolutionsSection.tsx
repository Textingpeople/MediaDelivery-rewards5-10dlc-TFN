const solutions = [
  {
    title: 'Small & Mid-Size Teams',
    popular: false,
    items: ['Easy setup', 'Peer-to-peer recognition', 'Birthday & work anniversary celebrations'],
  },
  {
    title: 'Corporate & Enterprise',
    popular: true,
    items: ['Multi-department support', 'Manager recognition', 'Participation insights'],
  },
  {
    title: 'Remote & Hybrid Teams',
    popular: false,
    items: ['Virtual shout-outs & badges', 'SMS & email notifications', 'Team celebration cards'],
  },
];

export default function SolutionsSection() {
  return (
    <section className="bg-bg-light py-24">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary">Built for Every Workplace</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((s) => (
            <div
              key={s.title}
              className={
                s.popular
                  ? 'border-2 border-accent rounded-xl p-8 bg-accent-soft'
                  : 'border-2 border-border rounded-xl p-8 bg-white hover:border-accent transition-colors'
              }
            >
              {s.popular && (
                <div className="inline-block bg-accent text-accent-ink text-xs font-bold px-3 py-1 rounded-full mb-4">MOST POPULAR</div>
              )}
              <h3 className="text-xl font-bold text-primary mb-4">{s.title}</h3>
              <ul className="space-y-2 text-text-muted">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
