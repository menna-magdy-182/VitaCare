import {
    DefaultTheme as NavigatorTheme,
    NavigationContainer,
  } from '@react-navigation/native';
  import React from 'react';
  import {
    configureFonts,
    DefaultTheme, 
    ThemeProvider,
  } from 'react-native-paper';
  import {Theme} from 'react-native-paper/lib/typescript/types';
  import {COLORS, FONTS} from '../constants/index';
  import MainNavigation from './MainNavigation';
    
  const AppNavigation = () => {

    const theme: Theme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary:  COLORS.MAINCOLOR,
      },
      fonts: configureFonts({
        ios: FONTS,
        android: FONTS,
        default: FONTS,
      }),
    };
  
    return (
         <ThemeProvider theme={theme}>
          <NavigationContainer
            theme={{
              ...NavigatorTheme,  colors: {  ...NavigatorTheme.colors,  primary:  COLORS.MAINCOLOR, }
            }}>
         <MainNavigation  />
          </NavigationContainer>
        </ThemeProvider>
     );
  };
  
  export default AppNavigation;
  
 