import { StyleSheet, Text, View, StatusBar , TextInput , TextArea } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
          <View style={styles.header} >
            <AntDesign name="arrowleft" size={25} color="rgb(6, 151, 250)" onPress={() => navigation.goBack()} />
          </View>

          <View style={styles.form} >
            <View style={styles.addImage} >
              <FontAwesome name="plus" size={30} color="rgb(6, 151, 250)" />
              <Text>Add Post</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Add Heading"
              keyboardType={'default'}
              placeholderTextColor={'rgb(83, 83, 83)'}
            />
                        <TextInput
              style={styles.input}
              placeholder="Add Tag"
              keyboardType={'default'}
              placeholderTextColor={'rgb(83, 83, 83)'}
            />
                        <TextInput
              style={styles.input}
              placeholder="Category"
              keyboardType={'default'}
              placeholderTextColor={'rgb(83, 83, 83)'}
            />

                                    <TextInput
              style={styles.input}
              placeholder="Add Video Link or Image Link"
              keyboardType={'default'}
              placeholderTextColor={'rgb(83, 83, 83)'}
            />
            <TextInput
              style={styles.textArea}
              placeholder="Add Description"
              placeholderTextColor={'rgb(83, 83, 83)'}
            />
          </View>

          <View style={styles.button} >
            <Text style={styles.buttonText} onPress={() => navigation.navigate('Home')} >Post</Text>
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
    padding: 20,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(224, 224, 224)',
    boxShadow: 'rgba(0, 0, 0, 0.22) 0px 4px 12px',
  },
  form: {
    flex: 1,
    padding: 20,
    display: 'flex',
    gap: 20,
    maxHeight: 590,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'rgb(83, 83, 83)',
    borderWidth: 1,
    padding: 10,
    color: 'black',
    fontSize: 13,
    marginTop: 0,
    borderRadius: 10,
    marginBottom: 10,
  },
  textArea:
  {
        height: 70,
    width: 300,
    borderColor: 'rgb(83, 83, 83)',
    borderWidth: 1,
    padding: 10,
    color: 'black',
    fontSize: 13,
    marginTop: 0,
    borderRadius: 10,
    marginBottom: 10,
  },
  addImage: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
    marginTop: 10,
    backgroundColor: 'rgb(240, 238, 238)',
    width: 250,
    height: 200,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgb(6, 151, 250)',
    borderRadius: 10,
    borderStyle: 'dashed',
  },
  button: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
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
