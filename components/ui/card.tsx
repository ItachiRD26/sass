'use client';

import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export function Card({ header, footer, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-surface border border-border-light rounded-lg overflow-hidden',
        className
      )}
      {...props}
    >
      {header && (
        <div className="border-b border-border-light px-6 py-4 bg-surface-secondary">
          {header}
        </div>
      )}
      <div className="px-6 py-4">
        {children}
      </div>
      {footer && (
        <div className="border-t border-border-light px-6 py-4 bg-surface-secondary">
          {footer}
        </div>
      )}
    </div>
  );
}
