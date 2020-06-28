import React, { Component } from 'react';
import { View } from 'react-native';
import GoBackIcon from './GoBackIcon';
import AccountIcon from './AccountIcon';
import SettingsSwitch from './SettingsSwitch';
import SettingsList from './SettingsList';
import { s } from '../styles/stylesFile';

class OptionsScreen extends Component {
  render() {
    return (
      <View>
        <View style={s.header}>
          <GoBackIcon navigation={this.props.navigation} />
          <SettingsSwitch />
          <AccountIcon />
        </View>
        <SettingsList />
      </View>
    );
  }
}

export default OptionsScreen;