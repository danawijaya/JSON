import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/comp/Header';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
      <Text>saya belajar text</Text>
      <Text>saya belajar text</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
  }
});
