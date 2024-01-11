import React from 'react';
import { render} from '@testing-library/react-native';
import VirtualDebitCard from '../components/VirtualDebitCard'; 
import '@testing-library/jest-dom';
import { Strings } from '../resources/Strings';

describe('VirtualDebitCard', () => {
  it('renders seekbar correctly with provided props', () => {
    const mockCardData = {
        userName: 'John Doe',
        cardNumber: '1234567890123456',
        validThru: '12/24',
        cvv: '123',
      };

    const screen = render(<VirtualDebitCard {...mockCardData} />)
    
    
    expect(screen.getByText('John Doe')).toBeTruthy();
    expect(screen.getByText('3456')).toBeTruthy();
    expect(screen.getByText(Strings.showCard)).toBeTruthy();
    const aspireLogo = screen.getByTestId('aspireLogo');
    expect(aspireLogo).toBeTruthy();
    const visaLogo = screen.getByTestId('visaLogo');
    expect(visaLogo).toBeTruthy();

  })

  
 
});
