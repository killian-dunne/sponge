import React, { Component } from 'react';
import { View } from 'react-native';
import GoBackIcon from '../components/GoBackIcon';
import AccountIcon from '../components/AccountIcon';
import SettingsSwitch from '../components/SettingsSwitch';
import ItemsList from '../components/ItemsList';
import { s } from '../styles/stylesFile';

const settingsArray = require('../data/OptionsArray.json');

class OptionsScreen extends Component {
  render() {
    return (
      <View>
        <View style={s.header}>
          <GoBackIcon navigation={this.props.navigation} />
          <AccountIcon />
        </View>
        <ItemsList items={settingsArray} navigation={this.props.navigation} />
      </View>
    );
  }
}

export default OptionsScreen;