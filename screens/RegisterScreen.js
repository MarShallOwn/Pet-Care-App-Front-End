import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

function RegisterScreen ({ navigation }) {
    return (
      <View>
        <Text>Register Screen</Text>
        <Button title="Go to About" onPress={() => navigation.navigate("Animals")}></Button>
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
  

export default RegisterScreen