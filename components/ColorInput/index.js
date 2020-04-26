import React, { useContext } from 'react';
import { MyContext } from '../../contextManager';
import ViewComponent from './view';

const ColorInput = () => {
  const { color, setColor } = useContext(MyContext);
  const colorChangeHandler = color => setColor(color)

  return <ViewComponent
    color={color}
    onChangeTextHandler={colorChangeHandler}
  />
}

export default ColorInput;
