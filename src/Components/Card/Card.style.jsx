import React from "react";
import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
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
    backgroundColor:"#00C2FF",
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

export default styles;