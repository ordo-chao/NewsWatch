import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const app = () => {
  return (
    <ImageBackground source={require('../../Images/News.jpeg')} style={styles.container}>
      <View style={styles.overlay} />
        <View style={styles.live} >
          <View style={styles.dot} />
          <Text style={styles.liveText} >Live</Text>
        </View>
        <View style={styles.header} >
          <Text style={styles.headerText} >The Ultimate Habit Tracker Guide: Why and How to Track Your Habits</Text>
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: 200,
      borderRadius: 20,
      overflow: 'hidden',
    },
    live: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 10,
      left: 10,
      flexDirection: 'row',
    },
    dot: {
      width: 5,
      height: 5,
      borderRadius: 5,
      backgroundColor: 'red',
    },
    liveText: {
      color: 'white',
      marginLeft: 5,
    },
    header: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 20,
    },
    headerText: {
      color: 'white',
      fontSize: 15,
      width: 300,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    overlay: {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'rgba(0,0,0,0.3)',
},
  });

export default app;
