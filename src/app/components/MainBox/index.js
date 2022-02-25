import React, { useEffect, useState } from 'react';
import { winConfig } from '../../constans/winConfig';
import { ButtonItem } from '../ButtonItem';

import { Wrapper } from './styled';

export const MainBox = () => {
  const [symbol, setSymbol] = useState(true);
  const [configuration, setConfiguration] = useState([]);
  useEffect(() => {
    let simbolObject = configuration.filter(i => {
      return i.state.includes('x');
    });
    let indexes = simbolObject.map(item => item.tileIndex);
    let config = winConfig.map(i => (i.toString() === indexes.toString() ? 'win' : i.includes(...indexes) && 'win2'));

    console.log(config);
  }, [configuration]);

  return (
    <Wrapper>
      {[...Array(9).keys()].map((item, index) => (
        <ButtonItem
          setConfiguration={setConfiguration}
          symbol={symbol}
          key={index}
          setSymbol={setSymbol}
          index={index}
          configuration={configuration}
        />
      ))}
    </Wrapper>
  );
};
