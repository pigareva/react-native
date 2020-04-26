import React from 'react';
import { View } from 'react-native-web';
import PalettItem from './PalettItem';

const Palett = ({colors}) => <View style={styles.palett}>
  {colors.map(color => <PalettItem color={color}/> )}
</View>

const styles  = StyleSheet.create({
  palett: {
    display: 'flex',
    justifyContent: 'start',
  }
})

export default Palett;
