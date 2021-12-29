import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

function FoodScreen ({ navigation }) {
    return (
      <View>
        <Text>Food Screen</Text>
        <Button title="Go to About" onPress={() => navigation.navigate("Supplies")}></Button>
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
  

export default FoodScreen