import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import React from 'react';
const { width } = Dimensions.get('window');

const App = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content} >
        <Text style={styles.title} >by the text and padding instead. Here's how you can do it</Text>
      <View style={styles.bottom} >
        <View style={styles.stats} >
          <Text style={styles.Channel} >Nature TV </Text>
          <View style={styles.dot} />
          <Text style={styles.Time} > 4hr ago</Text>
        </View>
      </View>
      </View>
      <Image source={require('../../Images/News.jpeg')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      // height: 370,
      width: '100%',
      borderRadius: 10,
      overflow: 'hidden',
      marginBottom: 10,
      marginRight: 15,
      flexDirection: 'row',
    },
    content:
    {
      width: '60%',
      justifyContent: 'center',
      gap: 5,
    },
    image: {
      width: 150,
      height: 100,
    },
    title: {
      fontSize: 13,
      fontWeight: 500,
      color: 'black',
      width: '95%',
      marginTop: 5,
      marginBottom: 5,
    },
    stats: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    bottom: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    dot: {
      width: 5,
      height: 5,
      borderRadius: 10,
      backgroundColor: 'rgb(109, 109, 109)',
    },
      video: {
    width: width - 70,  // full width minus some padding
    height: (width - 95) * (9 / 16), // 16:9 aspect ratio
    borderRadius: 10,
    overflow: 'hidden',
  },
  Channel: {
    fontSize: 12,
    color: 'rgb(117, 172, 255)',
  },
  Time: {
    fontSize: 12,
    color: 'rgb(183, 183, 184)',
  },
  });

export default App;
