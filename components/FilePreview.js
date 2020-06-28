import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const FilePreview = () => {
  return (
    <View style={styles.fileContainer} >
      <Image source={require('../public/generic_book.png')} style={styles.previewImage}/>
    </View>
  );
};

const styles = StyleSheet.create({
  fileContainer: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center"

  }, 
  previewImage: {

  }
})

export default FilePreview;