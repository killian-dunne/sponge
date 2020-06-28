import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { s } from '../styles/stylesFile';

const HeaderIcon = () => {
  return (
    <View style={s.iconContainer}>
      <Image source={require('../public/sponge3.jpg')} style={styles.spongeIcon} />      
    </View>
  );
};

const styles = StyleSheet.create({
  spongeIcon: {
    height: 50,
    width: 50,
    borderRadius: 10
  }
})

export default HeaderIcon;