import { ReactNode, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  id: string;
  title: string;
  content: string | ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: string[];
}

export const Accordion = ({ items, defaultOpen = [] }: AccordionProps) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggle = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        return (
          <div key={item.id} className="accordion-item">
            <button
              className="accordion-trigger"
              aria-expanded={isOpen}
              onClick={() => toggle(item.id)}
            >
              {item.title}
              <ChevronDown
                size={16}
                className="accordion-icon"
                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
              />
            </button>
            {isOpen && (
              <div className="accordion-content">
                <div className="accordion-content-inner">{item.content}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
