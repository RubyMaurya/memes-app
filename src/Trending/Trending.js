import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ScrollHorizontal from '../Components/ScrollHorizontal'
import TrendingList from '../Components/AlbumList';


class Trending extends Component {
  render() {
    return (
      <TrendingList/>

    );
  }
}

export default Trending;