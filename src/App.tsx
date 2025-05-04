import React from 'react';
import {SafeAreaView,TouchableOpacity, Text, View ,StyleSheet} from 'react-native';
import Card from './Components/Card/Card';

const HelloWorldApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Card title={"John Faulder"} text={"Açıklama"}/>
      <Card title={"John Faulder"} text={"Açıklama"}/>
      <Card title={"John Faulder"} text={"Açıklama"}/>  
    </SafeAreaView>
    
  );
};

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#e0e0e0',
  }
});


export default HelloWorldApp;

