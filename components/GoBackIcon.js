import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, StyleSheet, Text } from 'react-native';
import { s } from '../styles/stylesFile';


const GoBackIcon = ({ navigation }) => {

  const returnHome = e => {
    e.persist();
    navigation.pop();
  }

  return (
    <View style={s.iconContainer} >
      <Icon name="arrow-left" size={50} onPress={returnHome} />
    </View>
  );
};



export default GoBackIcon;