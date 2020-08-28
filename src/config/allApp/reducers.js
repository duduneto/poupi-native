import allScs from '../../project/screens';

// ---------- set Reducers
export default (state, action) => {
  const inits = {
    // ---------- set Init Routes
    base_InitRoutes: () => {
      // ----------- iterate Screen
      let routesInfo = {};
      for (const key in allScs) {
        const item = allScs[key];
        const moduleInfo = item.infoSc;
        const routeKey = moduleInfo.path;
        const scKey = key;
        routesInfo[routeKey] = { scKey, ...moduleInfo };
      }

      // ----------- set State
      return {
        ...state,
        sttRoute: {
          ...state.sttRoute,
          routesInfo,
        },
      };
    },
  };

  const listeners = {
    // ---------- set Desktop Size
    base_ListenResize: () => {
      const pointBreak = 620;
      const condDesk = action.value >= pointBreak;

      return {
        ...state,
        sttRoute: {
          ...state.sttRoute,
          condDeskSize: condDesk,
        },
      };
    },

    // ---------- set Push Listener
    base_condPushTrue: () => {
      return {
        ...state,
        sttRoute: {
          ...state.sttRoute,
          condNoPush: false,
        },
      };
    },

    // ---------- set History
    base_History: () => {
      return {
        ...state,
        sttRoute: {
          ...state.sttRoute,
          path: action.value,
          condNoPush: true,
        },
      };
    },
  };

  return {
    ...inits,
    ...listeners,
  };
};
