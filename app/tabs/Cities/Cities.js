import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';
import { fetchDataFromAPI } from '../../actions/cityActions';

class Cities extends React.Component {
  static navigationOptions = {
    headerTitle: <Image
      source={require('../../assets/images/citieslogo.png')}
      style={{ marginTop: -3, height: 32, width: 120 }}
      resizeMode='contain'
    />
  };

  componentDidMount() {
    this.props.dispatchFetchDataFromAPI();
  }

  render() {
    const { navigation } = this.props;
    const cities = Object.values(this.props.cities);

    return (
      <View style={styles.container}>
        {
          cities.map((item, index) => (
            <ListItem
              onPress={() => navigation.navigate('City', item)}
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

const mapDispatchToProps = {
  dispatchFetchDataFromAPI: () => fetchDataFromAPI()
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
