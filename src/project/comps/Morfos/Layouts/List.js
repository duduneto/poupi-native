// ----------- import Packs
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// ----------- import Internals
import { useStl, useRouter } from '../../../../useMorfos';
import { ItemList } from '../..';

// #region :: STYLEs *********

const stlTitleBody = [useStl.flexRow, useStl.listWidth, { paddingBottom: 10 }];
const stlTitleTxt = [{ fontSize: 12, color: '#666', paddingRight: 30 }];

// #endregion *********

export default info => {
  // ---------- set Hooks
  const { callRouter } = useRouter();

  // ---------- set Itens Menu
  const arrMenu = [
    {
      image:
        'https://www.carrefour.com.br/_ui/responsive/theme-carrefour/images/logo_carrefourgif.gif',
      name: 'Carrefour Vl. Maria',
      desc: 'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      image:
        'https://i.pinimg.com/736x/fa/fe/65/fafe659098399bbd8a2ef13700b89d85.jpg',
      name: 'Extra',
      desc: 'Lorem Ipsum is simply dummy.',
    },
    {
      image: 'https://img.ibxk.com.br/2015/1/programas/8927143.png',
      name: 'Pão de Açúcar',
      desc: 'Lorem Ipsum is simply.',
    },
  ];

  const ItemsList = arrMenu.map(item => {
    const goTo = () => {
      callRouter('signin');
    };

    const infoReturn = {
      image: item.image,
      mktName: item.name,
      txtDetails: item.desc,
      act1: 'Ver Produtos',
      act2: 'Ver Vendas',
    };

    return (
      <TouchableOpacity onPress={() => goTo()}>
        <ItemList info={infoReturn} />
      </TouchableOpacity>
    );
  });

  return (
    <>
      <TitleList />
      {ItemsList}
    </>
  );
};

const TitleList = () => {
  return (
    <View style={stlTitleBody}>
      <Text style={stlTitleTxt}>Name</Text>
      <Text style={stlTitleTxt}>Descrição</Text>
    </View>
  );
};
