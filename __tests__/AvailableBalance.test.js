import React from 'react';
import { render} from '@testing-library/react-native';
import AvaAvailableBalance from '../components/AvailableBalance'; 
import '@testing-library/jest-dom';
import { Strings } from '../resources/Strings';

describe('AvailableBalance', () => {
  it('renders seekbar correctly with provided props', () => {
    const balance = 500;
    const screen = render(<AvaAvailableBalance balance={balance} />);

    const pricePanelText = screen.getByTestId('pricePanelText');
    const pricePanelTextContent = pricePanelText.props.children;
    expect(pricePanelTextContent).toBe(balance);
  }),

 
  it('render debit card title', () => {
    const screen = render(<AvaAvailableBalance balance={500} />);
     
     const cardTitle = screen.getByTestId('cardTitle');
     const cardTitleContent = cardTitle.props.children;
     expect(cardTitleContent).toContain(Strings.debitCard);
 
   })
   it('render available balnce title', () => {
    const screen = render(<AvaAvailableBalance balance={500} />)
     
     const balaceTitle = screen.getByTestId('balaceTitle');
     const balaceTitleContent = balaceTitle.props.children;
     expect(balaceTitleContent).toBe(Strings.availableBalance);
 
   })
 



  
  
});
