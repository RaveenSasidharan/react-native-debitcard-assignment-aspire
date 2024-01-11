import React from 'react';
import { render} from '@testing-library/react-native';
import SpendingProgressBar from '../components/SpendingProgressBar'; 
import '@testing-library/jest-dom';
import { Strings } from '../resources/Strings';

describe('SpendingProgressBar', () => {
  it('renders seekbar correctly with provided props', () => {
    const spendingLimit = 1000;
    const spendValue = 500;
    const expectedProgress = spendValue / spendingLimit;
    
    const screen = render(<SpendingProgressBar spendValue={spendValue} spendingLimit={spendingLimit} />)
    
    const spendText = screen.getByTestId('spendText');
    const spendTextContent = spendText.props.children;
    expect(spendTextContent).toContain(spendValue);


    const totalText = screen.getByTestId('totalText');
    const totalTextContent = totalText.props.children;
    expect(totalTextContent).toBe(spendingLimit);


    const spendProgress = screen.getByTestId('spendProgress');
    expect(spendProgress.props.progress).toBe(expectedProgress);

  }),

  it('render correct title', () => {
   const screen = render(<SpendingProgressBar spendValue={500} spendingLimit={1000} />)
    
    const progressTitle = screen.getByTestId('progressTitle');
    const progressTitleContent = progressTitle.props.children;
    expect(progressTitleContent).toBe(Strings.progressbarTitle);

  }),
  it('render correct title', () => {
    const screen = render(<SpendingProgressBar spendValue={500} spendingLimit={1000} />)
     
     const progressTitle = screen.getByTestId('progressTitle');
     const progressTitleContent = progressTitle.props.children;
     expect(progressTitleContent).toBe(Strings.progressbarTitle);
 
   })
 



  
  
});
