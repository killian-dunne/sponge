import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FilePreview from './FilePreview';
import HeaderIcon from './HeaderIcon';
import FilesList from './FilesList';
import SettingsIcon from './SettingsIcon';
import { s } from '../styles/stylesFile';
import { ScrollView } from 'react-native-gesture-handler';

class HomeScreen extends Component {
  
  render() {
    console.log(s);
    return (
      <View style={styles.mainContainer}>
        <View style={s.header}>
          <HeaderIcon />
          <SettingsIcon navigation={this.props.navigation} />
        </View>
        <ScrollView styles={styles.scrollArea}>
          <FilePreview /> 
          <FilesList />
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  scrollArea: {
    justifyContent: "center",
    alignItems: "center"
  },
  spacing: {
    flex: 2
  }
})

export default HomeScreen;