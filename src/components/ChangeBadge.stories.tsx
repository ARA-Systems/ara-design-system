import type { Meta, StoryObj } from '@storybook/react'
import { ChangeBadge } from './ChangeBadge'

const meta: Meta<typeof ChangeBadge> = {
  title: 'Components/ChangeBadge',
  component: ChangeBadge,
}
export default meta

type Story = StoryObj<typeof ChangeBadge>

export const Positive: Story = {
  args: { value: 12 },
}

export const Negative: Story = {
  args: { value: -4 },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
      <ChangeBadge value={12} />
      <ChangeBadge value={5} />
      <ChangeBadge value={0} />
      <ChangeBadge value={-4} />
      <ChangeBadge value={-15} />
    </div>
  ),
}
