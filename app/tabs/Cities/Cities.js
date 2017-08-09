import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';

class Cities extends React.Component {
  static navigationOptions = {
    headerTitle: <Image
      source={require('../../assets/images/citieslogo.png')}
      style={{ marginTop: -3, height: 32, width: 120 }}
      resizeMode='contain'
    />
  };

  render() {
    const { navigation } = this.props;
    const cities = Object.values(this.props.cities);

    return (
      <View style={styles.container}>
        {
          cities.map((item, index) => (
            <ListItem
              onPress={() => navigation.navigate('City')}
              key={index}
              title={item.name}
            />
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities,
  }
}
export default connect(mapStateToProps)(Cities);
