import React,{Component} from 'react'
import {Text,View,Image,TouchableOpacity} from 'react-native'
import {Actions} from 'react-native-router-flux'

const Footer=(props)=>{
    
    const footerIconStyles = {
        all: styles.icon_style,
        trending: styles.icon_style,
        fav: styles.icon_style,
        download: styles.icon_style
    };

    footerIconStyles[props.currentPage] = styles.icon_2style;

    return(
    <View style={styles.footerContentStyle}>
     <TouchableOpacity  style={{marginLeft:7,paddingTop:4}} onPress={()=>{props.onTabPressed('all');}}>
     <View>
     <Image source={require('../image/all.png')} style={[styles.icon_1style,footerIconStyles.all]}/>
     <Text style={[styles.iconTextStyle,footerIconStyles.all]}>All-meme</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>{props.onTabPressed('trending');}} style={{marginLeft:35,paddingTop:4}}>
     <View>
     <Image source={require('../image/trending.png')} style={[styles.icon_1style,footerIconStyles.trending]}/>
     <Text style={[{marginLeft:0,fontWeight:'bold',color:'black'},footerIconStyles.trending]}>Trending</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>{props.onTabPressed('fav');}} style={{marginLeft:35,paddingTop:1}}>
     <View>
     <Image source={require('../image/fav.png')} style={[styles.fav_style,footerIconStyles.fav]}/>
     <Text 
     style={[{marginLeft:0,fontWeight:'bold',color:'black'},footerIconStyles.fav]}>
     Favourite</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity style={{marginLeft:35,paddingTop:4}}
     onPress={()=>{props.onTabPressed('download');}}>
     <View>
     <Image source={require('../image/download.png')} style={[styles.icon_1style,footerIconStyles.download]}/>
     <Text style={[{marginLeft:0,fontWeight:'bold',color:'black'},footerIconStyles.download]}>My-Meme
     </Text>
     </View>
     </TouchableOpacity>
    </View>
    )
}
const styles={
    footerContentStyle:{
        width:'100%',
        height:55,
        backgroundColor:'#ffbd39',   
        flexDirection:'row' 
    },
    icon_1style:{
        width:26,
        height:26,
        marginLeft:12,
        
    },
    icon_style:{},
    icon_2style:{
        color:'#fe5000',
        tintColor:'#fe5000',
        
    },
    
    iconTextStyle:{
        marginLeft:0,
        fontWeight:'bold',
        color:'black'
    },
    fav_style:{
        height:30,
        width:30,
        marginLeft:8,
        paddingTop:0,
    }
}
export default Footer;