import { MessageCircle, Flag, Cake, PartyPopper } from 'lucide-react';

const steps = [
  {
    title: 'Set Up Your Program',
    desc: 'Add your teams, choose recognition categories and set up birthday and anniversary celebrations in minutes.',
  },
  {
    title: 'Recognize Your Team',
    desc: 'Teammates and managers send shout-outs for project wins, helping hands, team milestones, birthdays and more.',
  },
  {
    title: 'Watch Culture Thrive',
    desc: 'See recognition spread across your teams and celebrate the moments that bring everyone together.',
  },
];

const iconClass = 'w-8 h-8 text-accent mr-3 flex-shrink-0';

const feedItems = [
  { icon: <MessageCircle className={iconClass} />, label: 'Shout-out', text: 'Helped close out the product launch' },
  { icon: <Flag className={iconClass} />, label: 'Team Milestone', text: '100 shout-outs shared this quarter' },
  { icon: <PartyPopper className={iconClass} />, label: 'Work Anniversary', text: 'Celebrating 2 years with the team' },
  { icon: <Cake className={iconClass} />, label: 'Birthday', text: 'The team signed a celebration card' },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary">How RewardRise Works</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            {steps.map((s, i) => (
              <div key={s.title} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-accent-ink text-lg mr-6">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{s.title}</h3>
                  <p className="text-lg text-text-muted leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary rounded-2xl p-10 text-on-dark">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-6">Sample Team Feed</p>
            <div className="space-y-6">
              {feedItems.map((item) => (
                <div key={item.label} className="flex items-center bg-white/10 rounded-xl p-4">
                  {item.icon}
                  <p>
                    <span className="font-semibold">{item.label}</span>
                    <span className="text-white/70"> — {item.text}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
