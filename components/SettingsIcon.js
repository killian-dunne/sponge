import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { s } from '../styles/stylesFile';


const SettingsIcon = ({ navigation }) => {

  return (
    <View style={s.iconContainer}>
      <Icon name="settings" size={50} onPress={() => navigation.push('Options')}/>
    </View>
  );
};

export default SettingsIcon;