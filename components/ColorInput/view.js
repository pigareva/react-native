import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Headline } from 'react-native-paper';

const ViewComponent = ({color, onChangeTextHandler}) =>
  <View style={styles.container}>
    <Headline style={styles.headline}>Input your initial color</Headline>
    <TextInput
      style={styles.input}
      mode="outlined"
      onChangeText={onChangeTextHandler}
      value={color}
      placeholder="red"
    />
    <View style={[styles.colorBox, {backgroundColor: color}]}/>
  </View>

const styles  = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    marginTop: 50,
  },
  headline: {
    textAlign: 'center',
  },
  input: {
    margin: 20,
  },
  colorBox:{
    height: 66,
    borderRadius: 4,
    margin: 20,
  },
})

export default ViewComponent;
