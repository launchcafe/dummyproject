import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
  },
};

export const Primary = {
  args: {
    children: 'Continue',
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    children: 'Cancel',
    variant: 'secondary',
  },
};

export const Disabled = {
  args: {
    children: 'Continue',
    variant: 'primary',
    disabled: true,
  },
};
