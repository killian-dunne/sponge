import React from 'react';
import { s } from '../styles/stylesFile';
import Item from './Item';
import { FlatList } from 'react-native';


const ItemsList = (props) => {
  return (
    <FlatList style={s.ListView} 
      data={props.items} 
      keyExtractor={(item, index) => index.toString()} 
      renderItem={({item, index}) => (
        <Item 
          text={item.text}  
          answer={item.answer} 
          last={index === props.items.length - 1} 
          actionName={item.actionName}
          navigation={props.navigation}
        />
     )} 
    />
  );
};

export default ItemsList;