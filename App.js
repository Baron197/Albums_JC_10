import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './src/components/Header';

class App extends Component {
  render() {
    return (
      <View>
        <Header headerText="Albums" />
      </View>
    )
  }
}

export default App;