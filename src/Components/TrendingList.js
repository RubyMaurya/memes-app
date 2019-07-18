import React, { Component } from 'react';
import { ScrollView, ActivityIndicator,View,} from 'react-native';
import axios from 'axios';
import TrendingDetail from '../Components/AlbumDetail';
import ScrollHorizontal from '../Components/ScrollHorizontal'
import {MEMES_API_ENPOINT} from '../constant';

class TrendingList extends Component {
    state = {
        albums: [],
        pageStatus: 'loading' ,
        isLiked:false
        
    };
    
    async componentWillMount() {
        const {parentCategory} = this.props;
        if (parentCategory)
        if (
            parentCategory &&
            MEMES_API_ENPOINT[parentCategory] &&
            MEMES_API_ENPOINT[parentCategory].apiEndPoints &&
            MEMES_API_ENPOINT[parentCategory].apiEndPoints.trending &&
            MEMES_API_ENPOINT[parentCategory].apiEndPoints.trending.length
        ) {
        axios.get(MEMES_API_ENPOINT[parentCategory].apiEndPoints.trending).
            then(response => 
                this.setState({
                    albums: response.data,
                    pageStatus: 'success' 
                })
            );
        }
    }
    renderAlbums() {
        return this.state.albums.map(album => 
            <TrendingDetail key={album._id} album={album}  />
        );
    }
    render() {
        console.log(this.state);
        return (
            <View>
            <ScrollHorizontal />
            <ScrollView style={{ height: '100%' }}>
                 {this.state.pageStatus === 'loading' && <ActivityIndicator style={{marginTop:200}} size="large" color="#0000ff" />}
                {this.state.pageStatus === 'success' && this.renderAlbums()}
            </ScrollView>
            </View>
        )
    }
}
export default TrendingList;