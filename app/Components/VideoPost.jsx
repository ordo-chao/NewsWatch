import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const app = () => {
  const limitWords = (text, limit) => {
    const words = text.trim().split(/\s+/);
    return words.slice(0, limit).join(' ') + (words.length > limit ? '...' : '');
  };
  const fullText = `The Verge’s website homepage is vibrant – a black and white theme with bright accents of orange and magenta.
There is a collage of large headlines and pictures to attract site visitors’ attention below the blog’s title and the navigation bar.`;

  return (
    <View source={require('../../Images/News.jpeg')} style={styles.container}>
      <Image source={require('../../Images/News.jpeg')} style={styles.image} />
      <View style={styles.title} >
        <Text style={styles.titleText} >technology, science, entertainment</Text>
        <SimpleLineIcons name="options-vertical" size={12} color="black" />
      </View>
      <View style={styles.Personal} >
        <Image source={require('../../Images/Person.png')} style={styles.person} />
        <Text style={styles.personText} >Ordo Chao</Text>
        <MaterialIcons name="verified" size={15} color="rgb(0, 162, 255)" />
      </View>
      <Text style={styles.description}>
        {limitWords(fullText, 37)}
        <Text style={styles.read}> Read more</Text>
      </Text>
      <View style={styles.bottom} >
        <View style={styles.icons} >
          <AntDesign name="heart" size={20} color="rgb(0, 162, 255)" />
          <FontAwesome name="comment-o" size={20} color="rgb(0, 162, 255)" />
          <MaterialCommunityIcons name="share-outline" size={20} color="rgb(0, 162, 255)" />
          <View style={styles.sponsor} >
            <MaterialCommunityIcons name="bullhorn-outline" size={20} color="rgb(247, 191, 108)" />
          <Text style={styles.sponsorText} >Sponsored Post</Text>
          </View>
        </View>
        <View style={styles.stats} >
          <Text style={styles.statsText} >500k comments</Text>
          <View style={styles.dot} />
          <Text style={styles.statsText} >500k Views</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      height: 370,
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: 'rgb(241, 241, 241)',
      marginBottom: 20,
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
    },
    title: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      paddingBottom: 5,
    },
    titleText: {
      fontSize: 19,
      fontWeight: 500,
      color: 'black',
      width: '95%',
    },
    person: {
      width: 25,
      height: 25,
      borderRadius: 20,
    },
    Personal: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
      padding: 10,
      paddingTop: 0,
      paddingBottom: 5,
    },
    personText: {
      fontSize: 12,
      fontWeight: 'normal',
      color: 'black',
    },
    description: {
      fontSize: 12,
      fontWeight: 'normal',
      color: 'black',
      padding: 10,
      paddingTop: 0,
    },
    read: {
      fontSize: 12.5,
      fontWeight: 'normal',
      color: 'rgb(0, 162, 255)',
    },
    icons: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    sponsor: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    sponsorText: {
      fontSize: 10,
      fontWeight: 'normal',
      color: 'rgb(247, 191, 108)',
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
      padding: 10,
      paddingTop: 0,
    },
    statsText: {
      fontSize: 8,
      fontWeight: 'normal',
      color: 'black',
    },
    dot: {
      width: 5,
      height: 5,
      borderRadius: 5,
      backgroundColor: 'black',
    }
  });

export default app;
