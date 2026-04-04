import { ReactNode } from 'react'

export interface BottomNavItem {
  id: string
  label: string
  icon: ReactNode
}

export interface BottomNavProps {
  items: BottomNavItem[]
  activeId: string
  onChange: (id: string) => void
}

export const BottomNav = ({ items, activeId, onChange }: BottomNavProps) => {
  return (
    <nav className="bottom-nav">
      {items.map((item) => (
        <button
          key={item.id}
          className={`bottom-nav-item ${item.id === activeId ? 'bottom-nav-item-active' : ''}`}
          onClick={() => onChange(item.id)}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  )
}

export default BottomNav
