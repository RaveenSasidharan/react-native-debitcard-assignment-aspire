import React from 'react';
import {Image} from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import SpendingProgressBar from '../components/SpendingProgressBar'; 
import '@testing-library/jest-dom';
import { Strings } from '../resources/Strings';
import CardSettingItem from '../components/CardSettingItem';
import { NavigationContainer } from '@react-navigation/native';


describe('CardSettingItem', () => {
  it('renders text views  with provided props', () => {
    const imageIcon = <Image source={{ uri: 'mock-uri' }} />;
    const title = Strings.topUpAccount;
    const description = Strings.topUpDesc;
    const toggleVisibility = false;
    
    const screen = render( <NavigationContainer>
                                < CardSettingItem  imageIcon={imageIcon} 
                                    title={title}
                                    description={description}
                                    toggleVisibility={toggleVisibility}/>
                            </NavigationContainer>);
    
    const itemTitle = screen.getByTestId('itemTitle');
    const itemTitleContent = itemTitle.props.children;
    expect(itemTitleContent).toBe(title);

    const itemDesc = screen.getByTestId('itemDesc');
    const itemDescContent = itemDesc.props.children;
    expect(itemDescContent).toBe(description);

    

  }),

  it('render switch with provided props', () => {
    const imageIcon = <Image source={{ uri: 'mock-uri' }} />;
    const title = Strings.topUpAccount;
    const description = Strings.topUpDesc;
    const toggleVisibility = true;
    
    
    const screen = render( <NavigationContainer>
                                <CardSettingItem  imageIcon={imageIcon} 
                                    title={title}
                                    description={description}
                                    toggleVisibility={toggleVisibility}/>
                            </NavigationContainer>);

    const toggle = screen.getByTestId('switch');
    expect(toggle).toBeTruthy();

  })
  
 
});
