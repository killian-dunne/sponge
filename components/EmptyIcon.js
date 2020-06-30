import React from 'react';
import { View, Text } from 'react-native';
import { s } from '../styles/stylesFile';
import { colors } from '../styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const EmptyIcon = () => {
  return (
    <View style={s.iconContainer} >
      <Icon name="arrow-left" size={50} color={colors.backYellow} />
    </View>
  );
};

export default EmptyIcon;