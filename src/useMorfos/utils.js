export default {
  consoleRender: (name, info) =>
    false && console.log(`RENDER => ${name}`, info || '-'),

  findItem: (item, arr) => arr.find(res => res.docId === item),

  findIndexId: (item, arr) => arr.findIndex(res => res.docId === item),

  filterFn: (arr, type) => arr.filter(res => res.type === type),

  timeFunc: func => setTimeout(func, 900),
};
