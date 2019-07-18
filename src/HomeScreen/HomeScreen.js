import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import AlbumList from '../Components/AlbumList';
import TrendingList from '../Components/TrendingList'
import Fav from '../Components/Fav'
import Download from '../Components/Download'
import {MEMES_API_ENPOINT} from '../constant';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentPage:'all',
      activeCategory: props.activeCategory || MEMES_API_ENPOINT.DEFAULT.key
    };
  }

  componentDidMount() {
    if (this.props.activeCategory) {
      this.setState({
        currentPage: this.props.activeCategory
      });
    }
  }

   onFooterTabPressed = (tabName) => {
    this.setState({
      currentPage: tabName
    });
   }
  render() {
    const {currentPage, activeCategory} = this.state;
    const headerTitle = MEMES_API_ENPOINT[activeCategory].title || 'Home';
    return (
      <View style={{ justifyContent: "space-between", flex: 1 }}>
        <Header title={headerTitle} /> 
        <View style={{flex: 1}}>
          {currentPage === 'trending' && <TrendingList parentCategory={activeCategory} />}
         {currentPage==='all' && <AlbumList activeCategory={activeCategory}/>}
         {currentPage==='fav' && <Fav/>}
         {currentPage==='download' && <Download/>}
          
        </View>
        <Footer
          currentPage={this.state.currentPage}
          onTabPressed={this.onFooterTabPressed}
        />
      </View>

    );
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.activeCategory !== this.props.activeCategory) {
        this.setState({
            activeCategory: this.props.activeCategory,
            currentPage: 'all'
        });
    }
  }
}



export default HomeScreen;