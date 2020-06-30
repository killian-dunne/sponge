import React from 'react';
import { s } from '../styles/stylesFile';
import SettingsItem from './SettingsItem';
import { FlatList } from 'react-native';
const settingsArray = require('../data/SettingsArray.json');

const SettingsList = (props) => {
  return (
    <FlatList style={s.settingsView} 
      data={settingsArray} 
      keyExtractor={(item, index) => index.toString()} 
      renderItem={({item, index}) => (
        <SettingsItem 
          text={item.text}  
          answer={item.answer} 
          last={index === settingsArray.length - 1} 
          actionName={item.actionName}
          navigation={props.navigation}
        />
     )} 
    />
  );
};

export default SettingsList;