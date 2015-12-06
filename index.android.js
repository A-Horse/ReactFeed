/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    Navigator,
    BackAndroid,
    StyleSheet,
    Text,
    Image,
    ToolbarAndroid,
    View,
} = React;

var SettingScreen = require('./SettingScreen');

var FeedScreen = require('./feedScreen');

var _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_navigator && _navigator.getCurrentRoutes().length > 1) {
        _navigator.pop();
        return true;
    }
    return false;
});

var RouteMapper = function(route, navigationOperations, onComponentRef) {
    _navigator = navigationOperations;
    if (route.name === 'setting') {
        return (
                <FeedScreen navigator={navigationOperations}/>
        );
    } else {
        return (
            <View style={styles.container1}>
            <Text style={styles.welcome}>
            Welcome to React Native!
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
};

var Orientation = require('react-native-orientation');



var ReactFeed = React.createClass({
    render: function() {
        var initialRoute = {name: 'setting'};
        return (
            <Navigator
            style={styles.container}
            initialRoute={initialRoute}
            configureScene={() => Navigator.SceneConfigs.FadeAndroid}
            renderScene={RouteMapper}
            />
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    container1: {
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
