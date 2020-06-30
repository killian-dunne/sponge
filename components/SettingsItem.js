import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { colors } from '../styles/colors';
import { s } from '../styles/stylesFile';

const SettingsItem = (props) => {
  let answerElt;
  if (props.answer) {
    answerElt = <Text style={s.subText}>{props.answer}</Text>;
  }
  let underline = {};
  if (!props.last) {
    underline = s.bottomBorder;
  }
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={colors.pressedGrey}
      onPress={() => {}}
    >
      <View style={[s.listItem, underline]}>
        <Text style={s.mainText}>{props.text}</Text>
        {answerElt}
      </View> 
    </TouchableHighlight>
  );
};


export default SettingsItem;
