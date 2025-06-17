import { StyleSheet, Text, View, StatusBar, TextInput, ScrollView, Image, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Navbar from '../Components/MessagesNavbar';

const App = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState(false);

  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="black"
            translucent={true}
          />
          <View style={styles.search}>
            <EvilIcons name="search" size={24} color="black" style={search ? { display: 'none' } : { display: 'flex' }} onPress={() => setSearch(true)} />
            <TextInput
              style={[styles.input, search ? { display: 'flex' } : { display: 'none' }]}
              value={search}
              onChangeText={setSearch}
              placeholder="Search"
              keyboardType={'default'}
              autoCapitalize={'words'}
              placeholderTextColor={'black'}
            />
            <FontAwesome
              name="close"
              size={24}
              color="black"
              onPress={() => setSearch(false)}
              style={search ? { display: 'flex' } : { display: 'none' }}
            />
          </View>
          <View style={styles.header}>
            <Text style={styles.title}>Messages</Text>
            <Text style={styles.subtitle}>You have 2 unread messages</Text>
          </View>
          <ScrollView style={styles.messages}>
            {/* Repeated messages (no change) */}
            {[...Array(9)].map((_, i) => (
              <Pressable key={i} onPress={() => navigation.navigate('Chat')}>
                <View style={styles.mesaage}>
                  <Image source={require('../../Images/Person.png')} style={styles.avatar} />
                  <View>
                    <View style={styles.nameTime}>
                      <Text style={styles.name}>John Doe</Text>
                      <Text style={styles.time}>Now</Text>
                    </View>
                    <View style={styles.textNotification}>
                      <Text style={styles.text}>cndndncdcnikdcdcindvnv</Text>
                      <Text style={styles.notification}></Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            ))}
          </ScrollView>
          <Navbar />
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    paddingTop: 30,
  },
  input: {
    width: '90%',
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgb(241, 241, 241)',
    paddingHorizontal: 10,
  },
  header: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'rgb(201, 201, 201)',
    marginBottom: 20,
    textAlign: 'left',
    margin: 0,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
  },
  mesaage: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 30,
    paddingHorizontal: 10,
    width: 300,
  },
  nameTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 5,
  },
  text: {
    width: '90%',
    fontSize: 12,
    color: 'rgb(170, 168, 168)',
  },
  notification: {
    width: 5,
    height: 5,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  textNotification: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
  },
  messages: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  time: {
    fontSize: 10,
    color: 'rgb(170, 168, 168)',
  },
  name: {
    fontSize: 13,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default App;
