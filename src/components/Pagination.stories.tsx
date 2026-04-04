import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <p style={{ fontSize: 14, color: 'var(--muted)' }}>Page {page} of 10</p>
        <Pagination total={100} page={page} pageSize={10} onChange={setPage} />
      </div>
    );
  },
};

export const FewPages: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <p style={{ fontSize: 14, color: 'var(--muted)' }}>Page {page} of 4</p>
        <Pagination total={40} page={page} pageSize={10} onChange={setPage} />
      </div>
    );
  },
};

export const ManyPages: Story = {
  render: () => {
    const [page, setPage] = useState(5);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <p style={{ fontSize: 14, color: 'var(--muted)' }}>Page {page} of 50</p>
        <Pagination total={500} page={page} pageSize={10} onChange={setPage} />
      </div>
    );
  },
};
