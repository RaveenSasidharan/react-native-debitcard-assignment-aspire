import React, { useEffect, useState } from 'react';
//import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Routes from './routes/Routes';
import Splash from './components/Splash';
import { Fonts } from './resources/Fonts';
import {Provider} from 'react-redux';
import store from './redux/store/index';



export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync(Fonts);
        setFontsLoaded(true);
      } catch (error) {
      } finally {
        setFontsLoaded(true);
       // await SplashScreen.hideAsync();
      }
    }
   loadFonts();
  }, []);

  if (!fontsLoaded) {
    // If fonts are not loaded yet, show the splash screen
    return (
     <Splash />
    );
  }

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );;
}



