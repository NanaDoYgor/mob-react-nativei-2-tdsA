import { StatusBar } from 'expo-status-bar';
import React from  'react';
import { StatusBar, SafeAreaView } from 'react-native';


import cesta from './src/telas/cesta';

export default function App() {
  return (
    <SafeAreaView >
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
