import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import FilePreview from '../components/FilePreview';
import HeaderIcon from '../components/HeaderIcon';
import SettingsIcon from '../components/SettingsIcon';
import { s } from '../styles/stylesFile';
import File from '../components/File'

const files = require('../data/Files.json');

class HomeScreen extends Component {
  
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={s.header}>
          <HeaderIcon />
          <SettingsIcon navigation={this.props.navigation} />
        </View>
        <FlatList styles={styles.scrollArea} 
          data={files}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            if (index === 0) {
              return (
                <>
                  <FilePreview navigation={this.props.navigation} />
                  <File fileObject={item} key={index} />
                </>
              );
            } else {
              return <File fileObject={item} key={index} />;
            }
          }}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
  },
  scrollArea: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center"
  },
})

export default HomeScreen;