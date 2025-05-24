import { StyleSheet, Text, View, StatusBar , TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import {
  useNavigation,
} from '@react-navigation/native';

const App = () => {
const navigation = useNavigation();
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
            <View>
              <Text style={styles.label} >Enter your Email</Text>
              <TextInput
              style={styles.input}
              keyboardType={'email-address'}
            />
            </View>
            <View>
              <Text style={styles.label} >Verification Code</Text>
              <TextInput
              style={styles.input}
              keyboardType={'numeric'}
            />
            </View>
            <View>
              <Text style={styles.label} >Enter New Password</Text>
              <TextInput
              style={styles.input}
              keyboardType={'password'}
              secureTextEntry={true}
            />
            </View>
                        <View>
              <Text style={styles.label} >Re Enter your Password</Text>
              <TextInput
              style={styles.input}
              keyboardType={'password'}
              secureTextEntry={true}
            />
            </View>
          </View>

          <View style={styles.button} >
            <Text style={styles.buttonText} onPress={() => navigation.navigate('SignIn')} >Sign In</Text>
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
    marginBottom: 40,
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
    maxHeight: 400,
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
});

export default App;
