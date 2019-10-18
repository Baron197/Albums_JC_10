import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] }

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => {
                // console.log(res.data)
                this.setState({ albums: res.data })
            }).catch(err => {
                console.log(err.response)
            })
    }

    renderListAlbums = () => {
        return this.state.albums.map((album, index) => {
            return <AlbumDetail key={index} album={album} />
        })
    }

    render() {
        return (
            <ScrollView>
                {this.renderListAlbums()}
            </ScrollView>
        )
    }
}

export default AlbumList;
