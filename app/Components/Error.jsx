import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import {
  useNavigation,
  useNavigationState,
} from '@react-navigation/native';
import PropTypes from 'prop-types';
const App = ({ Error , setError }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <EvilIcons name="close-o" size={30} color="black" style={styles.close} onPress={() => setError({
        ...Error,
        Error: false,
      })} />
      <Image source={require('../../Images/Error.png')} style={styles.image} />
      <Text style={styles.text}>We're sorry</Text>
      {/* <Text style={styles.retry}>We are Sorry</Text> */}
      <Text style={styles.message} >{Error}</Text>
      <Text style={styles.retry} >Please try again</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'absolute',
    top: '20%',
    width: '90%',
    left: '5%',
    height: '60%',
    zIndex: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    color: 'black', // updated color
    fontWeight: 'bold',
  },
  retry: {
    fontSize: 15,
    color: 'white', // updated color
    backgroundColor: 'rgb(253, 83, 97)',
    borderRadius: 5,
    fontWeight: 'bold',
    padding: 10,
    marginTop: 10,
  },
  message: {
    fontSize: 12,
    color: 'black',
    marginTop: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 10,
  }
});

App.propTypes = {
  Error: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
};

export default App;
