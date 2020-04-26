import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-web';
import TextInput from 'react-native-web/dist/exports/TextInput';

const ColorInput = () => {
  const initialColor  = 'red';
  const [color, setColor] = useState(initialColor);

  return <View style={Styles.container}>
    <Text>Input your initial color</Text>
    <TextInput
      style={Styles.input}
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
  },
  colorBox:{
    width: '80%',
    height: 20,
    flex: 0.2,
    border: '1px solid black',
  },
  input: {
    border: 'solid black',
    height: 20,
    borderWidth: StyleSheet.hairlineWidth
  }

})

export default ColorInput;
