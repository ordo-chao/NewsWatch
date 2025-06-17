import { StyleSheet, Text, View, StatusBar , TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import RadioGroup from 'react-native-radio-buttons-group';
import React, { useMemo, useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  useNavigation,
} from '@react-navigation/native';



const App = () => {
const navigation = useNavigation();
  const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Media Reporter',
            value: 'Reporter',
            size : 15,
        },
        {
            id: '2',
            label: 'Visitor',
            value: 'Visitor',
            size : 15,
        },
    ]), []);
    const [selectedId, setSelectedId] = useState();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="black"
          translucent={true}
        />
          <View style={styles.logo} >
            <Text style={styles.logoText} >News</Text>
            <Text style={styles.logoTex} >Watch</Text>
          </View>

          <View style={styles.form} >
            <TextInput
              placeholder="Username"
              placeholderTextColor={'rgb(138, 136, 136)'}
              style={styles.input}
            />
                        <TextInput
              placeholder="Email"
              placeholderTextColor={'rgb(138, 136, 136)'}
              style={styles.input}
            />
            <TextInput
              placeholder="Number"
              placeholderTextColor={'rgb(138, 136, 136)'}
              style={styles.input}
              keyboardType={'numeric'}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor={'rgb(138, 136, 136)'}
              style={styles.input}
              secureTextEntry={true}
              keyboardType={'password'}
            />
          </View>
          <View style={styles.userType} >
            <Text style={styles.userTypeText} >I am a</Text>
            <View>
               <RadioGroup radioButtons={radioButtons} onPress={setSelectedId} selectedId={selectedId} layout={'row'} />
            </View>
          </View>
          <View style={styles.button} >
            <Text style={styles.buttonText} onPress={() => navigation.navigate('SignIn')} >Sign Up</Text>
          </View>

          <View style={styles.or} >
            <View style={styles.line} />
            <Text style={styles.orText} >or sign up with </Text>
            <View style={styles.line} />
          </View>

          <View style={styles.social} >
            <View style={styles.icon} ><Fontisto name="email" size={20} color="black" /></View>
            <View style={styles.icon}><FontAwesome name="google" size={20} color="black" /></View>
            <View style={styles.icon}><FontAwesome name="facebook" size={20} color="black" /></View>
            <View style={styles.icon}><Feather name="twitter" size={20} color="black" /></View>
            <View style={styles.icon}><AntDesign name="apple-o" size={20} color="black" /></View>
          </View>

          <View style={styles.agree} >
            <Text style={styles.agreeText} >By signing up you agree to NewsWatch you are accepting our <Text style={styles.terms} >terms and conditions</Text></Text>
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
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  logoText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'rgb(0, 102, 255)',
  },
  logoTex: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'rgb(87, 89, 92)',
  },
  description: {
    fontSize: 12,
    fontWeight: 'light',
    color: 'rgb(138, 136, 136)',
    textAlign: 'center',
    width: 300,
    marginTop: 5,
  },
  form: {
    flex: 1,
    alignItems: 'center',
    display: 'flex',
    gap: 30,
    marginTop: 20,
    maxHeight: 350,
  },
  input: {
    height: 40,
    margin: 12,
    width: 300,
    borderBottomColor: 'rgb(83, 83, 83)',
    borderBottomWidth: 1,
    padding: 10,
    paddingLeft: 0,
    color: 'black',
    fontSize: 15,
  },
  userType: {
    width: 300,
    padding: 10,
    paddingLeft: 30,
  },
  userTypeText: {
    fontSize: 15,
    fontWeight: 'normal',
    color: 'rgb(77, 76, 76)',
  },
  button: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
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
  line: {
    width: 100,
    height: 1,
    backgroundColor: 'rgb(83, 83, 83)',
  },
  or: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  orText:
  {
    fontSize: 13,
    fontWeight: 'light',
    color: 'rgb(83, 83, 83)',
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    marginTop: 20,
  },
  icon: {
    padding: 5,
    height: 35,
    width: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: 'rgb(83, 83, 83)',
  },
  agree: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  agreeText: {
    fontSize: 12,
    fontWeight: 'light',
    color: 'rgb(83, 83, 83)',
    textAlign: 'center',
    width: 350,
  },
  terms: {
    fontWeight: 'bold',
  },
});

export default App;
