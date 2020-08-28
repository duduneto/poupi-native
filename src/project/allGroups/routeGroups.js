// ----------- import Packs
import React from 'react';

// ----------- import Internals
import { NavControl } from '../comps';
import { useRouter, useData } from '../../useMorfos';

// ----------- Components

const Public = ({ children }) => {
  const { callRedirect } = useRouter();
  const authUser = useData(`sttPersist.userId`);
  const condReturn = authUser ? callRedirect('profile') : children;
  return condReturn;
};

const Private = ({ children }) => {
  const { callRedirect } = useRouter();
  const authUser = useData(`sttPersist.userId`);
  const condReturn = authUser ? children : callRedirect('signin');
  return condReturn;
};

const Adm = ({ children, permissionRef }) => {
  const CallAdm = () => {
    const { callRedirect } = useRouter();
    const userPermission = useData(`sttAuthUser.permissionNum`);
    const condPermission = userPermission === permissionRef;
    const condReturn = condPermission ? children : callRedirect('signin');
    return condReturn;
  };
  return <Private children={<CallAdm />} />;
};

const Priv1 = ({ children }) => <Adm permissionRef={1} children={children} />;
const Priv2 = ({ children }) => <Adm permissionRef={2} children={children} />;
const Priv3 = ({ children }) => <Adm permissionRef={3} children={children} />;

// ----------- set Return
export default {
  pub1: [Public],
  pub2: [Public, NavControl],
  privNav: [Private, NavControl],
  admNav: [Adm, NavControl],
  priv1: [Public, NavControl],
  priv1b: [Priv1, NavControl],
  priv2: [Priv2, NavControl],
  priv3: [Priv3, NavControl],
  reg3: [Priv3],
};
