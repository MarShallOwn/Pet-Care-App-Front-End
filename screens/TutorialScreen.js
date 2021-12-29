import React from 'react'
import  {View, Text,Button} from 'react-native'

const TutorialScreen = () => {

    return(
        <View style={{height: "100%"}}>
        <Text>Tutorial Screen</Text>
        <Button title="Go to About" onPress={() => navigation.navigate("Login")}></Button>
        <View style={{position:'absolute',bottom: -100, left: 10, height: 50, width: 400, backgroundColor: "red",borderTopLeftRadius: 50, borderTopRightRadius: 50,  transform: [{ scaleY: 30 }]}} />
        </View>
    )
}

export default TutorialScreen