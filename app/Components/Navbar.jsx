import { StyleSheet, Text, View , Pressable } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import {
  useNavigation,
  useNavigationState,
} from '@react-navigation/native';
const App = () => {
  const navigation = useNavigation();
  const currentRouteName = useNavigationState((state) => {
  const route = state.routes[state.index];
  return route.name;
});
const [options , setOptions] = useState(currentRouteName);
  return (
    <View style={styles.container}>
      <Pressable style={styles.option} onPress={() => {setOptions('Home'); navigation.navigate('Home');}}  >
        <View style={options === 'Home' ? styles.underline : styles.null} />
        <Entypo name="home" size={20} color={options === 'Home' ? 'rgb(0, 162, 255)' : 'black'} />
        <Text style={options === 'Home' ? styles.text : styles.inactiveText} >Home</Text>
        </Pressable>
      <Pressable style={styles.option} onPress={() => {setOptions('Search'); navigation.navigate('Search');}}  >
        <View style={options === 'Search' ? styles.underline : styles.null} />
        <EvilIcons name="search" size={25} color={options === 'Search' ? 'rgb(0, 162, 255)' : 'black'} />
        <Text style={options === 'Search' ? styles.text : styles.inactiveText} >Search</Text>
        </Pressable>
      <Pressable style={styles.plus} onPress={() => {setOptions('Add'); navigation.navigate('AddPost');}}  >
        <View style={styles.add} ><FontAwesome name="plus" size={20} color="white" /></View>
        <Text style={options === 'Add' ? styles.text : styles.inactiveText} >Add Post</Text>
        </Pressable>
      <Pressable style={styles.option} onPress={() => {setOptions('Post'); navigation.navigate('Post');}}  >
        <View style={options === 'Post' ? styles.underline : styles.null} />
        <MaterialCommunityIcons name="post" size={20} color={options === 'Post' ? 'rgb(0, 162, 255)' : 'black'} />
        <Text style={options === 'Post' ? styles.text : styles.inactiveText} >Posts</Text>
        </Pressable>
      <Pressable style={styles.option} onPress={() => {setOptions('Profile'); navigation.navigate('Profile');}}  >
        <View style={options === 'Profile' ? styles.underline : styles.null} />
        <MaterialCommunityIcons name="face-man-profile" size={20} color={options === 'Profile' ? 'rgb(0, 162, 255)' : 'black'} />
        <Text style={options === 'Profile' ? styles.text : styles.inactiveText} >Profile</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(247, 247, 247)',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    position: 'relative',
    bottom: -10,
    maxHeight: 70,
  },
  option: {
    alignItems: 'center',
    gap: 5,
  },
  plus: {
    alignItems: 'center',
    gap: 5,
    position: 'relative',
    bottom: 25,
  },
  text: {
    fontSize: 10,
    color: 'rgb(0, 162, 255)',
  },
  inactiveText: {
    fontSize: 10,
    color: 'rgb(87, 89, 92)',
  },
  add: {
    backgroundColor: 'rgb(0, 162, 255)',
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.26) 0px 4px 12px',
  },
  underline: {
    width: 20,
    height: 2,
    backgroundColor: 'rgb(0, 162, 255)',
    position: 'relative',
    bottom: 10,
  },
});

export default App;
