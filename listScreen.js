'use strict';

var React = require('react-native');

var {
    Component,
    StyleSheet,
    Text,
    Modal,
    Image,
    TextInput,
    TouchableHighlight,
    View,
} = React;



class ListScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animated: true,
            modalVisible: false,
            transparent: true,
        };
    }

    
    render() {
        
        
        return (
            <View style={ styles.container }>

            <Text>
            This is List Screen!! {this.state.text}
            </Text>

            <View style={styles.addFeed}>
            
            <TextInput
            style={styles.addInput}
            //onChangeText={(text) => this.setState({text})}
            value={this.state.text}/>

            
            <TouchableHighlight onPress={(this.goSetting.bind(this))} style={styles.addButton} underlayColor="#F5FCFF">
            <Image style={styles.addIcon} source={require('./asserts/img/icon-add.png')} />
            </TouchableHighlight>

            </View>
            
            
            </View>
        );
    }

    goSetting() {
        console.log('l');
        this.setState({modalVisible: true});
    }

};


var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addFeed: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    addInput: {
        flex: 0.8,
        height: 40,
        width: 250,
        borderColor: 'green',
        borderWidth: 1
    },
    addButton: {
        flex: 0.2,
        /* right: 16,
           bottom: 16, */
    },
    addIcon: {
        width: 40,
        height: 40,

    },
});

module.exports = ListScreen;
