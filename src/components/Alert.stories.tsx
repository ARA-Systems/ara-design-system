import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  args: {
    variant: 'info',
    children: 'This is an informational alert message.',
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Heads up',
    children: 'Your account verification is pending. Please check your email.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Payment confirmed',
    children: 'Your transaction of $1,250.00 was processed successfully.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Review required',
    children: 'This transaction has been flagged for manual review.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Transaction failed',
    children: 'We were unable to process your payment. Please try again.',
  },
};

export const Dismissible: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);
    return visible ? (
      <Alert
        variant="info"
        title="New feature available"
        dismissible
        onDismiss={() => setVisible(false)}
      >
        You can now export your transaction history as CSV.
      </Alert>
    ) : (
      <p style={{ color: 'var(--muted)' }}>Alert dismissed.</p>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Alert variant="success" title="Success">Payment processed successfully.</Alert>
      <Alert variant="error" title="Error">Transaction could not be completed.</Alert>
      <Alert variant="warning" title="Warning">Your balance is running low.</Alert>
      <Alert variant="info" title="Info">Scheduled maintenance on Sunday 2 AM UTC.</Alert>
    </div>
  ),
};
