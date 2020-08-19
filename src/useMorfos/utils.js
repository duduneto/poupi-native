const utils = {
  logRender: (name, info = '-') =>
    process.env.NODE_ENV === 'development' &&
    console.log(`RENDER => ${name}`, info),

  timeFunc: (func, ms = 900) => setTimeout(func, ms),

  toArr(obj) {
    var newArr = [];
    for (var item in obj) newArr.push(obj[item]);
    return newArr;
  },

  setPath(obj, path = '') {
    path.split('.').reduce((p, c) => p && p[c], obj && obj);
  },

  mergeDeep(...objects) {
    const isObject = obj => obj && typeof obj === 'object';

    return objects.reduce((prev, obj) => {
      Object.keys(obj).forEach(key => {
        const pVal = prev[key];
        const oVal = obj[key];

        if (Array.isArray(pVal) && Array.isArray(oVal)) {
          prev[key] = pVal.concat(...oVal);
        } else if (isObject(pVal) && isObject(oVal)) {
          prev[key] = mergeDeep(pVal, oVal);
        } else {
          prev[key] = oVal;
        }
      });

      return prev;
    }, {});
  },

  hasData(data) {
    const checkArr = [];

    const loop = info => {
      const isObj = typeof info === 'object';
      if (isObj) {
        for (var item in info) loop(info[item]);
        return;
      }
      checkArr.push(info && true);
    };

    loop(data);

    const findTrue = checkArr.find(item => item);
    const finalCheck = findTrue ? true : false;
    return finalCheck;
  },

  currencyMask(info, returnAsNumber) {
    if (returnAsNumber) {
      return Number(String(info).replace(/\D/g, '')) / 100;
    } else {
      const _info = String(info);
      const onlyNumbers = Number(_info.replace(/\D/g, ''));
      const stringWithMask = (onlyNumbers / 100)
        .toFixed(2)
        .replace('.', ',')
        .replace(/\d(?=(\d{3})+,)/g, '$&.');
      return stringWithMask;
    }
  },

  // ---------- set Object Iteration

  findKey: (obj, val) => {
    let found;
    for (const key in obj) {
      const item = obj[key];
      if (val === item) {
        found = key;
      }
    }
    return found;
  },

  findVal: (obj, val) => {
    let found;
    for (const key in obj) {
      const item = obj[key];
      if (val === item) {
        found = item;
      }
    }
    return found;
  },

  filterObj: (obj, field, type, cond) => {
    let found;
    for (const key in obj) {
      const item = obj[key];
      const currField = item && item[field];

      const toSel = {
        contains() {
          if (Array.isArray([currField])) {
            const findFn = itemArr => itemArr === cond;
            const condFind = currField.find(findFn);
            if (condFind) {
              found = { ...found, [key]: item };
            }
          }
        },
        '==='() {
          const condFind = currField === cond;
          if (condFind) {
            found = { ...found, [key]: item };
          }
        },
      };

      currField && toSel[type]();
    }
    return found;
  },
};

export const {
  logRender,
  timeFunc,
  toArr,
  setPath,
  mergeDeep,
  hasData,
  currencyMask,
  findKey,
  findVal,
  filterObj,
} = utils;
