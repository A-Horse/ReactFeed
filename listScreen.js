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
        var modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
        };
        var innerContainerTransparentStyle = this.state.transparent
                                           ? {backgroundColor: '#fff', padding: 20}
                                           : null;
        
        return (
            <View style={ styles.container }>
            <Text>
            This is List Screen!
            </Text>

            <TouchableHighlight onPress={(this.goSetting.bind(this))} style={styles.addButton} underlayColor="#F5FCFF">
            <Image style={styles.addIcon} source={require('./asserts/img/icon-add.png')} />
            </TouchableHighlight>

            <Modal
            animated={this.state.animated}
            transparent={this.state.transparent}
            visible={this.state.modalVisible}>
            
            <View style={[styles.container, modalBackgroundStyle]}>
            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                 <Text>This modal was presented {this.state.animated ? 'with' : 'without'} animation.</Text>            
            </View>
            </View>
            </Modal>
            
            </View>
        );
    }

    goSetting() {
        this.setState({modalVisible: true});
    }

};


var styles = StyleSheet.create({
    container: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        borderRadius: 10,
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
