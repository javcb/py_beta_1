import * as React from 'react';

export type TableProps = React.HTMLAttributes<HTMLTableElement>;

export function Table({ className = '', ...rest }: TableProps) {
  return (
    <div className="relative w-full overflow-auto">
      <table className={['w-full caption-bottom text-sm', className].join(' ')} {...rest} />
    </div>
  );
}

export type TableHeaderProps = React.HTMLAttributes<HTMLTableSectionElement>;

export function TableHeader({ className = '', ...rest }: TableHeaderProps) {
  return (
    <thead className={['[&_tr]:border-b', className].join(' ')} {...rest} />
  );
}

export type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>;

export function TableBody({ className = '', ...rest }: TableBodyProps) {
  return (
    <tbody className={['[&_tr:last-child]:border-0', className].join(' ')} {...rest} />
  );
}

export type TableFooterProps = React.HTMLAttributes<HTMLTableSectionElement>;

export function TableFooter({ className = '', ...rest }: TableFooterProps) {
  return (
    <tfoot className={['border-t bg-gray-50/50 font-medium [&>tr]:last:border-b-0 dark:bg-gray-800/50', className].join(' ')} {...rest} />
  );
}

export type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>;

export function TableRow({ className = '', ...rest }: TableRowProps) {
  return (
    <tr className={['border-b transition-colors hover:bg-gray-50/50 data-[state=selected]:bg-gray-50 dark:hover:bg-gray-800/50 dark:data-[state=selected]:bg-gray-800', className].join(' ')} {...rest} />
  );
}

export type TableHeadProps = React.ThHTMLAttributes<HTMLTableHeaderCellElement>;

export function TableHead({ className = '', ...rest }: TableHeadProps) {
  return (
    <th className={['h-12 px-4 text-left align-middle font-medium text-gray-500 [&:has([role=checkbox])]:pr-0 dark:text-gray-400', className].join(' ')} {...rest} />
  );
}

export type TableCellProps = React.TdHTMLAttributes<HTMLTableDataCellElement>;

export function TableCell({ className = '', ...rest }: TableCellProps) {
  return (
    <td className={['p-4 align-middle [&:has([role=checkbox])]:pr-0', className].join(' ')} {...rest} />
  );
}

export type TableCaptionProps = React.HTMLAttributes<HTMLTableCaptionElement>;

export function TableCaption({ className = '', ...rest }: TableCaptionProps) {
  return (
    <caption className={['mt-4 text-sm text-gray-500 dark:text-gray-400', className].join(' ')} {...rest} />
  );
}
