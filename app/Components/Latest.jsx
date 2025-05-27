import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import VideoPlayer from 'react-native-video-player';
import React, { useRef } from 'react';
const { width } = Dimensions.get('window');
import PropTypes from 'prop-types';


const App = (props) => {
    const playerRef = useRef(null);

  return (
    <View source={require('../../Images/News.jpeg')} style={styles.container}>
      {props.isVideo ?
      <VideoPlayer
        ref={playerRef}
        endWithThumbnail
        thumbnail={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        }}
        source={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        onError={(e) => console.log('Video error:', e)}
        showDuration={true}
        autoplay={false}     // change to true if you want auto-play
        loop={false}         // change to true to loop video
        style={styles.video} // custom styles for the video player
      /> : <Image source={require('../../Images/News.jpeg')} style={styles.image} />
      }
      <Text style={styles.title} >Technology, science, entertainment</Text>
      <View style={styles.bottom} >
        <View style={styles.stats} >
          <Text style={styles.Channel} >Nature TV </Text>
          <View style={styles.dot} />
          <Text style={styles.Time} > 4hr ago</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      // height: 370,
      width: '90%',
      borderRadius: 10,
      overflow: 'hidden',
      marginBottom: 20,
      marginRight: 15,
    },
    image: {
      width: '100%',
      height: 150,
      resizeMode: 'cover',
    },
    title: {
      fontSize: 18,
      fontWeight: 500,
      color: 'black',
      width: '100%',
      marginTop: 5,
      marginBottom: 5,
    },
    stats: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    bottom: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    dot: {
      width: 5,
      height: 5,
      borderRadius: 10,
      backgroundColor: 'rgb(109, 109, 109)',
    },
      video: {
    width: width - 70,  // full width minus some padding
    height: (width - 95) * (9 / 16), // 16:9 aspect ratio
    borderRadius: 10,
    overflow: 'hidden',
  },
  Channel: {
    fontSize: 12,
    color: 'rgb(117, 172, 255)',
  },
  Time: {
    fontSize: 12,
    color: 'rgb(183, 183, 184)',
  },
  });

App.propTypes = {
  isVideo: PropTypes.bool.isRequired,
};

export default App;
