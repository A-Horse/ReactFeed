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
    AsyncStorage,
    ListView,
    View,
} = React;

var STORAGE_KEY = '@AsyncStorageFeed:key';

class ListScreen extends Component {

    constructor(props) {
        super(props);
        this.list = [];
        
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        //this.feedList = this.ds.cloneWithRows(this.list);
        this.state = {
            animated: true,
            modalVisible: false,
            transparent: true,
            feedList: this.ds.cloneWithRows(this.list),
            errMsg: ''
        };
    }

    componentDidMount() {
        this._loadInitialState().done();
    }

    _refreshFeedList() {
        this.setState({
            feedList: this.ds.cloneWithRows(this.list)
        });
    }

    
    
    async _loadInitialState() {
        try {    
            var value = await AsyncStorage.getItem(STORAGE_KEY);
            if (value !== null){
                this.list = JSON.parse(value);
                this._refreshFeedList();
            }
        } catch (error) {
            console.log('GET value Error!');
        }
    }

    async _saveList() {

        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(this.list));
        } catch (err) {
            console.log('Save List Error!');
        }
        
        
    }

    async _clearList() {
        try {
            await AsyncStorage.removeItem(STORAGE_KEY);
            this.list = [];
            this._refreshFeedList();
        } catch (error) {
            console.log('Clear storage Error!', error.message);
        }
    }

    _clearErrMsg() {
        this.setState({
            errMsg: ''
        });
    }


    _addFeed() {
        if ( !this.state.addText || this.state.addText === '' ) {
            this.setState({
                errMsg: 'That is empty! kidding me?'
            });
            return;
        }
        
        this._clearErrMsg();
        if ( this._checkUrl(this.state.addText) ) {
            this.list.push(this.state.addText);
            this._saveList().done();
            this._refreshFeedList();
            this.setState({
                addText: ''
            });
        } else {
            this.setState({
                errMsg: 'Url format not correct!'
            });
        }
    }

    _checkUrl(str) {
        return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(str);
    }
    
    render() {
        
        
        return (
            <View style={ styles.container }>

                <View>
                <ListView
            dataSource={this.state.feedList}
            renderRow={(rowData) =>
                       
                       <View style={styles.feedItem}>

                       <Image style={styles.xIcon} source={require('./asserts/img/icon-x.png')} />
                       
                       <Text>{rowData}</Text>
                       </View>}
                />   
                </View>



                <View style={styles.addFeed}>
            
                <TextInput
            style={styles.addInput}
            onChangeText={(addText) => this.setState({addText})}
            value={this.state.addText}/>

            
            <TouchableHighlight onPress={(this._addFeed.bind(this))} style={styles.addButton} underlayColor="#F5FCFF">
            <Image style={styles.addIcon} source={require('./asserts/img/icon-add.png')} />
            </TouchableHighlight>


                
                </View>
                <Text style={styles.errMsg}>
                {this.state.errMsg}
            </Text>

            

                

                
            </View>
        );
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
    errMsg: {
        flex: 1,
        color: 'red'
    },
    feedItem: {
        flex: 1,
        flexDirection: 'row'
    },
    xIcon: {
        width: 30,
        height: 30,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    }
});

module.exports = ListScreen;
