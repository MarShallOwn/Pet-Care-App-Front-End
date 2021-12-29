import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

function LoginScreen ({ navigation }) {
    return (
      <View>
        <Text>Login Screen</Text>
        <Button title="Go to About" onPress={() => navigation.navigate("Register")}></Button>
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
  

export default LoginScreen