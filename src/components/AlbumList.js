import React, { Component } from "react";
import { View } from "react-native";
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
  state = { albums: [] };

  async componentWillMount() {
    const response = await fetch(
      "https://rallycoding.herokuapp.com/api/music_albums"
    );
    const data = await response.json();
    this.setState({
      albums: data
    });
  }

  renderAlbums() {
    const { albums } = this.state;
    return albums.map(album => <AlbumDetail key={album.title} album={album} />);
  }
  render() {
    console.log(this.state);
    return <View>{this.renderAlbums()}</View>;
  }
}

export default AlbumList;
