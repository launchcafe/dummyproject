import Nav from './Nav';

const items = [
  { label: 'Overview', href: '/overview' },
  { label: 'Onboarding', href: '/onboarding' },
  { label: 'Team', href: '/team' },
  { label: 'Billing', href: '/billing' },
];

export default {
  title: 'Components/Nav',
  component: Nav,
};

export const Default = {
  args: {
    items,
    activeHref: '/onboarding',
  },
};
