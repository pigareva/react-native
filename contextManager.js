import React, { useState } from 'react';

const context = {  color: 'green', setColor: () => {}};

export const MyContext = React.createContext(context);

export const UseContext = () => {
  const [color, setColor] = useState('blue');
  const setCurrentColor = React.useCallback(currentColor => setColor(currentColor),[])
  return {
    color,
    setColor: setCurrentColor,
  }
}
