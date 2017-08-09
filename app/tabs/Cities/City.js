import React from 'react';
import { View, Image } from 'react-native';

class City extends React.Component {
  static navigationOptions = (props) => {
    const { name } = props.navigation.state.params;
    return {
      title: name,
    }
  }

  render() {
    return (
      <View>

      </View>
    )
  }
}

export default City;
