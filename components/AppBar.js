import React from 'react';
import { Appbar } from 'react-native-paper';

const AppBar = ({ currentScreen, navigateToScreen }) => {
  return (
    <Appbar.Header elevated>
      {currentScreen === 'Second' ? (
        <Appbar.BackAction onPress={() => navigateToScreen('Home')} />
      ) : (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigateToScreen('Second')}
        />
      )}
      <Appbar.Content title={currentScreen === 'Home' ? 'Home Screen' : 'Second Screen'} />
    </Appbar.Header>
  );
};

export default AppBar;