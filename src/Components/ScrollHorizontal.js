import React from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { fonts } from '../utility/fonts'
import { MEMES_API_ENPOINT } from '../constant';
import { Actions } from 'react-native-router-flux'


const ScrollHorizontal = (props) => {
    const onNavItemPressed = (categoryObj) => {
        if (categoryObj && categoryObj.key) {
          Actions.home({ activeCategory: categoryObj.key });
        }
    }    
    return (
        <ScrollView style={styles.ScrollViewStyle}
            directionalLockEnabled={false}
            horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.ViewStyle} 
            onPress={() => onNavItemPressed(MEMES_API_ENPOINT.CRICKET)}>
                <Text style={styles.TextStyle}>#Cricket</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ViewStyle}>
                <Text style={styles.TextStyle}>#Bollywood</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ViewStyle}>
                <Text style={styles.TextStyle}>#Tv-series</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ViewStyle}>
                <Text style={styles.TextStyle}>#Actors</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ViewStyle}>
                <Text style={styles.TextStyle}>#Movies</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ViewStyle}>
                <Text style={styles.TextStyle}>#Hollywood</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ViewStyle}>
                <Text style={styles.TextStyle}>#School-life</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ViewStyle}>
                <Text style={styles.TextStyle}>#RelationShips</Text>
            </TouchableOpacity>
        </ScrollView>

    )

}
const styles = {
    ScrollViewStyle: {
        marginVertical: 15,
        height: 60
    },
    ViewStyle: {
        width: 110,
        height: 37,
        borderWidth: 3,
        borderColor: '#ffbd39',
        backgroundColor: '#ffbd39',
        borderRadius: 30,
        marginRight: 15
    },
    TextStyle: {
        alignSelf: 'center',
        //marginTop: 6,
        fontSize: 16,
        color: 'black',
        fontFamily: fonts.FrancoisOne,
        justifyContent:'center'
    }
}
export default ScrollHorizontal;