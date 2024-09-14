import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SecondScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tässä toinen näyttö! Paina nuolta palataksesi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c4ffd4',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontStyle: 'italic',
  },
});

export default SecondScreen;