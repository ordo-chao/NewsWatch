import { StyleSheet, Text, View, StatusBar, TextInput, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';
import {
  useNavigation,
} from '@react-navigation/native';
import ErrorDiv from '../Components/Error';

const App = () => {
  const navigation = useNavigation();

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState({
    Error: false,
    message: '',
  });
  const [inputError , setinputError] = useState('');

  const signIn = async () => {
    try {
      setLoading(true);
      setinputError('');
      const response = await fetch('http://192.168.88.58:3003/accounts/signIn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      if (response.status === 500) {
        try {
          const errorData = await response.json();
          let errorMessage = errorData.message;
          setError({ Error: true, message: errorMessage });
        } catch (_) { }

        setLoading(false);
        navigation.navigate('Login');
        return;
      }

      const text = await response.text();
      const data = text ? JSON.parse(text) : {};
      console.log(data);
      if (data.error) {
        if(data.error === 'Wrong username') {setinputError('username');}
        else if(data.error === 'Wrong email') {setinputError('email');}
        else if(data.error === 'Wrong password') {setinputError('password');}
        else{setError({ Error: true, message: data.error });}
        setLoading(false);
        return;
      }
      setLoading(false);
      navigation.navigate('Home');
    } catch (error) {
      setLoading(false);
      setError({ Error: true, message: error.message });
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
        {Error.Error && <ErrorDiv Error={Error.message} setError={setError} />}
        <View style={styles.logo} >
          <Text style={styles.logoText} >News</Text>
          <Text style={styles.logoTex} >Watch</Text>
        </View>

        <View style={styles.form} >
          <View>
            <Text style={styles.label} >Username</Text>
            <TextInput
              style={inputError === 'username' ? styles.inputerror : styles.input}
              keyboardType={'default'}
              onChangeText={(text) => setUser({ ...user, username: text })}
              required
            />
            {inputError === 'username' && <Text style={styles.red} >Wrong Username</Text>}
          </View>
          <View>
            <Text style={styles.label} >Email</Text>
            <TextInput
              style={ inputError === 'email' ? styles.inputerror : styles.input}
              keyboardType={'email-address'}
              onChangeText={(text) => setUser({ ...user, email: text })}
              required
            />
            {inputError === 'email' && <Text style={styles.red} >Wrong Email</Text>}
          </View>
          <View>
            <Text style={styles.label} >Password</Text>
            <TextInput
              style={ inputError === 'password' ? styles.inputerror : styles.input}
              secureTextEntry={true}
              keyboardType={inputError === 'password' ? 'visible-password' : 'password'}
              onChangeText={(text) => setUser({ ...user, password: text })}
              required
            />
            {inputError === 'password' && <Text style={styles.red} >Wrong Password</Text>}
            <Text style={styles.forgot} onPress={() => navigation.navigate('Verify')}  >Forgot Password?</Text>
          </View>
        </View>

        <View style={styles.button} >
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <Text style={styles.buttonText} onPress={signIn}>
              Sign In
            </Text>
          )}
        </View>

        <View style={styles.or} >
          <View style={styles.line} />
          <Text style={styles.orText} >or sign in with </Text>
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
          <Text style={styles.agreeText} >Don't have an account? <Text style={styles.terms} onPress={() => navigation.navigate('Signup')} >Register</Text></Text>
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
    maxHeight: 300,
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
    marginTop: 0,
    marginBottom: 10,
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
    marginBottom: 10,
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
  label:
  {
    fontSize: 15,
    fontWeight: 'light',
    color: 'rgb(83, 83, 83)',
    marginLeft: 10,
  },
  forgot: {
    fontSize: 12,
    fontWeight: 'light',
    color: 'rgb(83, 83, 83)',
    marginLeft: 10,
    textAlign: 'right',
  },
  red:
  {
        fontSize: 11,
    fontWeight: 'light',
    color: 'rgb(255, 0, 0)',
    marginLeft: 10,
    textAlign: 'left',
    marginBottom: 10,
  },
  inputerror: {
    height: 40,
    margin: 12,
    width: 300,
    borderBottomColor: 'rgb(255, 0, 0)',
    borderBottomWidth: 1,
    padding: 10,
    paddingLeft: 0,
    color: 'black',
    fontSize: 15,
    marginTop: 0,
    marginBottom: 10,
  },
});

export default App;
