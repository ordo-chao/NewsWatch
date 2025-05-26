import { StyleSheet, Text, View, StatusBar, ScrollView, Pressable, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import VideoPlayer from 'react-native-video-player';
import React, { useRef } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';


import {
  useNavigation,
} from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();
  const playerRef = useRef(null);
  const [isVideo, setVideo] = useState(true);
  const [isLike, setLike] = useState(false);
  const [isBookmark, setBookmark] = useState(false);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="black"
          translucent={true}
        />
        <View style={styles.header} >
          <AntDesign name="left" size={25} color="black" onPress={() => navigation.navigate('Home')} />
          <View style={styles.headerIcons} >
            <Pressable onPress={() => setBookmark(!isBookmark)} ><FontAwesome name={isBookmark ? 'bookmark' : 'bookmark-o'} size={25} color={isBookmark ? 'rgb(0, 162, 255)' : 'black'} /></Pressable>
            <Feather name="share" size={25} color="black" />
          </View>
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
          <Text style={styles.Title} >technology, gadgets, consumer electronics</Text>
          <View style={styles.personTime} >
            <View style={styles.person} >
              <Image source={require('../../Images/Person.png')} style={styles.personImage} />
              <Text style={styles.personName} >By Ordo Chao</Text>
            </View>
            <Text style={styles.time} >1 hr ago</Text>
          </View>
          <View style={styles.stats}>
            <View style={styles.statsView} >
              <MaterialCommunityIcons name="comment-outline" size={20} color="black" />
              <Text style={styles.statsText} >8 Comments</Text>
            </View>
            <View style={styles.statsView}>
              <Pressable onPress={() => setLike(!isLike)} ><FontAwesome name={isLike ? 'heart' : 'heart-o'} size={20} color={isLike ? 'red' : 'black'} /></Pressable>
              <Text style={styles.statsText} >8 likes</Text>
            </View>
            <View style={styles.statsView}>
              <AntDesign name="sharealt" size={20} color="black" />
              <Text style={styles.statsText}> Share</Text>
            </View>
          </View>

          <Text style={styles.blogText} >
            Launched by Peter Rojas, Engadget is a technology blog providing reviews of gadgets and consumer electronics as well as the latest news in the tech world.
            It also showcases the best tech deals, helping people make the best gadget purchases according to their needs.
            The blog’s simple black-and-white theme gives it a sleek look fitting for a technology blog.
            Upon accessing the website, visitors’ eyes are immediately drawn to the collage of photos and headlines of their most recent and popular articles.
            Further down the page, more article headlines are sorted by the most recent to the oldest and accompanied by a picture and sentence summarizing the article’s content. This lets visitors know that the blog is regularly updated with a variety of content.
                        Launched by Peter Rojas, Engadget is a technology blog providing reviews of gadgets and consumer electronics as well as the latest news in the tech world.
            It also showcases the best tech deals, helping people make the best gadget purchases according to their needs.
            The blog’s simple black-and-white theme gives it a sleek look fitting for a technology blog.
            Upon accessing the website, visitors’ eyes are immediately drawn to the collage of photos and headlines of their most recent and popular articles.
            Further down the page, more article headlines are sorted by the most recent to the oldest and accompanied by a picture and sentence summarizing the article’s content. This lets visitors know that the blog is regularly updated with a variety of content.
          </Text>
        </View>
        </ScrollView>
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
