import React, { Component } from 'react';
import { ScrollView, ActivityIndicator,View } from 'react-native';
import axios from 'axios';
import AlbumDetail from '../Components/AlbumDetail';
import ScrollHorizontal from '../Components/ScrollHorizontal'
import {MEMES_API_ENPOINT} from '../constant';

class AlbumList extends Component {
    constructor(props){
        super(props)
        this.state = {
            albums: [],
            pageStatus: 'loading' ,
            isLiked:false,
            currentCategory:props.activeCategory
        };
    }
    onHeaderTabPressed = (tabName) => {
        this.setState({
          currentCategory: tabName
        }, async () => await this.setAlbumData());
    }
    
    async componentDidMount() {
        await this.setAlbumData();
    }

    setAlbumData = async() => {
        const {currentCategory} = this.state;
        this.setState({
            pageStatus: 'loading'
        });
        if (
            currentCategory &&
            MEMES_API_ENPOINT[currentCategory] &&
            MEMES_API_ENPOINT[currentCategory].apiEndPoints &&
            MEMES_API_ENPOINT[currentCategory].apiEndPoints.default &&
            MEMES_API_ENPOINT[currentCategory].apiEndPoints.default.length
        ) {
            axios.get(MEMES_API_ENPOINT[currentCategory].apiEndPoints.default).then(response => 
                this.setState({
                    albums: response.data,
                    pageStatus: 'success' 
                })
            );
        }
 
    } 

    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album._id} album={album}  />
        );
    }
    render() {
    

        
        console.log(this.state);
        return (
            <View>
            <ScrollHorizontal 
            currentCategory={this.state.currentCategory} onTabPressed={this.onHeaderTabPressed}/>
            <ScrollView style={{ height: '100%' }}>
                 {this.state.pageStatus === 'loading' && <ActivityIndicator style={{marginTop:200}} size="large" color="#0000ff" />}
                {this.state.pageStatus === 'success' && this.renderAlbums()}
            </ScrollView>
            </View>
        )
    
}
componentDidUpdate(prevProps, prevState) {
    if(prevProps.activeCategory !== this.props.activeCategory) {
        this.setState({
            currentCategory: this.props.activeCategory
        }, async() => await this.setAlbumData());
    }
}
}
export default AlbumList