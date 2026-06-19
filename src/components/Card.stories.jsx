import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};

export const Default = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Account details</h3>
        <p className="mt-2 text-sm text-gray-600">
          This card groups related content with consistent padding and elevation.
        </p>
      </div>
    ),
  },
};

export const CustomWidth = {
  args: {
    className: 'max-w-sm',
    children: <p className="text-sm text-gray-600">A narrower card using className.</p>,
  },
};
