'use strict';

var React = require("react-native");

var {
    Component,
    StyleSheet,
    Text,
    Image,
    TextInput,
    TouchableHighlight,
    View,
} = React;

var SettingScreen = require("./SettingScreen.js");

class FeedScreen extends Component {
    
    constructor(props) {
        super(props);
    }
 
    render() {
        return (
            <View style={styles.container}>

            <Text>
            This will display many feeds!
            </Text>

            <TouchableHighlight onPress={(this.goSetting.bind(this))} style={styles.settingButton} >
            <Image style={styles.settingIcon}source={require('./asserts/img/icon-setting.png')} />
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
        flexDirection: 'row',
        padding: 30,
        marginTop: 65
    },
    title: {
        fontSize: 18,
        marginBottom: 10
    },
    settingButton: {
        position: 'absolute',
        right: 16,
        bottom: 16,
    },
    settingIcon: {
        width: 80,
        height: 80,

    },
    settingIconContainer: {

        backgroundColor: '#999'
    },
    formInput: {
        height: 36,
        padding: 10,
        marginRight: 5,
        marginBottom: 5,
        marginTop: 5,
        flex: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#555555",
        borderRadius: 8,
        color: "#555555"
    },
    button: {
        height: 36,
        flex: 1,
        backgroundColor: "#555555",
        borderColor: "#555555",
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 18,
        color: "#ffffff",
        alignSelf: "center"
    },
});


module.exports = FeedScreen;
