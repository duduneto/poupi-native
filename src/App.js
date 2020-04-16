// *******************
// #region IMPORTs
// -------------------

import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";

// Internals
import logo from "./images/logo.png";
import IcoMoon from "./config/icomoon/packs";

// -------------------
// #endregion
// *******************

// *******************
// #region STYLEs
// -------------------

const stl = {};
stl.nav = {
  backgroundColor: "black",
  alignItems: "center",
};

stl.mainSc = {
  backgroundColor: "black",
};

stl.img = {
  width: 50,
  height: 50,
};

stl.boxNotice = {
  borderWidth: 1,
  borderColor: "#262626",
  backgroundColor: "#161616",
  marginHorizontal: 25,
  marginTop: 10,
  padding: 20,
};

stl.title = {
  fontSize: 16,
  //   fontWeight: 400,
  color: "#a5a5a5",
};

stl.subTitle = {
  fontSize: 12,
  //   fontWeight: 100,
  color: "#a5a5a5",
};

stl.mainList = {
  marginTop: 20,
};

stl.row = {
  flexDirection: "row",
  alignItems: "center",
};

stl.itemOpen = {
  paddingVertical: 14,
  paddingHorizontal: 25,
  backgroundColor: "#222",
};

stl.itemClose = {
  paddingVertical: 14,
  paddingHorizontal: 25,
};

stl.systemItem = {
  fontSize: 14,
  color: "#a5a5a5",
  //   fontWeight: 400,
  flex: 1,
};

stl.itemCheck = {
  alignItems: "center",
  justifyContent: "center",
  ...stl.systemItem,
  marginRight: 15,
  flex: 1,
};

stl.systemTitle = {
  flex: 12,
};
stl.systemTitleTx = {
  fontSize: 14,
  color: "#a5a5a5",
  //   fontWeight: 400,
};

stl.itemPrice = {
  flex: 1,
  textAlign: "right",
};

stl.padLeft = {
  paddingLeft: 25,
};

stl.itemDesc = {
  fontSize: 12,
  //   fontWeight: 400,
  color: "#999",
};

stl.totalBar = {
  backgroundColor: "#222",
  paddingHorizontal: 20,
  alignItems: "center",
  flexDirection: "row",
  position: "absolute",
  width: "100%",
  height: 55,
  bottom: 0,
};

stl.totalTxt = {
  color: "#18FFC9",
  fontSize: 18,
  //   fontWeight: 400,
};
stl.totalTxtSm = {
  color: "#666",
  fontSize: 9,
};

stl.viewOpen = {
  backgroundColor: "#181818",
};

stl.descItemOpen = [
  stl.itemDesc,
  {
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "#222",
  },
];

// stl.name= {
// }

// -------------------
// #endregion
// *******************

// *******************
// #region DATA
// -------------------

const arrItemsBase = [
  // { id: "1", label: "Base 1", price: 150 },
  {
    id: "a1",
    label: "Base 1",
    price: 150,
    description: "Inclui: Base...",
    preSelected: true,
  },
  {
    id: "a2",
    label: "Outro 2",
    description: "Inclui: Outro 2...",
    price: 250,
  },
  {
    id: "a3",
    label: "Outro 3",
    description: "Inclui: Outro 3...",
    price: 350,
  },
];
const arrItemsWeb = [
  // { id: "w1", label: "Outro W1", price: 250 },
  { id: "w1", label: "Outro W1", price: 250 },
  { id: "w2", label: "Outro W2", price: 250, preSelected: true },
];
const arrItemsAndroid = [
  { id: "x1", label: "Outro X1", price: 250 },
  { id: "x2", label: "Outro X2", price: 100 },
];
const arrItemsiOs = [
  { id: "y1", label: "Outro Y1", price: 250 },
  { id: "y2", label: "Outro Y2", price: 250 },
];

const arrMainItems = [
  {
    id: "1",
    label: "Sistema WEB",
    countType: "web",
    price: 1500,
    arrItems: [...arrItemsBase, ...arrItemsWeb],
    mainDesc:
      "Inclui: React + React-Native-Web + Roteamento por url + Google Firebase (hospedagem + Banco de Dados + Autenticação)",
  },
  {
    id: "2",
    label: "Sistema ANDROID",
    countType: "android",
    price: 2500,
    arrItems: [...arrItemsBase, ...arrItemsAndroid],
    mainDesc:
      "Inclui: React + React-Native + Google Firebase (Banco de Dados + Autenticação)",
  },
  {
    id: "3",
    label: "Sistema iOS",
    countType: "ios",
    price: 3500,
    arrItems: [...arrItemsBase, ...arrItemsiOs],
    mainDesc:
      "Inclui: React + React-Native + Google Firebase (Banco de Dados + Autenticação)",
  },
];

// -------------------
// #endregion
// *******************

// *******************
// #region REDUX
// -------------------

const initialState = {
  rdCount: {
    total: 0,
    web: 0,
    android: 0,
    ios: 0,
  },
};
initialState.rdHistory = { "1": { ...initialState } };

