import { StyleSheet, Text, View , Dimensions } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  useNavigation,
} from '@react-navigation/native';

import Navbar from '../Components/Navbar';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Settings = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.options} >
          <Text style={styles.header} >Settings</Text>

          <View style={styles.option} >
            <View style={styles.optionIcon} >
              <MaterialCommunityIcons name="face-man-profile" size={25} color="black" />
              <Text style={styles.optionText} >Profile</Text>
            </View>
            <AntDesign name="right" size={20} color="rgb(175, 175, 175)" />
          </View>
                    <View style={styles.option} >
            <View style={styles.optionIcon} >
              <Ionicons name="wallet-outline" size={25} color="black" />
              <Text style={styles.optionText} >My Wallet</Text>
            </View>
            <AntDesign name="right" size={20} color="rgb(175, 175, 175)" />
          </View>
                    <View style={styles.option} >
            <View style={styles.optionIcon} >
              <MaterialIcons name="post-add" size={25} color="black" />
              <Text style={styles.optionText} >My Post</Text>
            </View>
            <AntDesign name="right" size={20} color="rgb(175, 175, 175)" />
          </View>
                    <View style={styles.option} >
            <View style={styles.optionIcon} >
              <AntDesign name="rocket1" size={25} color="black" />
              <Text style={styles.optionText} >Boost Your Post</Text>
            </View>
            <AntDesign name="right" size={20} color="rgb(175, 175, 175)" />
          </View>
                    <View style={styles.option} >
            <View style={styles.optionIcon} >
              <Ionicons name="notifications-outline" size={25} color="black" />
              <Text style={styles.optionText} >Notification</Text>
            </View>
            <AntDesign name="right" size={20} color="rgb(175, 175, 175)" />
          </View>
                    <View style={styles.option} >
            <View style={styles.optionIcon} >
              <Ionicons name="clipboard-outline" size={25} color="black" />
              <Text style={styles.optionText} >Terms and Conditions</Text>
            </View>
            <AntDesign name="right" size={20} color="rgb(175, 175, 175)" />
          </View>
                    <View style={styles.option} >
            <View style={styles.optionIcon} >
              <AntDesign name="questioncircleo" size={25} color="black" />
              <Text style={styles.optionText} >About</Text>
            </View>
            <AntDesign name="right" size={20} color="rgb(175, 175, 175)" />
          </View>
                    <View style={styles.option} >
            <View style={styles.optionIcon} >
              <AntDesign name="staro" size={25} color="black" />
              <Text style={styles.optionText} >Watch an Ad & Earn</Text>
            </View>
            <AntDesign name="right" size={20} color="rgb(175, 175, 175)" />
          </View>
                    <View style={styles.option} >
            <View style={styles.optionIcon} >
              <Entypo name="forward" size={25} color="black" />
              <Text style={styles.optionText} >Refer and Earn</Text>
            </View>
            <AntDesign name="right" size={20} color="rgb(175, 175, 175)" />
          </View>
                    <View style={styles.option} >
            <View style={styles.optionIcon} >
              <Ionicons name="log-out-outline" size={25} color="black" />
              <Text style={styles.optionText} >Log Out</Text>
            </View>
            <AntDesign name="right" size={20} color="rgb(175, 175, 175)" />
          </View>
        </View>
        <Navbar />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  options: {
    flex: 1,
    height: height - 100,
    padding: 20,
    paddingRight: 0,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    paddingRight: 10,
    borderBottomColor: 'rgb(224, 224, 224)',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 20,
  },
  optionIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  optionText: {
    fontSize: 15,
    fontWeight: 'normal',
    color: 'black',
  },
});

export default Settings;
