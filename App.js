import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import bgImage from './assets/esucela-en-casa-bg.png';

import * as ScreenOrientation from 'expo-screen-orientation';



const App = () => {

  useEffect(() => {
    changeScreenOrientation();
  }, [])

  async function changeScreenOrientation(){
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.image}>
      <Text style={styles.text}>Avergon</Text>
      </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text:{
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default App;