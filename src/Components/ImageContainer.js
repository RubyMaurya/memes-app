import React from 'react'
import {View,Image} from 'react-native'

const ImageContainer=()=>{
    return(
    <View style={styles.ImageParentStyle}>
    <Image source={require('../image/emoji.gif')}/>
    </View>
    )
}
const styles={
    ImageStyle:{
        height:300,
        width:300,
    },
    ImageParentStyle:{
     MarginTop:10,
     alignSelf:'center',
    },
}
export default ImageContainer