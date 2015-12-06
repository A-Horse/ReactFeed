'use strict';

var React = require('react-native');
var {
    ActivityIndicatorIOS,
    ListView,
    Platform,
    ProgressBarAndroid,
    ToolbarAndroid,
    StyleSheet,
    Text,
    View,
    SwitchAndroid
} = React;





var TimerMixin = require('react-timer-mixin');


var SettingScreen = React.createClass({

    mixins: [TimerMixin],


    getInitialState : function() {
        return {
            trueSwitchIsOn: true,
            falseSwitchIsOn: false,
            colorTrueSwitchIsOn: true,
            colorFalseSwitchIsOn: false,
            eventSwitchIsOn: false,
        };
    },


    render: function(){

        return (

            <View style={styles.container}>

            <View style={styles.settingContainer}>

            <Text>Start Fetch</Text>

            <SwitchAndroid
            onValueChange={
                (value) => this.setState({falseSwitchIsOn: value})
            }
            value={this.state.falseSwitchIsOn} />

            </View>


            </View>

        );
    }


});

var toolbarActions = [

  {title: 'Filter'},

];

var styles = StyleSheet.create({
    container: {
        flex: 6,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    settingContainer: {
        flexDirection: 'row',
    },



});


module.exports = SettingScreen;
