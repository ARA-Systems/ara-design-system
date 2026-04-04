import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  args: {
    placeholder: 'Enter your message…',
    rows: 4,
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    error: 'This field is required.',
    defaultValue: '',
  },
};

export const Hint: Story = {
  args: {
    hint: 'Maximum 500 characters.',
    placeholder: 'Describe your transaction…',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'This field cannot be edited.',
  },
};
