import React,{Component} from 'react'
import {View,Text,TouchableOpacity,ScrollView} from 'react-native'
import ImageContainer from '../Components/ImageContainer'
import {fonts} from '../utility/fonts'
import {Actions} from 'react-native-router-flux'
class InitialScreen extends Component{
    static navigationOptions = {header: null};
    
    render(){
        return(
          <ScrollView style={styles.ContainerStyle}>
          <Text style={styles.WelcomeStyle}>MeMeShORTS!</Text>
          <ImageContainer />
            <View style={styles.textStyle}>
            <TouchableOpacity style={styles.buttonClildrenStyle}>
          <Text style={styles.textChildren} >Login</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.buttonClildrenStyle}>
          <Text style={styles.textChildren}>Sign-Up</Text>
          </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.buttonStyle}
          onPress={() => {Actions.home(); }}>
          <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
          </ScrollView>

        )
    }
}
const styles={
    ContainerStyle:{
        flex:1,

    },
    WelcomeStyle:{
        fontSize:40,
        color:'black',
        marginTop:20,
        alignSelf:'center',
        marginBottom:40,
        fontFamily:fonts.KaushanScript
    },
    buttonStyle:{
        width:80,
        height:35,
        marginLeft:260,
        marginTop:80,

    },
    buttonText:{
        alignSelf:'center',
        paddingTop:0,
        fontSize:20,
        color:'black',
        fontFamily:fonts.FrancoisOne
    },
    textStyle:{
        flexDirection:'row',
    },
    buttonClildrenStyle:{
        marginLeft:60,
        marginTop:100,
        borderWidth:2,
        borderColor:'#ffbd39',
        height:80,
        width:80,
        borderRadius:5000,
        backgroundColor:'black',

    },
    textChildren:{
        fontSize:12,
        paddingTop:30,
        paddingLeft:18,
        color:'white',
        fontFamily:fonts.FrancoisOne,
    },
    
}

export default InitialScreen;
