import { FixedFooterLayout } from '../../src/layouts/FixedFooterLayout';
import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';




describe('FixedFooterLayout', () => {
  it('should render main content with proper height', () => {
    const footerHeight = 50;
    render(
      <FixedFooterLayout 
        mainContent={<div data-testid="main-content">Main Content</div>}
        footerContent={<div data-testid="footer-content">Footer Content</div>}
        footerHeight={footerHeight} 
      />
    );

    const mainContent = screen.getByTestId('main-content');
    const footerContent = screen.getByTestId('footer-content').parentElement;

    expect(mainContent).toHaveStyle(`height: 100%`);

    expect(footerContent).toHaveStyle(`height: ${footerHeight}px`);
  });

  it('should render footer with proper position', () => {
    const footerHeight = 50;
    render(
      <FixedFooterLayout 
        mainContent={<div data-testid="main-content">Main Content</div>}
        footerContent={<div data-testid="footer-content">Footer Content</div>}
        footerHeight={footerHeight} 
      />
    );

    const footerContent = screen.getByTestId('footer-content').parentElement;

    expect(footerContent).toHaveStyle(`position: fixed`);
    expect(footerContent).toHaveStyle(`bottom: 0`);
  });
});
