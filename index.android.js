/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

class v2ex extends Component {
  const movie = MOCKED_MOVIES_DATA[0];
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {movie.title}
        </Text>
        <Text style={styles.instructions}>
          {movie.year}
        </Text>
        <Image source={{uri: movie,poster.thumbnail}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('v2ex', () => v2ex);
