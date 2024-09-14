import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import AppBar from './components/AppBar';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const navigateToScreen = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <PaperProvider>
      <AppBar 
        currentScreen={currentScreen} 
        navigateToScreen={navigateToScreen}
      />
      <View style={styles.container}>
        {currentScreen === 'Home' ? (
          <HomeScreen navigateToScreen={navigateToScreen} />
        ) : (
          <SecondScreen navigateToScreen={navigateToScreen} />
        )}
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});