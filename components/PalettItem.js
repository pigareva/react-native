import React from 'react';
import { View, StyleSheet } from 'react-native-web';

const PalettItem = ({color}) => <View style={[styles.palettItem, {backgroundColor: color}]}/>

const styles = StyleSheet.create({
  palettItem: {
    width: 30,
    height: 30,
  }
})

export default PalettItem;
