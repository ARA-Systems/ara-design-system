import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './Card';
import { Button } from './Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardContent>
        <p>This is a default card with some content inside.</p>
      </CardContent>
    </Card>
  ),
};

export const Elevated: Story = {
  render: () => (
    <Card variant="elevated">
      <CardContent>
        <p>This is an elevated card with a stronger shadow.</p>
      </CardContent>
    </Card>
  ),
};

export const WithSubComponents: Story = {
  render: () => (
    <Card style={{ maxWidth: 420 }}>
      <CardHeader>
        <CardTitle>Transaction Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <p style={{ marginBottom: 8 }}>Review the details of your recent transaction before confirming.</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
          <span>Amount</span>
          <strong>$1,250.00</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
          <span>Method</span>
          <span>Credit Card</span>
        </div>
      </CardContent>
      <CardFooter>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <Button variant="ghost">Cancel</Button>
          <Button variant="primary">Confirm</Button>
        </div>
      </CardFooter>
    </Card>
  ),
};

export const ElevatedWithSubComponents: Story = {
  render: () => (
    <Card variant="elevated" style={{ maxWidth: 360 }}>
      <CardHeader>
        <CardTitle>Monthly Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Total revenue this month increased by 12.4% compared to last month.</p>
      </CardContent>
    </Card>
  ),
};
