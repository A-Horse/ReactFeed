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

var SecureView = require("./SettingScreen.js");

class FeedScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }
 
    render() {
        return (
            <View style={styles.container}>

                <Text>
                This will display many feeds!
                </Text>


                <Image style={styles.settingIcon} source={require('./asserts/img/settings-icon.png')} />

                
            </View>
        );
    }
 
    onSubmitPressed() {
        this.props.navigator.push({
            title: "Secure Page",
            component: SecureView,
            passProps: {username: this.state.username, password: this.state.password},
        });
    }
};



var styles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: "stretch"
    },
    title: {
        fontSize: 18,
        marginBottom: 10
    },
    settingIcon: {
        flex: 1,
        width: 80,
        height: 80,
                position: 'absolute',
        right: 0,
        bottom: 0, 
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
