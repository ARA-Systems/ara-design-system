import type { Meta, StoryObj } from '@storybook/react'
import { SearchInput } from './SearchInput'

const meta: Meta<typeof SearchInput> = {
  title: 'Components/SearchInput',
  component: SearchInput,
}
export default meta

type Story = StoryObj<typeof SearchInput>

export const Default: Story = {
  args: { placeholder: 'Pesquisar', shortcut: '⌘F' },
}

export const CustomShortcut: Story = {
  args: { placeholder: 'Buscar transação...', shortcut: 'Ctrl+K' },
}

export const NoShortcut: Story = {
  args: { placeholder: 'Pesquisar...', shortcut: undefined },
}
