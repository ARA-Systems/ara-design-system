import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { BarChart3, CircleDollarSign, ShoppingBag, Settings } from 'lucide-react'
import { BottomNav } from './BottomNav'

const meta: Meta<typeof BottomNav> = {
  title: 'Components/BottomNav',
  component: BottomNav,
}
export default meta

type Story = StoryObj<typeof BottomNav>

const items = [
  { id: 'dash', label: 'Dash', icon: <BarChart3 size={20} /> },
  { id: 'saldo', label: 'Saldo', icon: <CircleDollarSign size={20} /> },
  { id: 'produtos', label: 'Produtos', icon: <ShoppingBag size={20} /> },
  { id: 'ajustes', label: 'Ajustes', icon: <Settings size={20} /> },
]

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState('dash')
    return (
      <div style={{ maxWidth: 390, border: '1px solid var(--c-border)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
        <div style={{ height: 200, padding: '1rem', color: 'var(--c-fg-muted)', fontSize: 'var(--text-sm)' }}>
          Conteúdo da página: <strong>{items.find(i => i.id === active)?.label}</strong>
        </div>
        <BottomNav items={items} activeId={active} onChange={setActive} />
      </div>
    )
  },
}
