import React, { Component } from 'react';
import { View } from 'react-native';
import GoBackIcon from '../components/GoBackIcon';
import AccountIcon from '../components/AccountIcon';
import SettingsSwitch from '../components/SettingsSwitch';
import SettingsList from '../components/SettingsList';
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
        <SettingsList navigation={this.props.navigation} />
      </View>
    );
  }
}

export default OptionsScreen;