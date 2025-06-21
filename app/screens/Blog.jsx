import { StyleSheet, Text, View, StatusBar, ScrollView, Pressable, Image, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import VideoPlayer from 'react-native-video-player';
import React, { useRef } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import Comments from '../Components/Comments';



import {
  useNavigation,
  useRoute,
} from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();
  const playerRef = useRef(null);
  const [isVideo, setVideo] = useState(true);
  const [isBookmark, setBookmark] = useState(false);
  const route = useRoute();
  const post = route.params;
  const onLikeToggle = route.params.onLikeToggle;
  const data = post.post;
  const [isLike, setLike] = useState(post.like);
  const [likeLoader, setlikeLoader] = useState(false);
  const [isComment, setComment] = useState(true);

  const toggleLike = () => {
    const updatedLike = !isLike;
    setLike(updatedLike);  // Update UI in Blog screen

    if (onLikeToggle) {
      onLikeToggle(updatedLike); // Notify previous screen to update its like state
    }
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
              post_id: 2,
              user_id: 1,
            }),
        });
      } else {
        response = await fetch('http://192.168.88.58:3003/likes/unlike/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            {
              post_id: 2,
              user_id: 1,
            }),
        });
      }

      const text = await response.text();
      const data = text ? JSON.parse(text) : {};
      if (data.message === 'Post liked') { setLike(true); }
      else { setLike(false); }
      setlikeLoader(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="black"
          translucent={true}
        />
        <View style={styles.header} >
          <View style={styles.headerIcons} >
            <Pressable onPress={() => setBookmark(!isBookmark)} ><FontAwesome name={isBookmark ? 'bookmark' : 'bookmark-o'} size={25} color={isBookmark ? 'rgb(0, 162, 255)' : 'black'} /></Pressable>
            <Feather name="share" size={25} color="black" />
          </View>
          <AntDesign name="close" size={25} color="black" onPress={() => navigation.goBack()} />
        </View>
        <ScrollView style={styles.blogContainer} >
          {isVideo ?
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
            /> : <Image source={require('../../Images/News.jpeg')} style={styles.blogImage} />
          }

          <View style={styles.blog} >
            <Text style={styles.Title} >{data.header}</Text>
            <View style={styles.personTime} >
              <View style={styles.person} >
                <Image source={require('../../Images/Person.png')} style={styles.personImage} />
                <Text style={styles.personName} >By {data.username}</Text>
              </View>
              <Text style={styles.time} >{new Date(data.createdat).toLocaleString('en-KE', {
                weekday: 'long',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })} </Text>
            </View>
            <View style={styles.stats}>
              <Pressable onPress={() => setComment(true)} >
                <View style={styles.statsView} >
                <MaterialCommunityIcons name="comment-outline" size={20} color="black" />
                <Text style={styles.statsText} >{data.comments} Comments</Text>
              </View>
              </Pressable>
              <View style={styles.statsView}>
                {likeLoader ?
                  <ActivityIndicator size="small" color="rgb(0, 162, 255)" /> :
                  <Pressable onPress={() => { likePost(); toggleLike(); }} ><FontAwesome name={isLike ? 'heart' : 'heart-o'} size={20} color={isLike ? 'red' : 'black'} /></Pressable>
                }
                <Text style={styles.statsText} >{data.likes + (isLike ? 1 : 0)} likes</Text>
              </View>
              <View style={styles.statsView}>
                <AntDesign name="sharealt" size={20} color="black" />
                <Text style={styles.statsText}> Share</Text>
              </View>
            </View>

            <Text style={styles.blogText} >
              {data.article}
            </Text>
          </View>
        </ScrollView>
          {isComment && <Comments setComment={setComment} />}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  headerIcons: {
    gap: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },
  blogImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  video: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  blog: {
    padding: 15,
  },
  Title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  personImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  person: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  personName: {
    fontSize: 12,
    fontWeight: 'normal',
    color: 'rgb(141, 141, 141)',
  },
  time: {
    fontSize: 12,
    fontWeight: 'normal',
    color: 'rgb(141, 141, 141)',
  },
  personTime: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    marginTop: 15,
  },
  statsView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  statsText: {
    fontSize: 12,
    fontWeight: 'normal',
    color: 'rgb(0, 0, 0)',
  },
  blogContainer:
  {
    flex: 1,
    backgroundColor: 'aqua',
  },
  blogText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: 'rgb(0, 0, 0)',
    marginTop: 15,
    lineHeight: 20,
  },
});

export default App;
