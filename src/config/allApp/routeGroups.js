// ----------- import Packs
import React from 'react';
import { useSelector } from 'react-redux';

// ----------- import Internals
import { NavUp } from '../../project/comps';
import {
  useRouter,
  // useSelectors
} from '../../useMorfos';

// ----------- Components

const Public = ({ children }) => {
  const { callRedirect } = useRouter();
  const authUser = useSelector(state => state.rdAuthUser);
  const condReturn = authUser ? callRedirect('profile') : children;
  return condReturn;
};

const Private = ({ children }) => {
  const { callRedirect } = useRouter();
  const authUser = useSelector(state => state.rdAuthUser);
  const condReturn = authUser ? children : callRedirect('signin');
  return condReturn;
};

const Adm = ({ children, permissionRef }) => {
  const CallAdm = () => {
    const { callRedirect } = useRouter();
    // const { useCondPermission } = useSelectors();
    // const condPermission = useCondPermission(permissionRef);
    // const condReturn = condPermission ? children : callRedirect('signin');
    // return condReturn;
  };
  return <Private>{/* <CallAdm /> */}</Private>;
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
