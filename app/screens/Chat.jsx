import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Pressable
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get('window').height;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="black" translucent />

        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>
              {/* Header */}
              <View style={styles.header}>
                <Pressable onPress={() => navigation.navigate('Chats')} >
                  <FontAwesome name="arrow-circle-left" size={24} color="black" />
                </Pressable>
                <View style={styles.user}>
                  <Text>John Doe</Text>
                  <Text>Online</Text>
                </View>
                <Feather name="phone-call" size={24} color="black" />
              </View>

              <View style={styles.content}>
                {/* Chat messages */}
                <ScrollView keyboardShouldPersistTaps="handled">
                  <View style={styles.text}>
                    <Image source={require('../../Images/Person.png')} style={styles.avatar} />
                    <View>
                      <View style={styles.receive}>
                        <Text style={styles.messageText}>Hello</Text>
                      </View>
                      <Text style={styles.time}>8.11</Text>
                    </View>
                  </View>

                  <View style={styles.me}>
                    <Image source={require('../../Images/Person.png')} style={styles.myavatar} />
                    <View>
                      <View style={styles.send}>
                        <Text style={styles.messageText}>Hello</Text>
                      </View>
                      <Text style={styles.metime}>8.11</Text>
                    </View>
                  </View>
                </ScrollView>

                {/* Input */}
                <View style={styles.inputBox}>
                  <TextInput
                    style={styles.input}
                    placeholder="Message"
                    keyboardType="default"
                    autoCapitalize="sentences"
                    placeholderTextColor="black"
                    returnKeyType="send"
                  />
                  <Entypo name="circle-with-plus" size={20} color="black" style={styles.sendIcon} />
                  <MaterialIcons name="mic" size={20} color="black" style={styles.micIcon} />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  user: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  receive: {
    paddingHorizontal: 20,
    width: 200,
    backgroundColor: '#B9B6B6',
    borderRadius: 10,
  },
  send: {
    paddingHorizontal: 20,
    width: 200,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  messageText: {
    color: 'white',
  },
  time: {
    color: 'black',
    fontSize: 10,
  },
  me: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  metime: {
    color: 'black',
    fontSize: 10,
    alignSelf: 'flex-end',
  },
  myavatar: {
    width: 20,
    height: 20,
    borderRadius: 50,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '90%',
    margin: 'auto',
    paddingHorizontal: 10,
    borderRadius: 30,
    paddingVertical: 10,
    backgroundColor: 'rgb(245, 245, 245)',
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  content: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 50,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
});

export default App;