function allReducers(state, action) {
  const { value, countType } = action;
  const typeSelected = state.rdCount[countType];
  const sumValue = typeSelected + value;
  const revoveValue = typeSelected - value;

  const totalSelected = state.rdCount.total;
  const sumTotal = totalSelected + value;
  const removeTotal = totalSelected - value;

  const reducers = {
    clear() {
      return initialState;
    },

    addSum() {
      return {
        ...state,
        rdCount: { ...state.rdCount, [countType]: sumValue, total: sumTotal },
      };
    },

    removeSum() {
      return {
        ...state,
        rdCount: {
          ...state.rdCount,
          [countType]: revoveValue,
          total: removeTotal,
        },
      };
    },

    zeroSum() {
      return {
        ...state,
        rdCount: { ...state.rdCount, [countType]: 0 },
      };
    },
    addHistory() {
      const rdHistory = state.rdHistory;
      const newIdx = Object.keys(rdHistory).length + 1;
      const newState = { ...state };
      delete newState.rdHistory;

      return {
        ...newState,
        rdHistory: { ...rdHistory, [newIdx]: { ...state } },
      };
    },
  };

  const condCalls = reducers[action.type] === undefined;

  return condCalls ? state : reducers[action.type]();
}

const reducer = (state = initialState, action) => allReducers(state, action);

const logger = store => next => action => {
  next(action);
  console.log("ACTION =>", action.type, {
    ACTION: action,
    STATE: store.getState(),
  });
};

const store = createStore(reducer, applyMiddleware(logger));

// -------------------
// #endregion
// *******************

// *******************
// #region UTILs
// -------------------

// const brl = info => {
//   const formatter = new Intl.NumberFormat("pt-BR", {
//     style: "currency",
//     currency: "BRL",
//   });

//   return formatter.format(info);
// };

// -------------------
// #endregion
// *******************

// *******************
// #region COMPONENTs
// -------------------

export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

function App() {
  const listMainItems = arrMainItems.map(item => (
    <HandleItems key={item.id} {...item} />
  ));
  return (
    <View style={{ flex: 1 }}>
      <View style={stl.nav}>
        <Image source={logo} style={stl.img} />
      </View>
      <ScrollView style={stl.mainSc}>
        <View style={stl.boxNotice}>
          <Text style={stl.title}>Morfos Experience</Text>
          <Text style={stl.subTitle}>
            Comece a adicionar pacotes pra configurar seu Orçamento
          </Text>
        </View>

        <View style={stl.mainList}>{listMainItems}</View>
      </ScrollView>
      <View style={stl.totalBar}>
        <View>
          <IcoMoon name="bag" size={20} color={"#18FFC9"} />
        </View>

        <View style={{ flex: 8, alignItems: "center" }}>
          <ShowTotal />
        </View>

        <View>
          <IcoMoon name="right" size={20} color={"#18FFC9"} />
        </View>
      </View>
    </View>
  );
}

function HandleItems(item1) {
  const listItems = stls =>
    item1.arrItems.map(item2 => (
      <Line
        padLeft={stls}
        key={item2.id}
        countType={item1.countType}
        {...item2}
      />
    ));

  return <Line {...item1} listItems={listItems} main />;
}

const Line = item => {
  const {
    label,
    price,
    listItems,
    main,
    mainDesc,
    description,
    preSelected,
    countType,
    padLeft,
  } = item;
  // console.log("RENDER", label);

  const [sttSelected, setSelected] = React.useState(false);

  const dispatch = useDispatch();
  const addHistory = () => dispatch({ type: "addHistory" });
  const addSum = () => {
    addHistory();
    dispatch({ type: "addSum", countType, value: price });
  };
  const removeSum = () => {
    addHistory();
    dispatch({ type: "removeSum", countType, value: price });
  };
  const zeroSum = () => {
    addHistory();
    dispatch({ type: "zeroSum", countType });
  };
  let initItem = 0;

  React.useEffect(() => {
    initItem();
  }, [initItem]);
  initItem = () => !main && preSelected && btnSelect();

  const btnSelect = () => {
    const condSum = () => (!sttSelected ? addSum() : removeSum());
    !main && condSum();
    setSelected(!sttSelected);
    main && sttSelected && zeroSum();
  };
  return (
    <View>
      <TouchableOpacity onPress={btnSelect}>
        <View style={sttSelected ? stl.itemOpen : stl.itemClose}>
          <View style={[stl.row, padLeft]}>
            <View style={stl.itemCheck}>
              {sttSelected ? (
                <IcoMoon name="radio-act" size={20} color={"#9BEADD"} />
              ) : (
                <IcoMoon name="radio" size={20} color={"#999"} />
              )}
            </View>
            <View style={stl.systemTitle}>
              <Text style={stl.systemTitleTx}>{label}</Text>
              {main && !sttSelected && (
                <Text style={stl.itemDesc}> A partir de {price}</Text>
              )}
            </View>
            {!main && <Text style={stl.systemItem}>{price}</Text>}
            {main && <ShowCountType label={label} countType={countType} />}
          </View>

          {!main && (
            <Text style={[stl.itemDesc, { paddingLeft: 55 }]}>
              {description}
            </Text>
          )}
        </View>
      </TouchableOpacity>
      {sttSelected && listItems && (
        <View style={stl.viewOpen}>
          <Text style={stl.descItemOpen}>{mainDesc}</Text>
          {listItems(stl.padLeft)}
        </View>
      )}
    </View>
  );
};

const ShowCountType = ({ label, countType }) => {
  // console.log("RENDER - Show Sum =>", label);

  const valueType = useSelector(state => state.rdCount[countType]);

  return <Text style={[stl.systemItem, stl.itemPrice]}>{valueType}</Text>;
};

const ShowTotal = () => {
  const valueTotal = useSelector(state => state.rdCount.total);

  return (
    <>
      <Text style={stl.totalTxtSm}>Total dos Pacotes</Text>
      <Text style={stl.totalTxt}>{valueTotal}</Text>
    </>
  );
};

// -------------------
// #endregion
// *******************
