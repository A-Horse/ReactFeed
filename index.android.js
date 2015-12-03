/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  BackAndroid,
  StyleSheet,
  Text,
  ToolbarAndroid,
  View,
} = React;

var ReactFeed = React.createClass({
  render: function() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit index.android.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Shake or press menu button for dev menu
      //   </Text>
      // </View>
      <Navigator
         style = { styles.container }
         initialRoute = { initialRoute }
         configureScene = { () => Navigator.SceneConfigs.FadeAndroid }
         renderScene = { RouteMapper }
      />
    );
  }
});

var styles = StyleSheet.create({
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

AppRegistry.registerComponent('ReactFeed', () => ReactFeed);

module.exports = ReactFeed;
