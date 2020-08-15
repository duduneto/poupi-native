// ----------- import Packs
import React from 'react';
import { useSelector } from 'react-redux';
import { Platform } from 'react-native';

// ----------- import Internals
import { useRouter } from '../../../useMorfos';

export default ({ info }) => {
  useChangeHistory();
  const condManualUrl = useManualUrl();
  return !condManualUrl && <NoManual info={info} />;
};

function useChangeHistory() {
  const callRouter = useRouter();

  const initHistory = () => {
    const pathName = window.location.pathname.split('/')[1];
    const changeHistory = () => callRouter(pathName);
    const callListener = () =>
      window.addEventListener('popstate', changeHistory);
    callListener();
    return () => {
      callListener();
    };
  };
  React.useEffect(initHistory, []);
}

const NoManual = ({ info }) => {
  const { RenderComp, infoSc } = info;
  changeUrl(infoSc.path);
  return <RenderComp />;
};

function changeUrl(path) {
  window.history.pushState(null, '', '/' + path);
}

function useManualUrl() {
  const selectedRoute = useSelector(state => state.rdRoute.path);
  const callRouter = useRouter();
  const condWeb = Platform.OS === 'web';
  const condPathName = condWeb && window.location.pathname.split('/')[1];
  const condBlank = condPathName === '' ? selectedRoute : condPathName;
  const condManual = condWeb && condBlank !== selectedRoute;
  const [sttManualUrl, setManualUrl] = React.useState(condManual);

  const initRoute = () => {
    condManual && callRouter(condPathName) && setManualUrl(false);
  };

  React.useEffect(initRoute, []);

  return sttManualUrl;
}
