/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';



  return (
    <SafeAreaView style={styles.root}>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root:{
    flex:1,
  }
});

export default App;
