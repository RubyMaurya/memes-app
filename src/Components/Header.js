//import libraries for making a components
import React, { Component } from 'react';
import { TextInput, View, Image, TouchableOpacity, BackHandler, Modal, Text } from 'react-native';
import { fonts } from '../utility/fonts';
import { Actions } from 'react-native-router-flux';
//import ImagePicker from 'react-native-image-picker';
import { RNS3 } from 'react-native-aws3';
import image from '../../imageFile/add.png'


//make a component

class Header extends Component {
    state = {
        modalVisible: false,
        avatarSource:null,
    };

    

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    setModalVisible2(visible) {
        this.setState({ modalVisible2: visible });
    }
    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
      }
    
      componentWillUnmount() {
        this.backHandler.remove()
      }
    
      handleBackPress = () => {
        if(this.state.modalVisible) {
            this.setState({modalVisible : false});
            return true;
        }
      }
       
      

    render() {
        const { textStyle, viewStyle, navStyle } = styles
        return (
            <View>
                {this.state.modalVisible &&
                    <Modal style={styles.searchStyle}
                        animationType="slide"
                        onRequestClose={() => {this.setState({modalVisible:false}) }}
                        transparent
                        landscape-left
                        visible={this.state.modalVisible}
                    >
                        <View style={{ marginTop: 3, backgroundColor: 'white',flexDirection:'row'}}>
                        <TouchableOpacity 
                        onPress={()=>{this.setModalVisible(!this.state.modalVisible);}} 
                        style={{marginLeft:10,marginTop:17,marginRight:30}}>
                        <Image source={require('../image/back.png')} style={{width:20,height:15,marginTop:5,marginLeft:5}}/>    
                        </TouchableOpacity>
                        <View style={{width:260,height:55}}>
                        <TextInput placeholder="search" style={{width:'100%',height:'100%' }} />
                        </View>
                            </View>
                            <TouchableOpacity
                            style={{backgroundColor: 'black', opacity: 0.6, flex: 1}}
                            onPress={()=>{this.setModalVisible(!this.state.modalVisible);}}>
                    </TouchableOpacity>
                        </Modal>}

                        {this.state.modalVisible2 &&
                    <Modal style={styles.searchStyle}
                        animationType="slide"
                        onRequestClose={() => {this.setState({modalVisible2:false}) }}
                        transparent
                        landscape-left
                        visible={this.state.modalVisible2}
                    >
                    <TouchableOpacity
                    style={{backgroundColor:'black',opacity:0.6,flex: 1}}
                    onPress={()=>{this.setModalVisible2(!this.state.modalVisible2);}}>
            </TouchableOpacity>
                        <View style={{width:'100%',height:120,backgroundColor:'#ffbd39'}}>
                        <Text style={{color:'black',fontSize:20}}>Share this App</Text>
                        <Text style={{color:'black',fontSize:20}}>Rate Us</Text>
                        </View>     
                        </Modal>}
                <View style={viewStyle}>

                    <TouchableOpacity onPress={() => Actions.drawerOpen()}>
                        <Image style={navStyle} source={require('../image/nav.png')} />
                    </TouchableOpacity>
                    <View style={{width:150}}>
                    <Text style={textStyle}>{this.props.title || 'Home'}</Text>
                    </View>
                    <TouchableOpacity style={styles.searchButton} onPress={() => { this.setModalVisible(true); }}>
                        <Image style={styles.searchImageStyle} source={require('../image/search.png')} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{ marginTop: 4,marginLeft:14 }}
                    onPress={() => { this.setModalVisible2(true); }}>
                        <Image source={require('../image/dots.png')} style={{ height: 23, width: 30 }} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = {
    viewStyle: {
        backgroundColor: '#ffbd39',
        height: 55,
        paddingTop: 5,
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowOffset: { width: 0, height: 6 },
        elevation: 2,
        position: 'relative',
        flexDirection: 'row'
    },
    textStyle: {
        fontSize: 17,
        color: 'black',
        marginTop: 5,
        //fontFamily: fonts.KaushanScript,
        marginLeft: 10,
    },
    navStyle: {
        width: 30,
        height: 20,
        marginLeft: 4,
        marginTop: 8,
    },
    searchImageStyle: {
        width: 30,
        height: 30,
        marginLeft:80,
    },
    searchButton: {
        marginTop: 3
    },
    searchStyle: {
        width: '100%',
        height: 60,
        backgroundColor: 'black',
        opacity: 8,
    }


}

//Make the component available to the other parts of the app
export default Header;