// ----------- import Packs
import React from 'react';
import { Text } from 'react-native';

// ----------- import Internals
import { Card, Thumbnail, ActionList } from '../../';
import { useStl } from '../../../../useMorfos';

// #region :: STYLEs *********

const stlLabel = [useStl.flex1, { fontWeight: '600', paddingRight: 10 }];
const stlDetail = [useStl.flex4];

// #endregion *********

export default ({ info }) => {
  return (
    <Card>
      <Thumbnail src={info.image} />
      <CondDivider>
        <Text style={stlLabel}>{info.mktName}</Text>
        <Text style={stlDetail}>{info.txtDetails}</Text>

        <ActionList info={info.act1} />
        <ActionList info={info.act2} />
      </CondDivider>
    </Card>
  );
};

const CondDivider = ({ children }) => {
  const condInsertDiv = children.length > 1;
  const withDiv = '';

  const withoutDiv = children;
  const returnDiv = condInsertDiv ? withoutDiv : withDiv;

  return returnDiv;
};
