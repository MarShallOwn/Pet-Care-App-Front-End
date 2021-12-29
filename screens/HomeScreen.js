import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

function HomeScreen ({ navigation }) {
    return (
      <View>
        <Text>Home Screen</Text>
        <Button title="Go to About" onPress={() => navigation.navigate("Login")}></Button>
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
  

export default HomeScreen