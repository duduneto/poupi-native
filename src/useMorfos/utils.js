export default {
  consoleRender: (name, info) =>
    false && console.log(`RENDER => ${name}`, info || '-'),

  findItem: (item, arr) => arr.find(res => res.docId === item),

  findIndexId: (item, arr) => arr.findIndex(res => res.docId === item),

  filterFn: (arr, type) => arr.filter(res => res.type === type),

  timeFunc: func => setTimeout(func, 900),

  toArr(obj) {
    var newArr = [];
    for (var item in obj) newArr.push(obj[item]);
    return newArr;
  },

  setPath: (obj, path = '') =>
    path.split('.').reduce((p, c) => p && p[c], obj && obj),

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

  mergeDeep: (...objects) => {
    const isObject = obj => obj && typeof obj === 'object';

    return objects.reduce((prev, obj) => {
      Object.keys(obj).forEach(key => {
        const pVal = prev[key];
        const oVal = obj[key];

        if (Array.isArray(pVal) && Array.isArray(oVal)) {
          prev[key] = pVal.concat(...oVal);
        } else if (isObject(pVal) && isObject(oVal)) {
          prev[key] = utils.mergeDeep(pVal, oVal);
        } else {
          prev[key] = oVal;
        }
      });

      return prev;
    }, {});
  },

  currencyMask: (info, returnAsNumber) => {
    if (returnAsNumber) {
      return Number(String(info).replace(/\D/g, '')) / 100;
    } else {
      const _info = String(info);
      const onlyNumbers = Number(_info.replace(/\D/g, ''));
      const stringWithMask = (onlyNumbers / 100)
        .toFixed(2)
        .replace('.', ',')
        .replace(/\d(?=(\d{3})+\,)/g, '$&.');
      return stringWithMask;
    }
  },
};
