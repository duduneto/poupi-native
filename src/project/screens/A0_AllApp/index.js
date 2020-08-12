// ----------- import Packs
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// ----------- import Internals
import allScs from '../../screens';
import Router from '../../Router';
import groups from '../../routeGroups';
import { utils } from '../../../useMorfos';
const { toArr } = utils;
const X_404 = require('../../X_404');

// ----------- set All screens
const screens = (arr = []) => arr.map(item => require(`${item}`));

// ----------- set All App Screen
export default () => {
  const {
    RenderComp,
    infoSc,
    infoSc: { favicon = 'http://www.google.com/favicon.ico' },
  } = useSelectSc(screens(toArr(allScs)));

  changeFavicon(favicon);
  document.title = infoSc.title;

  const infoReturn = { RenderComp, infoSc };
  return <Router info={infoReturn} />;
};

// ----------- set Favicon
const changeFavicon = src => {
  const link = document.createElement('link');
  const oldLink = document.getElementById('dynamic-favicon');
  link.id = 'dynamic-favicon';
  link.rel = 'shortcut icon';
  link.href = src;
  if (oldLink) {
    document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
};

// ----------- set Select Screen
function useSelectSc(arr) {
  const dispatch = useDispatch();
  const selectedRoute = useSelector(state => state.rdRoute.path);
  const arrScs = utils.toArr(arr);
  const selectedSc = arrScs.find(
    item => item.infoSc && item.infoSc.path === selectedRoute,
  );

  const condComp = !selectedSc ? X_404 : selectedSc;
  // const infoGroup = condComp.infoSc && condComp.infoSc.groupSc;
  // const condGroup = infoGroup && renderGroup(condComp);
  const RenderComp = condComp.default;

  // ----------- set infoSc
  dispatch({
    type: 'CHANGE_RD_PROP',
    rdName: 'rdRoute',
    rdPropName: 'path',
    value: condComp.infoSc.path,
  });

  // ----------- set Return
  return { RenderComp, infoSc: condComp.infoSc };
}

// ----------- set Select Screen
function renderGroup(info) {
  const group = info.infoSc.groupSc;
  const groupComps = groups[group];

  // let GroupComps;
  const GroupLoop = (idx = 0) => {
    const Item = groupComps[idx];
    const next = idx + 1;
    const condFinal = idx + 1 === groupComps.length;
    const CompScreen = info.default;
    const compFinal = <Item children={CompScreen} />;
    const compGroup = <Item>{GroupLoop(next)}</Item>;
    const condReturn = condFinal ? compFinal : compGroup;
    return condReturn;
  };
  // groupComps.map((Item, idx) => {
  //   const numb = idx + 1;
  //   const condFinal = numb === groupComps.length;
  //   const CompScreen = info.default;
  //   // const condReturn = !condFinal ? <Item><CompScreen/></Item>: <Item>
  // });

  // console.log('>>', GroupLoop);
  // console.log('>>', groupComps);
}
