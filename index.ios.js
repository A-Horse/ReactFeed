import React, { Component } from 'react';
let xml = require('react-native').RNMXml;
import {
  AppRegistry,
  StyleSheet,
  REACT_DEBUGGER,
  Text,
  View
} from 'react-native';


class ReactFeed extends Component {
  constructor() {
    super();
    this.fetchFeeds();
  }

  fetchFeeds() {
    fetch('https://www.v2ex.com/feed/tab/tech.xml')
      .then((response) => response.text())
      .then((responseText) => {
        console.log(xml);
        xml.queryXml('<doc a="V1">V2</doc>',
                     ['/doc/@a', '/doc'],
                     results => results.map(nodes => console.log(nodes[0])))
        
      });
  }
  
  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native2!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
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

AppRegistry.registerComponent('ReactFeed', () => ReactFeed);
