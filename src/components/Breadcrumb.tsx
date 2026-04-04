import { Fragment, ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: ReactNode;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => (
  <nav className="breadcrumb" aria-label="Breadcrumb">
    {items.map((item, index) => {
      const isLast = index === items.length - 1;
      const content = (
        <>
          {item.icon && <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: 4 }}>{item.icon}</span>}
          {item.label}
        </>
      );

      return (
        <Fragment key={index}>
          {isLast || !item.href ? (
            <span className={`breadcrumb-item${isLast ? ' breadcrumb-item-active' : ''}`} aria-current={isLast ? 'page' : undefined}>
              {content}
            </span>
          ) : (
            <a className="breadcrumb-item" href={item.href}>
              {content}
            </a>
          )}
          {!isLast && (
            <span className="breadcrumb-sep" aria-hidden="true">
              <ChevronRight size={12} />
            </span>
          )}
        </Fragment>
      );
    })}
  </nav>
);

export default Breadcrumb;
