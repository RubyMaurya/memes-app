import React,{Component} from 'react'
import {View,Modal,Text,TouchableHighlight} from 'react-native'


class Search extends Component{
    
    render(){
    return(
        <View style={styles.searchStyle}>
        <Modal
          animationType="slide"
          transparent
          landscape-left
          visible={this.state.modalVisible}
          >
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


const styles={
    searchStyle:{
        width:'100%',
        height:60
    }
}

export default Search