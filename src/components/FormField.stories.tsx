import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';
import { Input } from './Input';
import { Select } from './Select';

const meta: Meta<typeof FormField> = {
  title: 'Components/FormField',
  component: FormField,
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const WithInput: Story = {
  render: () => (
    <FormField label="Email address">
      <Input placeholder="you@example.com" type="email" />
    </FormField>
  ),
};

export const Required: Story = {
  render: () => (
    <FormField label="Full name" required>
      <Input placeholder="Jane Doe" />
    </FormField>
  ),
};

export const WithHint: Story = {
  render: () => (
    <FormField label="Username" hint="Only letters, numbers, and underscores.">
      <Input placeholder="jane_doe" />
    </FormField>
  ),
};

export const WithError: Story = {
  render: () => (
    <FormField label="Email address" error="Please enter a valid email address.">
      <Input placeholder="you@example.com" defaultValue="not-an-email" error="Please enter a valid email address." />
    </FormField>
  ),
};

export const WithSelect: Story = {
  render: () => (
    <FormField label="Payment method" required hint="Select the method used for this transaction.">
      <Select
        options={[
          { value: '', label: 'Choose…' },
          { value: 'credit_card', label: 'Credit Card' },
          { value: 'pix', label: 'Pix' },
          { value: 'boleto', label: 'Boleto' },
        ]}
      />
    </FormField>
  ),
};
