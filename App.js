import React, { useEffect, useState } from 'react';
//import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Routes from './routes/Routes';
import Splash from './components/Splash';
import { Fonts } from './resources/Fonts';

// Keep the splash screen visible while we fetch resources
//SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    console.log("Splash component mounted");
    async function loadFonts() {
      try {
        console.log("Splash component try");
        await Font.loadAsync(Fonts);
        console.log("Splash component try await");
        setFontsLoaded(true);
      } catch (error) {
        console.log("Splash component error");
      } finally {
        console.log("Splash component finally");
        setFontsLoaded(true);
       // await SplashScreen.hideAsync();
      }
    }
   loadFonts();
  }, []);

  if (!fontsLoaded) {
    console.log("Rendering Splash");
    // If fonts are not loaded yet, show the splash screen
    return (
     <Splash />
    );
  }

  console.log("Rendering Routes");
  return <Routes />;
}



