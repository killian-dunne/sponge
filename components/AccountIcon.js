import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { s } from '../styles/stylesFile';


const AccountIcon = () => {
  return (
    <View style={s.iconContainer}>
      <Icon name="account-circle" size={50}/>
    </View>
  );
};       

export default AccountIcon;