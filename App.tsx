import React from 'react';
import type {Node} from 'react';
import {
  StatusBar, StyleSheet, View
} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AppNavigation from './src/navigation';
const App: () => Node = () => {
  return (
    <PaperProvider>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
        <SafeAreaProvider style={styles.container}>
          <AppNavigation />
        </SafeAreaProvider>
    </PaperProvider>
  );
};
const styles=StyleSheet.create({
  container:{flex:1,backgroundColor:'#fff'}
})
export default App;
