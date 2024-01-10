import React from 'react';
import { render } from '@testing-library/react-native';
import SpendingProgressBar from '../components/SpendingProgressBar'; 
describe('SpendingProgressBar', () => {
  it('renders correctly with provided props', () => {
    const spendingLimit = 1000;
    const spendValue = 500;

    const { getByText, getByTestId } = render(
      <SpendingProgressBar spendingLimit={spendingLimit} spendValue={spendValue} />
    );

    // Check if the component renders with the correct text
    expect(getByText('Debit Card Spending Limit')).toBeTruthy();
    expect(getByText('$500 /')).toBeTruthy();
    expect(getByText('1000')).toBeTruthy();

    // Check if the progress bar is rendered
    expect(getByTestId('progress-bar')).toBeTruthy();
  });

  it('calculates the progress correctly', () => {
    const spendingLimit = 1000;
    const spendValue = 500;

    const { getByTestId } = render(
      <SpendingProgressBar spendingLimit={spendingLimit} spendValue={spendValue} />
    );

    // Check if the progress bar has the correct progress value
    const progressBar = getByTestId('progress-bar');
    expect(progressBar.props.progress).toBe(0.5);
  });
  
  it('handles zero spending limit gracefully', () => {
    const spendingLimit = 0;
    const spendValue = 0;

    const { getByTestId } = render(
      <SpendingProgressBar spendingLimit={spendingLimit} spendValue={spendValue} />
    );

    // Check if the progress bar has the correct progress value
    const progressBar = getByTestId('progress-bar');
    expect(progressBar.props.progress).toBe(0);
  });
  
});
