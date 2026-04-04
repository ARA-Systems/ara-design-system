import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const paymentOptions = [
  { value: '', label: 'Select payment method…' },
  { value: 'credit_card', label: 'Credit Card' },
  { value: 'debit_card', label: 'Debit Card' },
  { value: 'bank_transfer', label: 'Bank Transfer' },
  { value: 'pix', label: 'Pix' },
  { value: 'boleto', label: 'Boleto' },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  args: {
    options: paymentOptions,
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    error: 'Please select a payment method.',
  },
};

export const Hint: Story = {
  args: {
    hint: 'Choose the payment method you used for this transaction.',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
