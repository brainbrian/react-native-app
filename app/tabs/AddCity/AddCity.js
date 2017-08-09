import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
const { width } = Dimensions.get('window');

export default class AddCity extends React.Component {
  state = {
    input: {
      city: '',
      country: '',
    }
  }

  onChangeText = (key, value) => {
    this.setState({
      input: {
        ...this.state.input,
        [key]: value,
      }
    });
  }

  onPress = () => {
    console.log('state', this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode='contain'
          style={styles.logo}
          source={require('../../assets/images/citieslogo.png')}
        />
        <TextInput
          value={this.state.input.city}
          onChangeText={value => this.onChangeText('city', value)}
          style={styles.input}
        />
        <TextInput
          value={this.state.input.country}
          onChangeText={value => this.onChangeText('country', value)}
          style={styles.input}
        />
        <Button
          buttonStyle={styles.button}
          title='Submit'
          onPress={this.onPress}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9c27b0',
  },
  input: {
    backgroundColor: '#fff',
    height: 55,
    marginHorizontal: 15,
    marginTop: 8,
    padding: 9,
  },
  logo: {
    maxHeight: 36,
    marginTop: 100,
    alignItems: 'center',
    maxWidth: width,
  },
  button: {
    marginTop: 8
  },
});
