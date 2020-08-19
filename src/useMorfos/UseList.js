// ----------- import Packs
// import React from 'react';

// ----------- import Internals
import { useData } from '.';

// ----------- set Default Component
export default ({ info, children }) => {
  const dataToMap = useData(info);
  const condArr = Array.isArray(dataToMap) && dataToMap;

  if (!condArr) {
    const LEIA = 'Você pode usar o INIT DATA pra preparar a lista!';
    throw new Error('Envie um array pro UseList!', LEIA);
  }
  const mapItems = () => condArr.map(item => children(item.id));
  return dataToMap && mapItems();
};
