import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

function AnimalsScreen ({ navigation }) {
    return (
      <View>
        <Text>Animals Screen</Text>
        <Button title="Go to About" onPress={() => navigation.navigate("Food")}></Button>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default AnimalsScreen