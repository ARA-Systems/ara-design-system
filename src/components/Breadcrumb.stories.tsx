import type { Meta, StoryObj } from '@storybook/react';
import { Home, CreditCard, FileText } from 'lucide-react';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: () => (
    <Breadcrumb
      items={[
        { label: 'Dashboard', href: '#' },
        { label: 'Transactions', href: '#' },
        { label: 'TXN-20260403-0042' },
      ]}
    />
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Breadcrumb
      items={[
        { label: 'Home', href: '#', icon: <Home size={12} /> },
        { label: 'Payments', href: '#', icon: <CreditCard size={12} /> },
        { label: 'Invoice #4892', icon: <FileText size={12} /> },
      ]}
    />
  ),
};

export const TwoLevels: Story = {
  render: () => (
    <Breadcrumb
      items={[
        { label: 'Settings', href: '#' },
        { label: 'API Keys' },
      ]}
    />
  ),
};

export const SingleItem: Story = {
  render: () => (
    <Breadcrumb
      items={[
        { label: 'Dashboard' },
      ]}
    />
  ),
};
