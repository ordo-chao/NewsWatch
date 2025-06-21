import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Navbar from '../Components/Navbar';
import Card from '../Components/Card';
import Poll from '../Components/Poll';
import Post from '../Components/Post';

import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();
  const [filter, setFilter] = useState('Popular');
  const [notifications, setNotifications] = useState(false);
  const [loading, setLoading] = useState(true);
  const [Data, setData] = useState([]);

  const getPost = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://192.168.88.58:3003/posts/getPosts/');
      const data = await response.json();
      console.log(data);
      if(data.message === 'No posts found') {setData([]); setLoading(false); return;}
      setData(data.message);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="black"
          translucent={true}
        />
        <>
          {loading ? (
            <ActivityIndicator size="large" color="black" />
          ) : (
            <>
              <View style={styles.header}>
                <View style={styles.left}>
                  <Pressable>
                    <Entypo name="menu" size={25} color="rgb(0, 162, 255)" />
                  </Pressable>
                  <Pressable
                    onPress={() => navigation.navigate('City')}
                    style={styles.location}
                  >
                    <Entypo name="location-pin" size={20} color="black" />
                    <Text style={styles.locationText}>G.T Road, Kolkata</Text>
                  </Pressable>
                </View>
                <View style={styles.right}>
                  <Pressable style={styles.star}>
                    <View style={styles.starIcon}>
                      <AntDesign name="star" size={15} color="yellow" />
                    </View>
                    <Text style={styles.starText}>599</Text>
                  </Pressable>
                  <Pressable onPress={() => navigation.navigate('Chats')}>
                    <MaterialIcons name="message" size={25} color="rgb(0, 162, 255)" />
                  </Pressable>
                </View>
              </View>

              <ScrollView style={styles.filters} horizontal={true}>
                {['Popular', 'All', 'Politics', 'Tech', 'Healthy', 'Science'].map((item) => (
                  <Pressable key={item} onPress={() => setFilter(item)}>
                    <Text style={filter === item ? styles.Activefilter : styles.filter}>
                      {item}
                    </Text>
                    {filter === item ? <View style={styles.underline} /> : null}
                  </Pressable>
                ))}
              </ScrollView>

              <ScrollView style={styles.content}  >
                {/* <View style={styles.cards}>
            <Card />
          </View>
          <Poll isVideo={false} /> */}
                {Data?.length > 0 ? (
                  Data.map((item, index) => (
                    <Post key={item.id || index} post={item} isVideo={false} />
                  ))
                ) : (
                  <Text>No posts found.</Text>
                )}

                <View style={{ height: 50 }} />
              </ScrollView>

              <Navbar />
            </>
          )}
        </>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  locationText: {
    fontSize: 12,
    color: 'rgb(93, 94, 95)',
    fontWeight: 'bold',
  },
  star: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
    borderWidth: 0.5,
    borderColor: 'rgb(54, 54, 53)',
    borderRadius: 50,
    padding: 4,
    width: 70,
  },
  starIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'rgb(255, 196, 0)',
  },
  starText: {
    fontSize: 12,
    color: 'rgb(93, 94, 95)',
  },
  filters: {
    marginTop: 20,
    marginBottom: 10,
    maxHeight: 30,
  },
  filter: {
    fontSize: 12,
    color: 'rgb(93, 94, 95)',
    marginRight: 30,
  },
  Activefilter: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
    marginRight: 30,
  },
  underline: {
    width: '30%',
    height: 2,
    backgroundColor: 'rgb(0, 162, 255)',
    marginTop: 5,
    borderRadius: 50,
  },
  content: {
    marginTop: 10,
    flexDirection: 'column',
    gap: 10,
    height: '67%',
    width: '100%',
    paddingBottom: 100,
  },
  cards: {
    flexDirection: 'row',
    gap: 10,
    height: 200,
  },
});

export default App;
