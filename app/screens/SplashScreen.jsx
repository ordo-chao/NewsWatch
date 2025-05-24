import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="black"
          translucent={false}
        />
        <View style={styles.header}>
          <View style={styles.logo} >
            <Text style={styles.logoText} >News</Text>
            <Text style={styles.logoTex} >Watch</Text>
          </View>
          <Text style={styles.description} >All type of news from trusted sources for all type of people</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
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
});

export default App;
