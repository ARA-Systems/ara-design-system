import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Radio
        name="default"
        value="option1"
        label="Option 1"
        checked={value === 'option1'}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const Group: Story = {
  render: () => {
    const [value, setValue] = useState('pix');

    const options = [
      { value: 'credit_card', label: 'Credit Card' },
      { value: 'debit_card', label: 'Debit Card' },
      { value: 'bank_transfer', label: 'Bank Transfer' },
      { value: 'pix', label: 'Pix' },
      { value: 'boleto', label: 'Boleto' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <p style={{ marginBottom: 8, fontWeight: 600 }}>Payment method</p>
        {options.map((opt) => (
          <Radio
            key={opt.value}
            name="payment"
            value={opt.value}
            label={opt.label}
            checked={value === opt.value}
            onChange={(e) => setValue(e.target.value)}
          />
        ))}
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Radio
        name="disabled"
        value="a"
        label="Disabled unchecked"
        checked={false}
        onChange={() => {}}
        disabled
      />
      <Radio
        name="disabled"
        value="b"
        label="Disabled checked"
        checked={true}
        onChange={() => {}}
        disabled
      />
    </div>
  ),
};
