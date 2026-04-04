import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const faqItems = [
  {
    id: 'item-1',
    title: 'What payment methods are supported?',
    content: 'We support Credit Card, Debit Card, Bank Transfer, Pix, and Boleto. All major card networks are accepted including Visa, Mastercard, and Amex.',
  },
  {
    id: 'item-2',
    title: 'How long do transfers take?',
    content: 'Pix transfers are instant (24/7). Bank transfers typically take 1–3 business days. Card payments are processed immediately.',
  },
  {
    id: 'item-3',
    title: 'Are there any transaction fees?',
    content: 'Pix transactions are free. Credit card payments incur a 2.5% processing fee. Bank transfers have a flat $0.50 fee per transaction.',
  },
  {
    id: 'item-4',
    title: 'How do I dispute a transaction?',
    content: 'Navigate to the transaction details page and click "Dispute". Our support team will review your case within 3–5 business days.',
  },
];

export const Default: Story = {
  render: () => <Accordion items={faqItems} />,
};

export const DefaultOpen: Story = {
  render: () => <Accordion items={faqItems} defaultOpen={['item-1', 'item-3']} />,
};

export const SingleItem: Story = {
  render: () => (
    <Accordion
      items={[
        {
          id: 'single',
          title: 'Click to expand',
          content: 'This is the expanded content of a single accordion item.',
        },
      ]}
    />
  ),
};
