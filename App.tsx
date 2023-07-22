import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/BottomNavigation';

function App() {
  return (
    <SafeAreaView style={styles.app}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
