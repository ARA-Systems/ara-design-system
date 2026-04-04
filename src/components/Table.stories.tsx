import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { Badge } from './Badge';

const meta: Meta = {
  title: 'Components/Table',
};

export default meta;
type Story = StoryObj;

type Transaction = {
  id: string;
  date: string;
  description: string;
  amount: string;
  status: 'completed' | 'pending' | 'failed';
  method: string;
};

const transactions: Transaction[] = [
  { id: 'TXN-0042', date: 'Apr 3, 2026', description: 'Acme Corp — Invoice #4892', amount: '$3,500.00', status: 'completed', method: 'Bank Transfer' },
  { id: 'TXN-0041', date: 'Apr 2, 2026', description: 'AWS Cloud Services', amount: '$892.14', status: 'completed', method: 'Credit Card' },
  { id: 'TXN-0040', date: 'Apr 2, 2026', description: 'Contractor Payment — Jane Doe', amount: '$1,200.00', status: 'pending', method: 'Pix' },
  { id: 'TXN-0039', date: 'Apr 1, 2026', description: 'Office Supplies', amount: '$145.60', status: 'completed', method: 'Debit Card' },
  { id: 'TXN-0038', date: 'Apr 1, 2026', description: 'SaaS Subscription', amount: '$299.00', status: 'failed', method: 'Credit Card' },
  { id: 'TXN-0037', date: 'Mar 31, 2026', description: 'Marketing Agency — March', amount: '$5,000.00', status: 'completed', method: 'Bank Transfer' },
  { id: 'TXN-0036', date: 'Mar 30, 2026', description: 'Domain Renewal', amount: '$24.99', status: 'completed', method: 'Credit Card' },
];

const statusVariant: Record<string, 'success' | 'error' | 'brand' | 'neutral'> = {
  completed: 'success',
  failed: 'error',
  pending: 'neutral',
};

const columns = [
  { key: 'id', header: 'ID' },
  { key: 'date', header: 'Date' },
  { key: 'description', header: 'Description' },
  {
    key: 'amount',
    header: 'Amount',
    align: 'right' as const,
    render: (row: Transaction) => <strong>{row.amount}</strong>,
  },
  {
    key: 'status',
    header: 'Status',
    render: (row: Transaction) => (
      <Badge variant={statusVariant[row.status]}>
        {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
      </Badge>
    ),
  },
  { key: 'method', header: 'Method' },
];

export const Default: Story = {
  render: () => (
    <Table<Transaction>
      columns={columns}
      data={transactions}
    />
  ),
};

export const EmptyState: Story = {
  render: () => (
    <Table<Transaction>
      columns={columns}
      data={[]}
      emptyState="No transactions found for the selected period."
    />
  ),
};
