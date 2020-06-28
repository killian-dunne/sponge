import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, ListView } from 'react-native';
import { s } from '../styles/stylesFile';

const SettingsList = () => {
  return (
    <ScrollView contentContainerStyle={s.settingsView}>
      <Text>this is my list</Text>
    </ScrollView>
  );
};

export default SettingsList;