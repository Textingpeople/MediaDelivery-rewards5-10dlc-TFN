import { SAMPLE_MESSAGES, SAMPLE_MESSAGES_INTRO, h2Class, h3Class, pClass } from '@/lib/siteConfig';

export default function SampleMessages({
  level,
  numbering,
}: {
  level: 'h2' | 'h3';
  numbering?: string;
}) {
  const Heading = level;
  const headingClass = level === 'h2' ? h2Class : h3Class;
  const account = SAMPLE_MESSAGES.filter((m) => m.type === 'account');
  const promotional = SAMPLE_MESSAGES.filter((m) => m.type === 'promotional');
  return (
    <div>
      <Heading className={headingClass}>
        {numbering ? `${numbering} ` : ''}Sample Messages
      </Heading>
      <p className={pClass}>{SAMPLE_MESSAGES_INTRO}</p>
      <div className="bg-bg-light border border-border rounded-lg p-6 mb-6 space-y-6">
        <div>
          <h4 className="font-semibold text-primary mb-2">Account Notifications</h4>
          <ol start={1} className="list-decimal pl-6 text-text-body space-y-2">
            {account.map((m) => (
              <li key={m.text}>{m.text}</li>
            ))}
          </ol>
        </div>
        <div>
          <h4 className="font-semibold text-primary mb-2">Promotional</h4>
          <ol start={account.length + 1} className="list-decimal pl-6 text-text-body space-y-2">
            {promotional.map((m) => (
              <li key={m.text}>{m.text}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
