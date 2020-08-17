// ----------- import Packs
import React from 'react';

// ----------- import Internals
import { NavUp } from '../../project/comps';
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
  pub2: [Public, NavUp],
  privNav: [Private, NavUp],
  admNav: [Adm, NavUp],
  priv1: [Public, NavUp],
  priv1b: [Priv1, NavUp],
  priv2: [Priv2, NavUp],
  priv3: [Priv3, NavUp],
  reg3: [Priv3],
};
