import React from 'react'
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import { Actions } from 'react-native-router-flux'
import { MEMES_API_ENPOINT } from '../constant';


const NavSidebar = () => {
  const onNavItemPressed = (categoryObj) => {
    if (categoryObj && categoryObj.key) {
      Actions.home({ activeCategory: categoryObj.key });
    }
    Actions.drawerClose();
  }
  return (
    <View style={styles.mainStyle}>
      <TouchableOpacity onPress={() => Actions.drawerClose()}>
        <Image source={require('../image/back.png')}
          style={{ width: 20, height: 15, marginTop: 10, marginLeft: 5 }} />
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <TouchableOpacity style={{ borderRadius: 40, width: 50, height: 50 }}>
          <Image source={require('../image/signin.png')}
            style={{ height: 38, width: 38, marginLeft: 6, borderWidth: 1, borderColor: 'black', borderRadius: 38 }} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity >
            <Text style={{ color: 'black', marginLeft: 10, marginTop: 10, fontSize: 16 }}>Sign-In</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={{ color: 'black', marginLeft: 30, marginTop: 10, fontSize: 16 }}>Log-In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <TouchableOpacity>
          <Image source={require('../image/home.png')} style={{ height: 25, width: 25, marginLeft: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavItemPressed(MEMES_API_ENPOINT.DEFAULT)}>
          <Text style={{ fontSize: 20, color: 'black', marginLeft: 10 }}>Home</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{ marginLeft: 7, fontSize: 20, color: 'black', marginTop: 15 }}>Category:-</Text>
      </View>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Image source={require('../image/girl.png')}
              style={{ height: 50, width: 50, marginTop: 10, marginLeft: 4 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onNavItemPressed(MEMES_API_ENPOINT.BOY)}>
            <Text 
            style={{ marginTop: 23, color: 'black', fontSize: 15, marginLeft: 10 }}>Girl</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Image source={require('../image/boy.png')}
              style={{ height: 50, width: 50, marginTop: 10, marginLeft: 6 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ marginTop: 23, color: 'black', fontSize: 15, marginLeft: 10 }}>Boy</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Image source={require('../image/pubg.png')}
              style={{ height: 50, width: 50, marginTop: 10, marginLeft: 7 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ marginTop: 23, color: 'black', fontSize: 15, marginLeft: 10 }}>PUBG</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Image source={require('../image/animal.png')} style={{ height: 55, width: 55, marginTop: 10 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ marginTop: 23, color: 'black', fontSize: 15, marginLeft: 6 }}>Animals</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Image source={require('../image/movies.png')} style={{ height: 45, width: 45, marginTop: 10, marginLeft: 5 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ marginTop: 23, color: 'black', fontSize: 15, marginLeft: 10 }}>Moveis & TV</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Image source={require('../image/comic.png')} style={{ height: 45, width: 45, marginTop: 10, marginLeft: 5 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ marginTop: 23, color: 'black', fontSize: 15, marginLeft: 10 }}>Comic & Cartoon</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Image source={require('../image/bestie.png')}
              style={{
                height: 45, width: 45, marginTop: 10, marginLeft: 5,
                borderRadius: 25, borderWidth: 1, borderColor: 'black'
              }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ marginTop: 23, color: 'black', fontSize: 15, marginLeft: 10 }}>Bestie</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Image source={require('../image/celeb.png')}
              style={{
                height: 45, width: 45, marginTop: 10, marginLeft: 5,
                borderRadius: 25, borderWidth: 1, borderColor: 'black'
              }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ marginTop: 23, color: 'black', fontSize: 15, marginLeft: 10 }}>Celebrity</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Image source={require('../image/anime.png')}
              style={{ height: 45, width: 45, marginTop: 10, marginLeft: 5, }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ marginTop: 23, color: 'black', fontSize: 15, marginLeft: 10 }}>Anime</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Image source={require('../image/kids.png')}
              style={{ height: 45, width: 45, marginTop: 10, marginLeft: 5, }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ marginTop: 23, color: 'black', fontSize: 15, marginLeft: 10 }}>Kids</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>

  )
}
const styles = {
  mainStyle: {
    backgroundColor: '#ffbd39',
    flex: 1,
  }
}

export default NavSidebar;