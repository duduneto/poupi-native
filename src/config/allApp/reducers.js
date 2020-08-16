// ---------- set Reducers
export default (state, action) => {
  return {
    // ---------- set Desktop Size
    base_ListenResize: () => {
      const pointBreak = 620;
      const condDesk = action.value >= pointBreak;

      return {
        ...state,
        sttCondDeskSize: condDesk,
      };
    },

    // ---------- set Init Routes
    base_InitRoutes: () => {
      // ----------- set Routes Data
      const allScs = require(`../../project/screens`).default;

      // ----------- iterate Screen
      let routesInfo = {};
      for (const key in allScs) {
        const item = allScs[key];
        const moduleInfo = require(`../../project/screens/${item}`).infoSc;
        const routeKey = moduleInfo.path;
        const folderPath = item;
        routesInfo[routeKey] = { folderPath, ...moduleInfo };
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
};
