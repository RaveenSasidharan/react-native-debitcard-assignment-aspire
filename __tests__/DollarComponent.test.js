import React from 'react';
import { render } from '@testing-library/react-native';
import DollarComponent from '../components/DollarComponent'; // Adjust the path based on your project structure

describe('DollarComponent', () => {
  it('renders with the correct styles and padding', () => {
    const verticalPadding = 20;
    const scene = render(<DollarComponent verticalPadding={verticalPadding} />);
    const text = scene.getByTestId('dollarText');
    expect(text.children[0]).toBe('$$');
  });
});