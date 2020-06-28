import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const File = (props) => {
  let title = props.fileObject.title;
  let description = props.fileObject.description;
  let date = props.fileObject.date;
  return (
    <View style={styles.card} >
      <Text style={styles.titleText} >
        <Text>{title}</Text>
      </Text>
      <Text style={styles.regularText} >
        <Text>{description}</Text>
        <Text>{date}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '80%',
    alignItems: "flex-start",
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 10
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 20
  },
  regularText: {
    
  }
})

export default File;