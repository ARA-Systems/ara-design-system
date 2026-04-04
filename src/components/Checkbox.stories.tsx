import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        id="default"
        label="Accept terms and conditions"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};

export const Checked: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <Checkbox
        id="checked"
        label="Remember me"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Checkbox
        id="disabled-unchecked"
        label="Disabled unchecked"
        checked={false}
        onChange={() => {}}
        disabled
      />
      <Checkbox
        id="disabled-checked"
        label="Disabled checked"
        checked={true}
        onChange={() => {}}
        disabled
      />
    </div>
  ),
};

export const Group: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['credit_card']);

    const toggle = (value: string) => {
      setSelected((prev) =>
        prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
      );
    };

    const options = [
      { value: 'credit_card', label: 'Credit Card' },
      { value: 'debit_card', label: 'Debit Card' },
      { value: 'bank_transfer', label: 'Bank Transfer' },
      { value: 'pix', label: 'Pix' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <p style={{ marginBottom: 8, fontWeight: 600 }}>Select payment methods</p>
        {options.map((opt) => (
          <Checkbox
            key={opt.value}
            id={opt.value}
            label={opt.label}
            checked={selected.includes(opt.value)}
            onChange={() => toggle(opt.value)}
          />
        ))}
      </div>
    );
  },
};
