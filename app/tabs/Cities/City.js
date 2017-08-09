import React from 'react';
import { View, Image } from 'react-native';

class City extends React.Component {
  // static navigationOptions = {
  //   title: 'City',
  // }

  static navigationOptions = {
    headerTitle: <Image
      source={require('../../assets/images/citieslogo.png')}
      style={{ marginTop: -3, height: 32, width: 120 }}
      resizeMode='contain'
    />
  };

  render() {
    return (
      <View>

      </View>
    )
  }
}

export default City;
