import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  gap?: number;
};

export const VerticalLayout = ({ children, gap }: LayoutProps) => {
  if (!gap) gap = 5;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: `${gap}px` }}>
      {children}
    </div>
  );
};

export const HorizontalLayout = ({ children, gap }: LayoutProps) => {
  if (!gap) gap = 5;
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: `${gap}px` }}>
      {children}
    </div>
  );
};
