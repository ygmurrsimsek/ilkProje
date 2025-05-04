import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, Alert } from "react-native";
import React from "react";
import style from "./Card.style";

const Card = (props) => {
  return (
      <View style={style.card_container}>
        <View style={style.card_body}>
          <Text style={style.card_title}>{props.title}</Text>
          <Text style={style.card_text}>{props.text}</Text>
        </View>
        <TouchableOpacity
          style={style.button}
          onPress={() => Alert.alert(`Merhaba ${props.title}`)}
        >
          <Text style={style.button_text}>I LIKED</Text>
        </TouchableOpacity>
      </View>
  );
};

export default Card;
