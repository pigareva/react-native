import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const ToResultsButton = () => (
  <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
    Show results
  </Button>
);

const styles = StyleSheet.create({
  button: {
    margin: '1rem',
  }
});

export default ToResultsButton;
