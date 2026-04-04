import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from './Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Confirm Transfer"
          description="Please review the details before confirming your transfer."
          footer={
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="primary" onClick={() => setOpen(false)}>Confirm</Button>
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Recipient</span>
              <strong>Acme Corp</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Amount</span>
              <strong>$3,500.00</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Method</span>
              <span>Bank Transfer</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Date</span>
              <span>Apr 3, 2026</span>
            </div>
          </div>
        </Modal>
      </>
    );
  },
};

export const WithoutFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="secondary" onClick={() => setOpen(true)}>View Details</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Transaction Details"
          description="ID: TXN-20260403-0042"
        >
          <p>This transaction was processed successfully on April 3, 2026 at 14:32 UTC.</p>
        </Modal>
      </>
    );
  },
};
