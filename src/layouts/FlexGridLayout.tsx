import React from "react";

interface GridItemProps {
  children: React.ReactNode;
};
export const FlexGridItem = ({children}: GridItemProps) => {
  return (
    <div>
      {children}
    </div>
  );
};
interface FlexGridLayoutProps {
  children: React.ReactNode;
  elementsPerRow: number;
  padding?: number;
};
export const FlexGridLayout = ({ children, elementsPerRow, padding }: FlexGridLayoutProps) => {
  if (!padding) padding = 5;
  const elementWidth = 100 / elementsPerRow;
  // const style = {width: `${elementWidth}%`, maxWidth: `${elementWidth}%`};
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {React.Children.map(children, child => (
        <div style={{width: `${elementWidth}%`, boxSizing: 'border-box', padding: `${padding}px`}}>
          {child}
        </div>
      ))}
    </div>
  );
};

export const MakeGridLayout = () => {
  const colors = ['red', 'green', 'purple', 'yellow', 'white', 'black', 'gray', 'blue'];
  return (
    <FlexGridLayout elementsPerRow={5}>
      {colors.map((color: string) =>
        <div style={{background: color}}>Stuff and things</div>
      )}
    </FlexGridLayout>
  );
};
