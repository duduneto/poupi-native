// ----------- import Packs
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// ----------- import Internals
import { useStl, UseIcoMoon, useRouter, useData } from '../../../../useMorfos';

// #region :: STYLEs *********

const stlSideMenu = [useStl.leftBar, useStl.pad(80, 0)];
const stlItem = [useStl.flexRow, useStl.pad(10, 20)];
const stlLabel = [{ paddingLeft: 6 }];

// #endregion *********

export default ({ children }) => {
  // ---------- set Data
  const path = useData('baseRoute.path');

  // ---------- set Hooks
  const { callRouter } = useRouter();

  // ---------- set Itens Menu
  const arrMenu = [
    { icon: 'cart', label: 'Supermercados', goTo: 'mktList' },
    { icon: 'user', label: 'Produtos', goTo: 'prodList' },
    { icon: 'user', label: 'Sair', goTo: 'logout' },
  ];

  const ItemsList = arrMenu.map(item => {
    const logout = item.goTo === 'logout';
    const goTo = () => {
      if (logout) {
        callRouter('signin');
      } else {
        callRouter(item.goTo);
      }
    };

    const condActiveMenu = item.goTo === path;
    const condColor = condActiveMenu ? '#66cc66' : '#444';

    return (
      <TouchableOpacity style={stlItem} onPress={() => goTo()}>
        <UseIcoMoon name={item.icon} size={20} color={condColor} />
        <Text style={[stlLabel, { color: condColor }]}>{item.label}</Text>
      </TouchableOpacity>
    );
  });

  return <View style={stlSideMenu}>{ItemsList}</View>;
};
