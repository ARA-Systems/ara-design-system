import { ReactNode } from 'react';

export interface TabPillItem {
  id: string;
  label: string;
  icon?: ReactNode;
}

export interface TabPillsProps {
  tabs: TabPillItem[];
  value: string;
  onChange: (id: string) => void;
}

export const TabPills = ({ tabs, value, onChange }: TabPillsProps) => (
  <div className="tab-pills" role="tablist">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        className={`tab-pill${tab.id === value ? ' tab-pill-active' : ''}`}
        role="tab"
        aria-selected={tab.id === value}
        onClick={() => onChange(tab.id)}
      >
        {tab.icon && <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: 6 }}>{tab.icon}</span>}
        {tab.label}
      </button>
    ))}
  </div>
);

export default TabPills;
