import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Plain: Story = {
  render: () => (
    <div style={{ padding: 24 }}>
      <p style={{ marginBottom: 16 }}>Content above</p>
      <Divider />
      <p style={{ marginTop: 16 }}>Content below</p>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ padding: 24 }}>
      <p style={{ marginBottom: 16 }}>Section A</p>
      <Divider label="OR" />
      <p style={{ marginTop: 16 }}>Section B</p>
    </div>
  ),
};

export const WithCustomLabel: Story = {
  render: () => (
    <div style={{ padding: 24 }}>
      <p style={{ marginBottom: 16 }}>Sign in with email</p>
      <Divider label="or continue with" />
      <p style={{ marginTop: 16 }}>Social login options</p>
    </div>
  ),
};
