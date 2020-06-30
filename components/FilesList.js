import React from 'react';
import File from './File';
import { View, Text, StyleSheet } from 'react-native';

const files = require('../data/Files.json');

const FilesList = () => {
  const renderFiles = files.map((file, idx) => <File fileObject={file} key={idx} />);
  return (
    <View style={styles.cardContainer}>
      {renderFiles}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center", 
    alignItems: "center"
  }
})

export default FilesList;