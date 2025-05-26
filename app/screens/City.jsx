import { StyleSheet, Text, View, StatusBar, TextInput, ScrollView, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';


import {
  useNavigation,
} from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();
  const [city, setCity] = useState('');
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="black"
          translucent={true}
        />
        <View style={styles.serach} >
          <EvilIcons name="search" size={24} color="black" style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder="Search your city"
            keyboardType={'default'}
            autoCapitalize={'words'}
            placeholderTextColor={'black'}
          />
        </View>

        <View style={styles.line} />

        <ScrollView style={styles.list} >
          <Pressable onPress={() => setCity('Nairobi1')} ><View style={city === 'Nairobi1' ? styles.active : styles.label} > <Ionicons name="location-outline" size={20} color={city === 'Nairobi1' ? 'white' : 'black'} /> <Text style={city === 'Nairobi1' ? styles.city : styles.activeCity} >Nairobi</Text></View></Pressable>
          <Pressable onPress={() => setCity('Nairobi2')}><View style={city === 'Nairobi2' ? styles.active : styles.label} > <Ionicons name="location-outline" size={20} color={city === 'Nairobi2' ? 'white' : 'black'} /> <Text style={city === 'Nairobi2' ? styles.city : styles.activeCity} >Nairobi</Text></View></Pressable>
          <Pressable onPress={() => setCity('Nairobi3')}><View style={city === 'Nairobi3' ? styles.active : styles.label} > <Ionicons name="location-outline" size={20} color={city === 'Nairobi3' ? 'white' : 'black'} /> <Text style={city === 'Nairobi3' ? styles.city : styles.activeCity} >Nairobi</Text></View></Pressable>
          <Pressable onPress={() => setCity('Nairobi4')}><View style={city === 'Nairobi4' ? styles.active : styles.label} > <Ionicons name="location-outline" size={20} color={city === 'Nairobi4' ? 'white' : 'black'} /> <Text style={city === 'Nairobi4' ? styles.city : styles.activeCity} >Nairobi</Text></View></Pressable>
          <Pressable onPress={() => setCity('Nairobi5')}><View style={city === 'Nairobi5' ? styles.active : styles.label} > <Ionicons name="location-outline" size={20} color={city === 'Nairobi5' ? 'white' : 'black'} /> <Text style={city === 'Nairobi5' ? styles.city : styles.activeCity} >Nairobi</Text></View></Pressable>
          <Pressable onPress={() => setCity('Nairobi6')}><View style={city === 'Nairobi6' ? styles.active : styles.label} > <Ionicons name="location-outline" size={20} color={city === 'Nairobi6' ? 'white' : 'black'} /> <Text style={city === 'Nairobi6' ? styles.city : styles.activeCity} >Nairobi</Text></View></Pressable>
          <Pressable onPress={() => setCity('Nairobi7')}><View style={city === 'Nairobi7' ? styles.active : styles.label} > <Ionicons name="location-outline" size={20} color={city === 'Nairobi7' ? 'white' : 'black'} /> <Text style={city === 'Nairobi7' ? styles.city : styles.activeCity} >Nairobi</Text></View></Pressable>
          <Pressable onPress={() => setCity('Nairobi8')}><View style={city === 'Nairobi8' ? styles.active : styles.label} > <Ionicons name="location-outline" size={20} color={city === 'Nairobi8' ? 'white' : 'black'} /> <Text style={city === 'Nairobi8' ? styles.city : styles.activeCity} >Nairobi</Text></View></Pressable>
          <Pressable onPress={() => setCity('Nairobi9')}><View style={city === 'Nairobi9' ? styles.active : styles.label} > <Ionicons name="location-outline" size={20} color={city === 'Nairobi9' ? 'white' : 'black'} /> <Text style={city === 'Nairobi9' ? styles.city : styles.activeCity} >Nairobi</Text></View></Pressable>
          <Pressable onPress={() => setCity('Nairobi10')}><View style={city === 'Nairobi10' ? styles.active : styles.label} > <Ionicons name="location-outline" size={20} color={city === 'Nairobi10' ? 'white' : 'black'} /> <Text style={city === 'Nairobi10' ? styles.city : styles.activeCity} >Nairobi</Text></View></Pressable>
          <Pressable onPress={() => setCity('Nairobi11')}><View style={city === 'Nairobi11' ? styles.active : styles.label} > <Ionicons name="location-outline" size={20} color={city === 'Nairobi11' ? 'white' : 'black'} /> <Text style={city === 'Nairobi11' ? styles.city : styles.activeCity} >Nairobi</Text></View></Pressable>
          <Pressable onPress={() => setCity('Nairobi12')}><View style={city === 'Nairobi12' ? styles.active : styles.label} > <Ionicons name="location-outline" size={20} color={city === 'Nairobi12' ? 'white' : 'black'} /> <Text style={city === 'Nairobi12' ? styles.city : styles.activeCity} >Nairobi</Text></View></Pressable>
          <Pressable onPress={() => setCity('Nairobi13')}><View style={city === 'Nairobi13' ? styles.active : styles.label} > <Ionicons name="location-outline" size={20} color={city === 'Nairobi13' ? 'white' : 'black'} /> <Text style={city === 'Nairobi13' ? styles.city : styles.activeCity} >Nairobi</Text></View></Pressable>
        </ScrollView>

        <View style={styles.button} >
          <Text style={styles.buttonText} onPress={() => navigation.navigate('Home')} >Next</Text>
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  serach: {
    marginTop: 10,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    width: '100%',
    paddingLeft: 40,
    color: 'black',
    borderColor: 'rgb(121, 171, 245)',
  },
  searchIcon: {
    position: 'relative',
    left: 10,
    right: 0,
    top: 27,
  },
  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: 'rgb(197, 198, 199)',
  },
  list: {
    flex: 1,
    marginTop: 10,
    maxHeight: 500,
  },
  label: {
    fontSize: 15,
    fontWeight: 'normal',
    color: 'black',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingLeft: 20,
  },
  active: {
    fontSize: 15,
    fontWeight: 'normal',
    color: 'white',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingLeft: 20,
    backgroundColor: 'rgb(59, 135, 248)',
  },
  city: {
    fontSize: 15,
    fontWeight: 'normal',
    color: 'white',
  },
  activeCity: {
    fontSize: 15,
    fontWeight: 'normal',
    color: 'rgb(89, 89, 90)',
  },
  button: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'light',
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'rgb(84, 151, 252)',
    width: '40%',
    padding: 10,
    textAlign: 'center',
    borderRadius: 20,
  },
});

export default App;
