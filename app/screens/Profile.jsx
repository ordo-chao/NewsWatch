import { StyleSheet, Text, View, StatusBar, Pressable, ScrollView, Image , Linking , ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import Navbar from '../Components/Navbar';
import Card from '../Components/Card';
import Poll from '../Components/Poll';
import Post from '../Components/Post';

import {
  useNavigation,
} from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();
    const [filter, setFilter] = useState('Popular');
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="black"
          translucent={true}
        />
        <ImageBackground source={require('../../Images/backgroundImage.jpg')} style={styles.image} >
          <Pressable onPress={() => navigation.navigate('Settings')}><Feather name="settings" size={25} color="white" style={styles.settings} /></Pressable>
        </ImageBackground>
        <View>
          <Image source={require('../../Images/Person.png')} style={styles.avatar} />
          <Text style={styles.title} >Ordo-Chao</Text>
          <View style={styles.social} >
            <View style={styles.socials} >
              <Pressable onPress={() => Linking.openURL('https://facebook.com')} ><Entypo name="facebook" size={25} color="black" /></Pressable>
              <Pressable><AntDesign name="instagram" size={25} color="black" /></Pressable>
              <Pressable><MaterialIcons name="tiktok" size={25} color="black" /></Pressable>
              {/* <Pressable><AntDesign name="wechat" size={25} color="black" /></Pressable> */}
              <Pressable><FontAwesome name="snapchat-ghost" size={25} color="black" /></Pressable>
              <Pressable><Ionicons name="logo-twitter" size={25} color="black" /></Pressable>
              {/* <Pressable><MaterialCommunityIcons name="pinterest" size={25} color="black" /></Pressable>
              <Pressable><MaterialCommunityIcons name="discord" size={25} color="black" /></Pressable>
              <Pressable><Entypo name="linkedin" size={25} color="black" /></Pressable>
              <Pressable><MaterialCommunityIcons name="reddit" size={25} color="black" /></Pressable>
              <Pressable><FontAwesome5 name="telegram" size={25} color="black" /></Pressable> */}
            </View>
          </View>
        </View>

        <ScrollView style={styles.filters} horizontal={true} >
          <Pressable onPress={() => setFilter('Popular')} ><Text style={filter === 'Popular' ? styles.Activefilter : styles.filter} >Popular</Text> <View style={filter === 'Popular' ? styles.underline : styles.null} /></Pressable>
          <Pressable onPress={() => setFilter('All')} ><Text style={filter === 'All' ? styles.Activefilter : styles.filter}>All</Text> <View style={filter === 'All' ? styles.underline : styles.null} /> </Pressable>
          <Pressable onPress={() => setFilter('Politics')} ><Text style={filter === 'Politics' ? styles.Activefilter : styles.filter}>Politics</Text> <View style={filter === 'Politics' ? styles.underline : styles.null} /></Pressable>
          <Pressable onPress={() => setFilter('Tech')} ><Text style={filter === 'Tech' ? styles.Activefilter : styles.filter}>Tech</Text> <View style={filter === 'Tech' ? styles.underline : styles.null} /> </Pressable>
          <Pressable onPress={() => setFilter('Healthy')} ><Text style={filter === 'Healthy' ? styles.Activefilter : styles.filter}>Healthy</Text> <View style={filter === 'Healthy' ? styles.underline : styles.null} /></Pressable>
          <Pressable onPress={() => setFilter('Science')} ><Text style={filter === 'Science' ? styles.Activefilter : styles.filter}>Science</Text> <View style={filter === 'Science' ? styles.underline : styles.null} /></Pressable>
        </ScrollView>

                <ScrollView style={styles.content} >
                  <View style={styles.cards} >
                    <Card />
                  </View>
                  <Poll isVideo={false}  />
                  <Post isVideo={false} />
                  <Post isVideo={true} />
                  <View style={styles.space}  />
                </ScrollView>
        <Navbar />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -70,
    marginBottom: 5,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    color: 'black',
    width: '100%',
    marginBottom: 5,
    textAlign: 'center',
  },
  social: {
    alignItems: 'center',
    gap: 5,
    marginTop: 10,
  },
  socialTitle: {
    fontSize: 15,
    fontWeight: 500,
    color: 'black',
  },
  socials: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    flexWrap: 'wrap',
  },
    filters:
  {
    marginTop: 20,
    marginBottom: 10,
    display: 'flex',
    gap: 10,
    maxHeight: 30,
  },
  filter:
  {
    fontSize: 12,
    color: 'rgb(93, 94, 95)',
    marginRight: 30,
  },
  Activefilter:
  {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
    marginRight: 30,
  },
  underline:
  {
    width: '30%',
    height: 2,
    backgroundColor: 'rgb(0, 162, 255)',
    marginTop: 5,
    borderRadius: 50,
  },
    content:
  {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    height: '67%',
    width: '100%',
    paddingBottom: 200,
    padding: 10,
  },
  cards:
  {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    height: 200,
  },
  space:
  {
    height: 70,
  },
  settings:
  {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default App;
