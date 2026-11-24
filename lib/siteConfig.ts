export const BRAND = 'RewardRise';
export const LEGAL_NAME = 'Media Delivery Solutions LLC';
export const DOMAIN = 'getrewardrise.com';
export const WEBSITE_URL = 'https://getrewardrise.com';
export const SUPPORT_EMAIL = 'support@getrewardrise.com';
export const PRIVACY_EMAIL = 'privacy@getrewardrise.com';
export const PHONE_DISPLAY = '(908) 399-8307';
export const PHONE_TEL = 'tel:+19083998307';
export const ADDRESS_LINE_1 = '9 Johnston Dr';
export const ADDRESS_LINE_2 = 'Bloomsbury, NJ 08804';
export const ADDRESS_COUNTRY = 'United States';
export const ADDRESS_ONE_LINE = '9 Johnston Dr, Bloomsbury, NJ 08804, United States';

export const DEMO_COMPANY_ID = '1234';

export const LAST_UPDATED = 'November 24, 2026';

export const FOOTER_TAGLINE = 'RewardRise — continuous recognition that lifts every team.';
export const COPYRIGHT_LINE =
  '© 2026 Media Delivery Solutions LLC. RewardRise is operated by Media Delivery Solutions LLC.';

export const LEGAL_OPENING =
  'Media Delivery Solutions LLC, a Wyoming limited liability company, d/b/a RewardRise ("we," "our," or "us")';

export const DISCLAIMER_LINE =
  'RewardRise is an employee recognition platform. Recognition has no cash value and is not connected to pay, bonuses or performance reviews.';

export const NO_SHARING_SENTENCE =
  'No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.';

export const NO_SENSITIVE_TEXTS_SENTENCE =
  'Texts never include performance reviews, pay information, account numbers or SSNs.';

export const SAMPLE_MESSAGES_INTRO =
  'The following are examples of the text messages RewardRise may send:';

export type SampleMessageType = 'account' | 'promotional';

export const SAMPLE_MESSAGES: { type: SampleMessageType; text: string }[] = [
  {
    type: 'account',
    text: "RewardRise: You're signed up for recognition alerts from your employer's recognition program. Msg frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out.",
  },
  {
    type: 'account',
    text: 'RewardRise: A teammate gave you a shout-out for helping close out the launch. See it on your team feed at getrewardrise.com. Reply STOP to opt out.',
  },
  {
    type: 'account',
    text: 'RewardRise: Your team hit a milestone: 100 shout-outs shared this quarter! Celebrate together at getrewardrise.com. Reply STOP to opt out.',
  },
  {
    type: 'promotional',
    text: 'RewardRise: New: team celebration cards everyone can sign for birthdays and anniversaries. Try it at getrewardrise.com. Reply STOP to opt out.',
  },
  {
    type: 'promotional',
    text: "RewardRise: New: a monthly team wins recap of your team's top moments. See it at getrewardrise.com. Reply STOP to opt out.",
  },
];

// Shared style strings (Tailwind classes) for the legal pages
export const linkClass =
  'text-primary font-medium underline decoration-accent decoration-2 underline-offset-2 hover:text-accent-hover';
export const h2Class = 'text-2xl font-bold text-primary mt-8 mb-4';
export const h3Class = 'text-xl font-semibold text-primary mt-6 mb-3';
export const pClass = 'text-text-body mb-6';
export const p4Class = 'text-text-body mb-4';
export const ulClass = 'list-disc pl-6 text-text-body mb-6 space-y-2';
export const infoBoxClass = 'bg-bg-light border border-border rounded-lg p-6 mb-8';
export const noteBoxClass = 'bg-accent-soft border border-accent rounded-lg p-5 mb-6 text-primary';
