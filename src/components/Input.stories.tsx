import type { Meta, StoryObj } from '@storybook/react';
import { Mail, Search, Eye } from 'lucide-react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: 'Enter value…',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <Mail size={16} />,
    placeholder: 'you@example.com',
    type: 'email',
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: <Eye size={16} />,
    placeholder: 'Password',
    type: 'password',
  },
};

export const WithIcons: Story = {
  args: {
    leftIcon: <Search size={16} />,
    placeholder: 'Search transactions…',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'you@example.com',
    error: 'Please enter a valid email address.',
    defaultValue: 'not-an-email',
  },
};

export const Hint: Story = {
  args: {
    placeholder: 'Username',
    hint: 'Only letters, numbers, and underscores.',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
    defaultValue: 'Cannot edit this',
  },
};
