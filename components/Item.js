import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { colors } from '../styles/colors';
import { s } from '../styles/stylesFile';

const Item = (props) => {
  let answerElt;
  if (props.answer) {
    answerElt = <Text style={s.subText}>{props.answer}</Text>;
  }
  let underline = {};
  if (!props.last) {
    underline = s.bottomBorder;
  }

  const performAction = () => {
    switch (props.actionName) {
      case "navigateGenSettings":
        props.navigation.push('Settings', {
          switchOption: 'general'
        })
        return;
      case "navigateReadSettings":
        props.navigation.push('Settings', {
          switchOption: 'reading'
        })
        return;
      default:
        return;
    }
  }

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={colors.pressedGrey}
      onPress={performAction}
    >
      <View style={[s.Item, underline]}>
        <Text style={s.mainText}>{props.text}</Text>
        {answerElt}
      </View> 
    </TouchableHighlight>
  );
};


export default Item;
