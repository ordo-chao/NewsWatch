/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Pressable,
  Animated,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';


const height = 450;

const App = (props) => {
  const slideAnim = useRef(new Animated.Value(height)).current;

  // Slide up on mount
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, []);

  // Slide down on exit
  const handleExit = () => {
    Animated.timing(slideAnim, {
      toValue: height,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      props.setComment(false);
    });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="black"
          translucent={true}
        />
        <Animated.View
          style={[
            styles.container,
            {
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <View style={styles.header}>
            <Pressable onPress={handleExit}>
              <View style={styles.back}>
                <AntDesign
                  name="left"
                  size={20}
                  color="black"
                  style={styles.backIcon}
                />
              </View>
            </Pressable>
            <Text style={styles.headerText}>Comments</Text>
          </View>
        </Animated.View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    height: height,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'grey',
  },
  back: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    width: 30,
    height: 30,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
    flex: 1,
  },
  backIcon: {
    textAlign: 'center',
  },
});

App.propTypes = {
  setComment: PropTypes.func.isRequired,
};

export default App;
