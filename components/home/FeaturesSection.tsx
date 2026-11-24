import { Users, ChartColumn, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: <MessageCircle className="w-8 h-8 text-accent-ink" />,
    title: 'Team Recognition Feed',
    desc: 'Share peer and manager shout-outs on a team feed everyone can see, so wins never go unnoticed.',
  },
  {
    icon: <ChartColumn className="w-8 h-8 text-accent-ink" />,
    title: 'Participation Insights',
    desc: 'See recognition and participation trends by department and location to keep recognition flowing across every team.',
  },
  {
    icon: <Users className="w-8 h-8 text-accent-ink" />,
    title: 'Team Groups',
    desc: 'Organize recognition by department, location and team so every group can celebrate its own wins.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-bg-light py-24">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary">Everything You Need to Recognize Your Team</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-border">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center">{f.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-primary text-center mb-3">{f.title}</h3>
              <p className="text-text-muted text-center">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
