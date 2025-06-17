import { StyleSheet, View, Pressable  } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
  const [options, setOptions] = useState(currentRouteName);
  return (
    <>
    <View>
      <Entypo name="plus" size={30} color="rgb(255, 255, 255)" style={styles.plusAdd} />
    </View>
    <View style={styles.container}>
      <Pressable style={styles.option} onPress={() => { setOptions('Chats'); navigation.navigate('Chats'); }}  >
        <View style={options === 'Chats' ? styles.underline : styles.null} />
        <MaterialIcons name="messenger-outline" size={20} color={options === 'Chats' ? 'rgb(0, 162, 255)' : 'rgb(245, 245, 245)'} />
      </Pressable>
      <Pressable style={styles.option} onPress={() => { setOptions('Calls'); navigation.navigate('Calls'); }}  >
        <View style={options === 'Calls' ? styles.underline : styles.null} />
        <Ionicons name="call-outline" size={20} color={options === 'Calls' ? 'rgb(0, 162, 255)' : 'rgb(245, 245, 245)'} />
      </Pressable>
      <Pressable style={styles.option} onPress={() => { setOptions('ChatSettings'); navigation.navigate('ChatSettings'); }}  >
        <View style={options === 'ChatSettings' ? styles.underline : styles.null} />
        {/* <Image source={require('../../Images/Person.png')} style={styles.avatar} /> */}
        <Ionicons name="settings-outline" size={20} color={options === 'ChatSettings' ? 'rgb(0, 162, 255)' : 'rgb(245, 245, 245)'} />
      </Pressable>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(3, 66, 160)',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexDirection: 'row',
    position: 'absolute',
    bottom: '0%',
    width: '100%',
    left: '0%',
    // maxHeight: 100,
    paddingTop: 30,
    paddingBottom: 60,
    borderRadius: 20,
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
  avatar:
  {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  plusAdd: {
    alignItems: 'center',
    gap: 5,
    position: 'absolute',
    bottom: 85,
    right: 30,
    backgroundColor: 'rgb(0, 162, 255)',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.26) 0px 4px 12px',
  },
});

export default App;
