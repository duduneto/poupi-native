// ----------- import Packs
import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default props => {
  const { colorBase } = props;

  const [sttValue, setValue] = React.useState('');
  const [sttLabelUp, setLabelUp] = React.useState(false);
  const [sttFocus, setFocus] = React.useState(false);

  const condLabelUp = sttLabelUp || sttValue;
  const setLabelSize = num => (!condLabelUp ? num : num * 0.8);
  const myStlLabel = props.stlLabel || { fontSize: 20 };
  const labelFontSize = setLabelSize(myStlLabel.fontSize);

  const iptLabelUp = !condLabelUp && labelFontSize;
  const iptLabelDown = props.stlLabel ? props.stlLabel.fontSize : 15;
  const iptFontSize = iptLabelUp || iptLabelDown;

  const valueColor = sttValue ? 'gray' : 'lightgray';
  const focusColor = sttFocus ? colorBase : valueColor;

  const changeValue = txt => setValue(txt);

  const changeBlur = () => {
    setLabelUp(false);
    setFocus(false);
  };
  const changeFocus = () => {
    setLabelUp(true);
    setFocus(true);
  };

  // #region :: PROPs + STYLEs *********
  const {
    txtLabel = 'label',
    placeHolderLabel = 'Escreva seu texto',
    placeholderTextColor = 'gray',
    //
    //
    // prop="prop",

    stlContainer = {
      width: 150,
      margin: 15,
    },
    stlLabelView = {
      height: 22,
      justifyContent: 'flex-end',
    },

    stlLabel = {
      color: colorBase,
      fontSize: labelFontSize,
    },
    stlIpt = {
      paddingLeft: 10,
      height: 30,
      borderBottomWidth: 2,
      borderColor: focusColor,
      outline: 'none',

      backgroundColor: '#f5f5f5',
      color: 'black',
      fontSize: iptFontSize,
      fontStyle: sttLabelUp && !sttValue && 'italic',
    },
  } = props;
  // #endregion *********

  return (
    <View style={stlContainer}>
      <View style={stlLabelView}>
        <Text style={stlLabel}>{condLabelUp && txtLabel}</Text>
      </View>

      <TextInput
        style={{ ...stlIpt }}
        onChangeText={changeValue}
        onBlur={changeBlur}
        onFocus={changeFocus}
        // defaultValue={""}
        placeholderTextColor={
          !sttLabelUp ? stlLabel.color : placeholderTextColor
        }
        placeholder={sttLabelUp ? placeHolderLabel : txtLabel}
        // onfocus={""}
      />
    </View>
  );
};
