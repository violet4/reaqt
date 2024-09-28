
import '@testing-library/jest-dom';
import { FlexGridLayout } from '../../src/layouts/FlexGridLayout';

import { render } from '@testing-library/react';
import React from 'react';



describe('FlexGridLayout', () => {
  test('renders correct number of children with proper styling based on elementsPerRow', () => {
    const { container } = render(
      <FlexGridLayout elementsPerRow={4}>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
        <div>Child 4</div>
      </FlexGridLayout>
    );

    // Asserting that firstChild is an HTMLElement
    const children = (container.firstChild as HTMLElement).children;
    expect(children.length).toBe(4);
    Array.from(children).forEach(child => {
      // Asserting that child is an HTMLElement
      expect((child as HTMLElement).style.width).toBe('25%');
    });
  });

  test('applies default padding when not specified', () => {
    const { getByText } = render(
      <FlexGridLayout elementsPerRow={2}>
        <div>Child 1</div>
        <div>Child 2</div>
      </FlexGridLayout>
    );

    // Asserting parentNode as HTMLElement
    expect((getByText('Child 1').parentNode as HTMLElement).style.padding).toBe('5px');
  });

  test('overrides padding when specified', () => {
    const { getByText } = render(
      <FlexGridLayout elementsPerRow={2} padding={10}>
        <div>Child 1</div>
        <div>Child 2</div>
      </FlexGridLayout>
    );

    // Asserting parentNode as HTMLElement
    expect((getByText('Child 1').parentNode as HTMLElement).style.padding).toBe('10px');
  });
});
