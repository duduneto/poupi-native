import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

export default () => <App />;

// ------ REDUX 1
// #region

const utils = {
  setObjItems({ data, keyName, setVals }) {
    const newObj = {};
    const arrData = Array.isArray(data) ? data : Object.values(data);
    arrData.map((itemData, idx) => {
      const condKey = keyName ? itemData[keyName] : idx;
      const mapItem = itemField =>
        (newObj[condKey] = {
          ...newObj[condKey],
          [itemField]: itemData[itemField],
        });
      const condFields = setVals ?? Object.keys(itemData);
      condFields.map(mapItem);
      return '';
    });
    return newObj;
  },
  toArr(obj) {
    var newArr = [];
    for (var item in obj) newArr.push(obj[item]);
    return newArr;
  },
  setPath: (obj, path) => path.split('.').reduce((p, c) => p && p[c], obj),

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
};

const mockDb = {
  categories: {
    xxx1: {
      docId: 'xxx1',
      name: 'Frutas',
      items: {
        zzz1: { id: 'zzz1', name: 'banana' },
        zzz2: { id: 'zzz2', name: 'maça' },
        zzz3: { id: 'zzz3', name: 'morango' },
      },
    },
    xxx2: {
      docId: 'xxx2',
      name: 'Bebidas',
      items: {
        yyy1: { id: 'yyy1', name: 'água' },
        yyy2: { id: 'yyy2', name: 'cerveja' },
      },
    },
  },
};

const initialState = {
  rdCounts: {},

  rdCategs: {
    objCategInfo: {},
    objItemsByCateg: {},
  },
  rdCurrCateg: null,
  rdTempData: {},
};

const reducers = (state = initialState, action) => {
  console.log('RENDER => reducers');
  const { value } = action;

  const actions = {
    setCurrCateg() {
      return {
        ...state,
        rdCurrCateg: action.value,
      };
    },

    initData() {
      const categData = mockDb.categories;
      const setVals = ['name', 'docId'];

      const objCategInfo = utils.setObjItems({
        data: categData,
        keyName: 'docId',
        setVals,
      });
      // console.log(objCategInfo);
      const getObjItems = () => {
        const newObj = {};
        utils.toArr(categData).flatMap(item =>
          utils.toArr(item.items).map(sub => {
            newObj[item.docId] = {
              ...newObj[item.docId],
              [sub.id]: { ...sub },
            };
          }),
        );
        return newObj;
      };
      const objItemsByCateg = getObjItems();

      return {
        ...state,
        rdCurrCateg: mockDb.categories.xxx1.docId,
        rdCategs: { ...state.rdCategs, objCategInfo, objItemsByCateg },
      };
    },

    Decrement() {
      const currItem = state.rdCounts[value];
      const condValue = currItem ?? 0;
      const newCount = condValue - 1;
      const condMin = newCount >= 0 ? newCount : 0;
      return {
        ...state,
        rdCounts: {
          ...state.rdCounts,
          [value]: condMin,
        },
      };
    },

    Increment() {
      const currItem = state.rdCounts[value];
      const condValue = currItem ?? 0;
      const newCount = condValue + 1;
      return {
        ...state,
        rdCounts: {
          ...state.rdCounts,
          [value]: newCount,
        },
      };
    },
  };

  // --- selector
  const condCalls = actions[action.type] === undefined;
  return condCalls ? state : actions[action.type]();
};

const store = createStore(reducers);

function App() {
  console.log('RENDER => App');
  return (
    <Provider store={store}>
      <DataComp />
    </Provider>
  );
}

function DataComp() {
  console.log('RENDER => DataComp');

  return (
    <UseInitData action={'initData'} statePath="rdCategs.objCategInfo">
      <div>
        <h1>Supermercado</h1>
        <h2>
          <Cart />
        </h2>

        <div />
      </div>
      <CategBtnList>
        <CategBtn />
      </CategBtnList>
      <div style={{ marginTop: 15 }}>
        <ProdList>
          <ItemProd />
        </ProdList>

        <div>
          <CategCount />
        </div>
      </div>
    </UseInitData>
  );
}

function UseInitData({ children, statePath, action }) {
  console.log('RENDER => UseInitData');
  const dispatch = useDispatch();
  const initData = () => {
    dispatch({ type: action });
  };
  React.useEffect(initData, []);
  const data = useSelector(state => utils.setPath(state, statePath));
  const condReturn = utils.hasData(data);

  return condReturn && children;
}

