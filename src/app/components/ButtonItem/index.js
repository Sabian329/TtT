import React, { useState } from 'react';
import { Button } from './styled';
import x from '../../assets/x.svg';
import o from '../../assets/o.svg';
import { STATES } from '../../constans/buttonConfig';

export const ButtonItem = ({ symbol, setSymbol, setConfiguration, index, configuration }) => {
  const [checked, setChecked] = useState(false);
  const [localSymbol, setLocalSymbol] = useState(STATES.notSelected);
  const switchButton = () => {
    setChecked(true);
    setSymbol(!symbol);
    !checked && setLocalSymbol(symbol);
    !checked && setConfiguration(prev => [...prev, { tileIndex: index, state: symbol ? STATES.x : STATES.o }]);
  };

  return (
    <Button onClick={() => switchButton()}>{checked ? localSymbol ? <img src={o} /> : <img src={x} /> : ''}</Button>
  );
};
