import { StyleSheet, Text, View, Dimensions, Image, Pressable, ActivityIndicator } from 'react-native';
import VideoPlayer from 'react-native-video-player';
import React, { useRef, useState } from 'react';
const { width } = Dimensions.get('window');
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import {
  useNavigation,
} from '@react-navigation/native';



const App = (props) => {
  const navigation = useNavigation();
  const playerRef = useRef(null);
  const [isLike, setLike] = useState(false);
  const data = props.post;
  const [likeLoader, setlikeLoader] = useState(false);


  const limitWords = (text, limit) => {
    const words = text.trim().split(/\s+/);
    return words.slice(0, limit).join(' ') + (words.length > limit ? '...' : '');
  };

  const likePost = async () => {
    try {
      setlikeLoader(true);
      console.log(isLike);
      let response;
      if (!isLike) {
        response = await fetch('http://192.168.88.58:3003/likes/like/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            {
              post_id: data.id,
              user_id: data.user_id,
            }),
        });
      } else {
        response = await fetch('http://192.168.88.58:3003/likes/unlike/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            {
              post_id: data.id,
              user_id: data.user_id,
            }),
        });
      }

      const text = await response.text();
      const result = text ? JSON.parse(text) : {};
      if (result.message === 'Post liked') { setLike(true); }
      else { setLike(false); }
      setlikeLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

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
      <View style={styles.title} >
        <Text style={styles.titleText} >{data.header}</Text>
        <SimpleLineIcons name="options-vertical" size={12} color="black" />
      </View>
      <View style={styles.Personal} >
        <Image source={require('../../Images/Person.png')} style={styles.person} />
        <Text style={styles.personText} >{data.username}</Text>
        {data.role.includes('Verfied') ? <MaterialIcons name="verified" size={15} color="rgb(0, 162, 255)" /> : null}
      </View>
      <Text style={styles.description} onPress={() => navigation.navigate('Blog', { post: data , like : isLike , onLikeToggle : (newState) => {setLike(newState);}})} >
        {limitWords(data.article, 30)}
        <Text style={styles.read}> Read more</Text>
      </Text>
      <View style={styles.bottom} >
        <View style={styles.icons} >
          {likeLoader ?
            <ActivityIndicator size="small" color="rgb(0, 162, 255)" /> :
            <Pressable onPress={() => { likePost(); }} ><FontAwesome name={isLike ? 'heart' : 'heart-o'} size={20} color={isLike ? 'red' : 'rgb(0, 162, 255)'} /></Pressable>
          }
          <Pressable onPress={() => {props.setComment(true);}} ><FontAwesome name={'comment-o'} size={20} color={'rgb(0, 162, 255)'} /></Pressable>
          <MaterialCommunityIcons name="share-outline" size={20} color="rgb(0, 162, 255)" />
          {data.type === 'sponsored' ?
            <View style={styles.sponsor} >
              <MaterialCommunityIcons name="bullhorn-outline" size={20} color="rgb(247, 191, 108)" />
              <Text style={styles.sponsorText} >Sponsored Post</Text>
            </View> : null
          }
        </View>
        <View style={styles.stats} >
          <Text style={styles.statsText} >{data.comments} comments</Text>
          <View style={styles.dot} />
          <Text style={styles.statsText} >{data.views} Views</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      height: 'auto',
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: 'rgb(241, 241, 241)',
      marginBottom: 20,
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
    },
    title: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      paddingBottom: 5,
    },
    titleText: {
      fontSize: 19,
      fontWeight: 500,
      color: 'black',
      width: '95%',
    },
    person: {
      width: 25,
      height: 25,
      borderRadius: 20,
    },
    Personal: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
      padding: 10,
      paddingTop: 0,
      paddingBottom: 5,
    },
    personText: {
      fontSize: 12,
      fontWeight: 'normal',
      color: 'black',
    },
    description: {
      fontSize: 12,
      fontWeight: 'normal',
      color: 'black',
      padding: 10,
      paddingTop: 0,
    },
    read: {
      fontSize: 12.5,
      fontWeight: 'normal',
      color: 'rgb(0, 162, 255)',
    },
    icons: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    sponsor: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    sponsorText: {
      fontSize: 10,
      fontWeight: 'normal',
      color: 'rgb(247, 191, 108)',
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
      padding: 10,
      paddingTop: 0,
    },
    statsText: {
      fontSize: 8,
      fontWeight: 'normal',
      color: 'black',
    },
    dot: {
      width: 5,
      height: 5,
      borderRadius: 5,
      backgroundColor: 'black',
    },
    video: {
      width: width - 20,  // full width minus some padding
      height: (width - 20) * (9 / 16), // 16:9 aspect ratio
      borderRadius: 10,
      overflow: 'hidden',
    },
  });

App.propTypes = {
  isVideo: PropTypes.bool.isRequired,
  post: PropTypes.object.isRequired,
  setComment: PropTypes.func.isRequired,
  comment: PropTypes.bool.isRequired,
};

export default App;
