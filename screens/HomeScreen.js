import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tervetuloa kotinäytölle</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3f6ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontStyle: 'italic',
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;