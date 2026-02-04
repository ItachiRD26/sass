'use client';

import { cn } from '@/lib/utils';

export function Table({ className, ...props }: React.TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="w-full overflow-x-auto">
      <table
        className={cn(
          'w-full border-collapse text-sm',
          className
        )}
        {...props}
      />
    </div>
  );
}

export function TableHead({ className, ...props }: React.TableHTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead
      className={cn(
        'bg-surface-secondary border-b border-border text-text-primary font-semibold',
        className
      )}
      {...props}
    />
  );
}

export function TableBody({ className, ...props }: React.TableHTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody
      className={cn(
        '[&>tr]:border-b [&>tr]:border-border [&>tr:hover]:bg-surface-secondary transition-colors',
        className
      )}
      {...props}
    />
  );
}

export function TableRow({ className, ...props }: React.TableHTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={cn(
        'transition-colors',
        className
      )}
      {...props}
    />
  );
}

export function TableHeader({ className, ...props }: React.TableHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={cn(
        'text-left px-4 py-3 font-semibold text-text-primary',
        className
      )}
      {...props}
    />
  );
}

export function TableCell({ className, ...props }: React.TableHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      className={cn(
        'px-4 py-3 text-text-secondary',
        className
      )}
      {...props}
    />
  );
}
