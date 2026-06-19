import Badge from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    tone: { control: 'select', options: ['neutral', 'success', 'warning', 'danger'] },
  },
};

export const Neutral = { args: { children: 'Draft', tone: 'neutral' } };
export const Success = { args: { children: 'Active', tone: 'success' } };
export const Warning = { args: { children: 'Pending', tone: 'warning' } };
export const Danger = { args: { children: 'Failed', tone: 'danger' } };
