import React from 'react';
import Pdf from 'react-native-pdf';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

const FileScreen = () => {

  const source = {
    uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',
    cache:true
  };

  return (
    <View style={styles.pdfContainer}>
      <Text>Just some text</Text>
      <Pdf 
        source={source}
        onLoadComplete={(numberOfPages,filePath)=>{
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page,numberOfPages)=>{
            console.log(`current page: ${page}`);
        }}
        onError={(error)=>{
            console.log(error);
        }}
        onPressLink={(uri)=>{
            console.log(`Link pressed: ${uri}`)
        }}
        style={styles.pdf}
      />
      <Text>I hope</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pdfContainer: {
    flex: 1
  },
  pdf: {
    flex: 1, 
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
})

export default FileScreen;