function Cart() {
  console.log('RENDER => Cart');
  const cartSum = useSelector(state =>
    utils.toArr(state.rdCounts).reduce((p, c) => p + c, 0),
  );
  return <div>{`Carrinho ${cartSum}`}</div>;
}

const CategBtnList = ({ children }) => {
  console.log('RENDER => CategBtnList');
  const currList = useSelector(state => state.rdCategs.objCategInfo);

  const CompChildren = children.type;
  const mapChildren = utils
    .toArr(currList)
    .map((item, idx) => <CompChildren key={idx} itemId={item.docId} />);

  return mapChildren;
};

function CategBtn({ itemId }) {
  console.log('RENDER => CategBtn');
  const dispatch = useDispatch();
  const nameItem = useSelector(state => state.rdCategs.objCategInfo);
  // const nameItem = useSelector(state => state.rdCategs.objCategInfo[itemId].name);
  const btnSetCateg = () => dispatch({ type: 'setCurrCateg', value: itemId });

  return <button onClick={btnSetCateg}>Categ: {nameItem[itemId].name}</button>;
}

function ProdList({ children }) {
  console.log('RENDER => ProdList');
  const currList = useSelector(state => {
    const currCateg = state.rdCurrCateg;
    const condReturn = state.rdCategs.objItemsByCateg[currCateg];
    return condReturn;
  });

  const CompChildren = children.type;
  const mapChildren = utils
    .toArr(currList)
    .map((item, idx) => <CompChildren key={idx} itemId={item.id} />);

  return mapChildren;
}

function ItemProd({ itemId }) {
  console.log('RENDER => ItemProd');

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <ProdName itemId={itemId} />
        <div style={{ marginRight: 5 }}>:</div>
        <ProdCount itemId={itemId} />
      </div>
      <div>
        <Decrement itemId={itemId} />
        <Increment itemId={itemId} />
      </div>
      <br />
    </>
  );
}

function ProdName({ itemId }) {
  console.log('RENDER => ProdName');
  const nameItem = useSelector(state => {
    const currCateg = state.rdCurrCateg;
    const condReturn = state.rdCategs.objItemsByCateg[currCateg][itemId].name;
    return condReturn;
  });

  return <div>{nameItem}</div>;
}

function CategCount() {
  console.log('RENDER => CategCount');
  const rdCounts = useSelector(state => {
    const counts = state.rdCounts;
    const currCateg = state.rdCurrCateg;
    const categItems = state.rdCategs.objItemsByCateg[currCateg];
    const arrNumbs = Object.keys(categItems)
      .map(item => counts[item])
      .filter(item => item);
    const arrSum = arrNumbs.reduce((p, c) => p + c, 0);
    return arrSum;
  });
  return <div>Total da CATEGORIA: {rdCounts}</div>;
}

function ProdCount({ itemId }) {
  console.log('RENDER => ProdCount');
  const countItem = useSelector(state => state.rdCounts[itemId]);
  const condCountItem = countItem ?? 0;
  return <div>{condCountItem}</div>;
}

function Decrement({ itemId }) {
  console.log('RENDER => Decrement');
  const dispatch = useDispatch();
  const clickBtn = () => dispatch({ type: 'Decrement', value: itemId });

  return <button onClick={clickBtn}>Decrement-</button>;
}

function Increment({ itemId }) {
  console.log('RENDER => Increment');
  const dispatch = useDispatch();
  const clickBtn = () => dispatch({ type: 'Increment', value: itemId });

  return <button onClick={clickBtn}>Increment+</button>;
}

// #endregion
// ------

// ------ ANALISAR
// #region

// const UseListItems = ({ statePath, itemId, children }) => {
//   console.log('RENDER => UseListItems');
//   const currList = useSelector(state => utils.setPath(state, statePath));

//   const toMap =
//     currList && Array.isArray(currList) ? currList : utils.toArr(currList);
//   const mapChildren =
//     currList &&
//     toMap.map((item, idx) => {
//       const condItemId = itemId ? item[itemId] : idx;
//       const CompChildren = children.type;
//       return <CompChildren key={idx} itemId={condItemId} />;
//     });

//   return mapChildren;
// };
// #endregion
