// ----------- import Packs
import React from 'react';
import { Text, ScrollView, Pressable } from 'react-native';

// ----------- import Internals
import { useStl } from '../../../../useMorfos';
import { SideLeft, NavUp, SideRight } from '../..';

export default ({ children }) => {
  // ----------- set Data
  const 

  // ----------- set Hooks
  const [sttMenu, setMenu] = React.useState(false);

  // ----------- set BUTTONs
  const toggleMenu = () => setMenu(!sttMenu);

  // ----------- set Style
  const stlBODY1 = [useStl.pad20, useStl.flex1, { backgroundColor: '#f0f0f0' }];

  return (
    <>
      <SideLeft />

      <NavUp />

      {/* BIG SCREEN */}
      <Pressable onPress={toggleMenu} style={stlBODY1}>
        <ScrollView style={stlBODY1}>{children}</ScrollView>
      </Pressable>

      {sttMenu && (
        <SideRight>
          <Text>Oi Direita!</Text>
        </SideRight>
      )}
    </>
  );
};
