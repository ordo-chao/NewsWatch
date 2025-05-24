import { StyleSheet, Text, View, StatusBar , TextInput , Pressable , ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React , { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Navbar from '../Components/Navbar';


import {
  useNavigation,
} from '@react-navigation/native';

const App = () => {
const navigation = useNavigation();
const [filter , setFilter] = useState('Popular');
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="black"
          translucent={true}
        />
          <View style={styles.header} >
            <View style={styles.left} >
              <Entypo name="menu" size={25} color="rgb(0, 162, 255)" />
                <Pressable onPress={() => navigation.navigate('City')} style={styles.location} >
                  <Entypo name="location-pin" size={20} color="black" />
                  <Text style={styles.locationText} >G.T Road, Kolkata</Text>
                </Pressable>
              </View>
              <View style={styles.right} >
                <Pressable style={styles.star} >
                <View style={styles.starIcon} ><AntDesign name="star" size={15} color="yellow" /></View>
                <Text style={styles.starText} >599</Text>
              </Pressable>
                <Ionicons name="notifications-sharp" size={25} color="rgb(0, 162, 255)" />
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


      <Navbar />
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
  },
  right:
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
  },
  location: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  locationText:
  {
    fontSize: 12,
    color: 'rgb(93, 94, 95)',
    fontWeight: 'bold',
  },
  star: {
    display: 'flex',
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
    display: 'flex',
    flexDirection: 'row',
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
  filters:
  {
    marginTop: 20,
    marginBottom: 10,
    display: 'flex',
    gap: 10,
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

});

export default App;
