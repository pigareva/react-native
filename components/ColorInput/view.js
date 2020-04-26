import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Headline } from 'react-native-paper';

const ViewComponent = ({color, onChangeTextHandler}) =>
  <View style={Styles.container}>
    <Headline>Input your initial color</Headline>
    <TextInput
      mode="outlined"
      onChangeText={onChangeTextHandler}
      value={color}
      placeholder="red"
    />
    <View style={[Styles.colorBox, {backgroundColor: color}]}/>
  </View>

const Styles  = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  colorBox:{
    width: 195,
    height: 66,
    borderRadius: 4,
  },
})

export default ViewComponent;
