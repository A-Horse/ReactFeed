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

var SettingScreen = require('./SettingScreen'),
    FeedScreen = require('./feedScreen'),
    ListScreen = require('./listScreen');


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
    if (route.name === 'feed') {
        return (
                <FeedScreen navigator={navigationOperations}/>
        );
    } else if ( route.name === 'setting' ) {
        return (
            <SettingScreen navigator={navigationOperations} />
        );
    } else if ( route.name === 'list' ) {
        return (
                <ListScreen navigator={navigationOperations} />
        );
    } else {
        return (
            <View style={styles.page}>
            <Text style={styles.welcome}>
                404
            </Text>
            </View>
        );
    }
};

var Orientation = require('react-native-orientation');



var ReactFeed = React.createClass({
    render: function() {
        var initialRoute = {name: 'list'};
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
    page: {
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
});

AppRegistry.registerComponent('ReactFeed', () => ReactFeed);

module.exports = ReactFeed;
