import type { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, useToast } from './Toast';
import { Button } from './Button';

const meta: Meta = {
  title: 'Components/Toast',
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj;

const ToastTriggers = () => {
  const { toast } = useToast();
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Button
        variant="primary"
        onClick={() =>
          toast({ title: 'Info', message: 'Your request is being processed.', variant: 'default' })
        }
      >
        Default
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          toast({ title: 'Payment confirmed', message: '$1,250.00 transferred successfully.', variant: 'success' })
        }
      >
        Success
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          toast({ title: 'Transaction failed', message: 'Unable to process payment. Try again.', variant: 'error' })
        }
      >
        Error
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          toast({ title: 'Low balance', message: 'Your account balance is below $100.', variant: 'warning' })
        }
      >
        Warning
      </Button>
    </div>
  );
};

export const Default: Story = {
  render: () => <ToastTriggers />,
};

export const SuccessToast: Story = {
  render: () => {
    const Trigger = () => {
      const { toast } = useToast();
      return (
        <Button onClick={() => toast({ title: 'Payment confirmed', message: '$1,250.00 transferred successfully.', variant: 'success' })}>
          Trigger Success
        </Button>
      );
    };
    return <Trigger />;
  },
};

export const ErrorToast: Story = {
  render: () => {
    const Trigger = () => {
      const { toast } = useToast();
      return (
        <Button onClick={() => toast({ title: 'Transaction failed', message: 'Please check your card details.', variant: 'error' })}>
          Trigger Error
        </Button>
      );
    };
    return <Trigger />;
  },
};

export const WarningToast: Story = {
  render: () => {
    const Trigger = () => {
      const { toast } = useToast();
      return (
        <Button onClick={() => toast({ title: 'Suspicious activity', message: 'Unusual login detected on your account.', variant: 'warning' })}>
          Trigger Warning
        </Button>
      );
    };
    return <Trigger />;
  },
};
