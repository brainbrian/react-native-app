import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class AddCity extends React.Component {
  static navigationOptions = {
    headerTitle: <Image
      source={require('../../assets/images/citieslogo.png')}
      style={{ marginTop: -3, height: 32, width: 120 }}
      resizeMode='contain'
    />
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from AddCity</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
