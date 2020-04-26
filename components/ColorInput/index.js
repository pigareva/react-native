import React, { useState } from 'react';
import ViewComponent from './view';

const ColorInput = () => {
  const initialColor  = 'red';
  const [color, setColor] = useState(initialColor);
  const colorChangeHandler = color => setColor(color)

  return <ViewComponent
    color={color}
    onChangeTextHandler={colorChangeHandler}
  />
}

export default ColorInput;
