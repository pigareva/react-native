import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-web';
import TextInput from 'react-native-web/dist/exports/TextInput';

const ColorInput = () => {
  const initialColor  = '#fff';
  const [color, setColor] = useState(initialColor);


  return <View style={Styles.container}>
    <Text>Input your initial color</Text>
    <TextInput
      onChangeText={color => setColor(color)}
      value={color}
      placeholder="red"
    />
    <View style={{...Styles.colorBox, backgroundColor: color}}/>
  </View>
}

const Styles  = StyleSheet.create({
  container: {
    width: 100,
    height: 30,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  colorBox:{
    width: 100,
    height: 10,
  }

})

export default ColorInput;
