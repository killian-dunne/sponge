import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import ItemsList from '../components/ItemsList';
import { s } from '../styles/stylesFile';
import GoBackIcon from '../components/GoBackIcon';
import SettingsSwitch from '../components/SettingsSwitch';
import EmptyIcon from '../components/EmptyIcon';

const SettingsScreen = ({ route, navigation }) => {
  const { switchOption } = route.params;
  console.log(route.params);
  const [switchBool, toggleSwitch] = useState(switchOption === 'reading');


  const toggleScreen = () => {
    toggleSwitch(!switchBool);
  }

  let itemsArray;
  if (switchBool) {
    itemsArray = require('../data/ReadSettingsArray.json');
  } else {
    itemsArray = require('../data/GenSettingsArray.json');
  }

  console.log(switchBool);

  return (
    <View>
      <View style={s.header}>
        <GoBackIcon navigation={navigation} />
        <SettingsSwitch value={switchBool} navigation={navigation} toggleScreen={toggleScreen}/>
        <EmptyIcon />
      </View>
      <ItemsList items={itemsArray}/>
    </View>
  );
};

export default SettingsScreen;