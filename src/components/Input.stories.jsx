import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Default = {
  args: {
    label: 'Full name',
    placeholder: 'Jane Doe',
  },
};

export const WithError = {
  args: {
    label: 'Email',
    placeholder: 'jane@example.com',
    error: 'Please enter a valid email address.',
  },
};
