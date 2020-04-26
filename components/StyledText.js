import React from 'react';
c

export function MonoText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
}
