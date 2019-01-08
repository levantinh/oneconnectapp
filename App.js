import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './src/styles';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello word</Text>
      </View>
    );
  }
}

