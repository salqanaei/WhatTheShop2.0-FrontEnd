import React, { Component } from "react";
import { Audio } from "expo-av";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Icon } from "native-base";

const styles = StyleSheet.create({
  controls: {
    flexDirection: "row"
  },
  control: {
    margin: 20
  }
});
export default class Sound extends React.Component {
  state = {
    isPlaying: false,
    playbackInstance: null,
    currentIndex: 0,
    volume: 1.0,
    isBuffering: false
  };
  async componentDidMount() {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: true
      });
      this.loadAudio();
      console.log("Sound", this.props.guitar.sound);
    } catch (e) {
      console.log(e);
    }
  }
  async loadAudio() {
    const { currentIndex, isPlaying, volume } = this.state;
    try {
      const playbackInstance = new Audio.Sound();
      const source = {
        uri: this.props.guitar.sound
      };
      const status = {
        shouldPlay: isPlaying,
        volume
      };
      playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
      await playbackInstance.loadAsync(source, status, false);
      this.setState({ playbackInstance });
    } catch (e) {
      console.log(e);
    }
  }
  onPlaybackStatusUpdate = status => {
    this.setState({
      isBuffering: status.isBuffering
    });
  };
  handlePlayPause = async () => {
    const { isPlaying, playbackInstance } = this.state;
    isPlaying
      ? await playbackInstance.pauseAsync()
      : await playbackInstance.playAsync();
    this.setState({
      isPlaying: !isPlaying
    });
  };
  render() {
    return (
      <View style={styles.controls}>
        <TouchableOpacity style={styles.control} onPress={this.handlePlayPause}>
          <Icon type="AntDesign" name="caretright" size={48} color="#444" />
        </TouchableOpacity>
      </View>
    );
  }
}
