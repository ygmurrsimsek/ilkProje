import React from 'react';
import {SafeAreaView,TouchableOpacity, Text, View ,StyleSheet} from 'react-native';

const HelloWorldApp = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.card_container}>
        <View style={style.card_body}>
          <Text style={style.card_title}>John Faulder</Text>
          <Text style={style.card_text}>Açıklama</Text>
        </View>
        <TouchableOpacity style={style.button}>
          <Text style={style.button_text}>I LIKED</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const style=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#e0e0e0',
  },
  card_container:{
    backgroundColor:'white',
    margin:10,
    borderRadius:10,
    flexDirection:"column",
    borderColor:'grey',
    borderStyle:"solid",
    borderWidth:1,
   
  },
  card_body:{
    padding:10,
  },
  card_title:{
    color:'black',
    fontSize:20,
    fontWeight:"bold",
    margin:10,
    marginBottom:3
  },
  card_text:{
    margin:10,
    marginTop:3,
    fontSize:18
  },
  font:{
    color:"black",
    fontSize:35,
    fontStyle:"italic",
    fontWeight:"bold",
    lineHeight:55
  },
 button:{
    backgroundColor:"blue",
    width:"100%",
    padding:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    marginTop:10,
    alignItems:"center",
  },
  button_text:{
    color:"white",
    fontSize:15,
    fontWeight:"bold",
  },
  
  
});
export default HelloWorldApp;

//*margin:10,
//borderRadius:10,
//padding:10,
//flexDirection:"column",
//borderColor:'grey',
//borderStyle:"solid",
//borderWidth:1,