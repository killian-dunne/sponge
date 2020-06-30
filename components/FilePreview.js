import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const FilePreview = (props) => {
  return (
    <View style={styles.fileContainer} >
      <TouchableOpacity onPress={() => props.navigation.navigate('Pdf')} style={styles.touchStyle}> 
        <Image source={require('../public/generic_document.jpg')} style={styles.previewImage} resizeMode="contain"/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  fileContainer: {
    flexDirection: 'column',
    marginHorizontal: 20,
    width: '80%',
    alignSelf: 'center',
    padding: 20,
    justifyContent: 'flex-start'
  },
  touchStyle: {
    height: 400,
    justifyContent: 'center'
  },
  previewImage: {
    alignSelf: 'center',
    height: '100%',
  },
})

export default FilePreview;