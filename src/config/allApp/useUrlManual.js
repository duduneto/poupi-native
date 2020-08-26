// ----------- import Packs
import React from 'react';

// ---------- import Internals
import { useRouter, useData } from '../../useMorfos';

// ----------- set Default
export default () => {
  // ----------- set Data
  const selectedRoute = useData('sttRoute.path');

  // ----------- set Conds
  const condPathName = window.location.pathname.split('/')[1];
  const condBlank = condPathName === '' ? selectedRoute : condPathName;
  const condManual = condBlank !== selectedRoute;

  // ----------- set Effects
  const fxInitRoute = () => {
    condManual && callRouter(condPathName) && setManualUrl(false);
  };

  // ----------- set Hooks
  const { callRouter } = useRouter();
  React.useEffect(fxInitRoute, []);
  const [sttManualUrl, setManualUrl] = React.useState(condManual);

  // ----------- set Return
  return sttManualUrl;
};
