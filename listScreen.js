'use strict';

var React = require('react-native');

var {
    Component,
    StyleSheet,
    Text,
    Image,
    TextInput,
    TouchableHighlight,
    View,
} = React;



class ListScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={ styles.container }>
            <Text>
            This is List Screen!
            </Text>

            <TouchableHighlight onPress={(this.goSetting.bind(this))} style={styles.addButton} >
            <Image style={styles.addIcon} source={require('./asserts/img/icon-add.png')} />
            </TouchableHighlight>
            
            </View>
        );
    }

    goSetting() {
        this.props.navigator.push({
            title: 'Setting',
            name: 'setting',
            component: SettingScreen
        });
    }

};


var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButton: {
        position: 'absolute',
        right: 16,
        bottom: 16,
    },
    addIcon: {
        width: 80,
        height: 80,

    },
});

module.exports = ListScreen;
