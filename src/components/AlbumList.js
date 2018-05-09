import React, { Component } from "react";
import { View, Text } from "react-native";

class AlbumList extends Component {
  async componentWillMount() {
    const response = await fetch(
      "https://rallycoding.herokuapp.com/api/music_albums"
    );
    const data = await response.json();
    console.log(data);
  }
  render() {
    return (
      <View>
        <Text>Album List!!</Text>
      </View>
    );
  }
}

export default AlbumList;
