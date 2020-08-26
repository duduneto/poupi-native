// ----------- import Packs
import React from 'react';
import { View, Text } from 'react-native';

// ----------- import Internals
import { Card, Thumbnail, ActionList } from '../../';
import { useStl } from '../../../../useMorfos';

// #region :: STYLEs *********

const stlLabel = [useStl.flex1, { fontWeight: '600', paddingRight: 10 }];
const stlDetail = [useStl.flex4];

// #endregion *********

export default ({ content }) => {
  return (
    <Card>
      <Thumbnail />
      <CondDivider>
        <Text style={stlLabel}>{content.mktName}</Text>
        <Text style={stlDetail}>{content.txtDetails}</Text>

        <ActionList label={content.act1} />
        <ActionList label={content.act2} />
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
