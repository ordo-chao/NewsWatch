import { StyleSheet, Text, View, StatusBar, TextInput, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Latest from '../Components/Latest';
import Navbar from '../Components/Navbar';
import Recommend from '../Components/Recommend';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="black"
          translucent={true}
        />
        <View style={styles.search} >
          <TextInput
            style={styles.input}
            placeholder="Search your city"
            keyboardType={'default'}
            autoCapitalize={'words'}
            placeholderTextColor={'black'}
          />
          <EvilIcons name="search" size={20} color="black" style={styles.searchIcon} />
        </View>

        <ScrollView style={styles.content} >
          <View style={styles.popular} >
            <View style={styles.header} >
              <Text style={styles.headerText} >Popular Tags</Text>
              <Text style={styles.View} >View All</Text>
            </View>
            <View style={styles.tags} >
              <Text style={styles.tag} >#Friday</Text>
              <Text style={styles.tag} >#Saturday</Text>
              <Text style={styles.tag}>#Sunday</Text>
              <Text style={styles.tag}>#Mon</Text>
              <Text style={styles.tag}>#Tuesday</Text>
            </View>
          </View>

          <View style={styles.line} />

          <View style={styles.latest} >
            <View style={styles.header} >
              <Text style={styles.headerText} >Latest News</Text>
              <Text style={styles.View} >View All</Text>
            </View>
            <ScrollView horizontal={true} style={styles.scroll}  >
              <Latest isVideo={false} />
              <Latest isVideo={true} />
            </ScrollView>
          </View>

          <View style={styles.line} />

          <View style={styles.recommendation} >
            <View style={styles.header} >
              <Text style={styles.headerText} >Recommendation Topic</Text>
              <Text style={styles.View} >View All</Text>
            </View>
            <Recommend />
            <Recommend />
          </View>
        </ScrollView>


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
  search: {
    marginTop: 10,
    // marginBottom: 20,
  },
  input: {
    height: 40,
    borderRadius: 10,
    width: '90%',
    paddingLeft: 20,
    color: 'black',
    margin: 'auto',
    backgroundColor: 'rgb(238, 244, 247)',
  },
  searchIcon: {
    position: 'relative',
    left: '85%',
    top: -30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  View: {
    fontSize: 12,
    fontWeight: 'normal',
    color: 'rgb(0, 162, 255)',
  },
  tag: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'rgb(201, 204, 206)',
    backgroundColor: 'rgb(244, 246, 247)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    borderRadius: 4,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  popular: {
    margin: 20,
    marginTop: 0,
    gap: 10,
  },
  latest: {
    margin: 20,
    marginTop: 0,
    marginBottom: 0,
    gap: 10,
  },
  scroll: {
    marginTop: 10,
  },
  recommendation: {
    margin: 20,
    marginTop: 0,
    gap: 10,
  },
  content: {
    flex: 1,
    height: '67%',
    width: '100%',
  },
  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: 'rgb(241, 241, 241)',
    marginBottom: 20,
  },

});

export default App;
