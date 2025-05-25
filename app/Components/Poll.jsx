import { StyleSheet, Text, View , Button  } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import React, { useMemo, useState } from 'react';

const app = () => {
      const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Option 1',
            value: 'option1',
            containerStyle: {
              backgroundColor: '#F2F2F2',
              padding: 10,
              borderRadius: 15,
            },
        },
        {
            id: '2',
            label: 'Option 2',
            value: 'option2',
            containerStyle: {
              backgroundColor: '#F2F2F2',
              padding: 10,
              borderRadius: 15,
            },
        },
                {
            id: '3',
            label: 'Option 2',
            value: 'option2',
            containerStyle: {
              backgroundColor: '#F2F2F2',
              padding: 10,
              borderRadius: 15,
            },
        },
    ]), []);
    const [selectedId, setSelectedId] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.header} >Who is the best player in the world</Text>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
            containerStyle={styles.radio}
        />
        <View style={styles.button} >
          <Button title="See Results" borderRadius={50}  />
        </View>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      height: 'fit-content',
      padding: 20,
      paddingTop: 15,
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: '#F9F9F9',
      marginBottom: 20,
      marginTop: 20,
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
    radio: {
      alignItems: 'left',
    },
    button: {
      maxWidth: 110,
      marginTop: 10,
    },
  });

export default app;
