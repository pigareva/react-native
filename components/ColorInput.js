import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Headline } from 'react-native-paper';

const ColorInput = () => {
  const initialColor  = 'red';
  const [color, setColor] = useState(initialColor);

  return <View style={Styles.container}>
    <Headline>Input your initial color</Headline>
    <TextInput
      mode="outlined"
      onChangeText={color => setColor(color)}
      value={color}
      placeholder="red"
    />
    <View style={[Styles.colorBox, {backgroundColor: color}]}/>
  </View>
}

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
    width: '80%',
    height: 20,
    flex: 0.2,
    border: '1px solid black',
  },

})

export default ColorInput;
