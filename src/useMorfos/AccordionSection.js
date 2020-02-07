import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import PropTypes from "prop-types";

import useStl from "./useStl";
import UseIcomoon from "./UseIcoMoon";

//Styles
const stl01 = [useStl.flex1, { backgroundColor: "#eee" }];
const stl02 = [
  useStl.flex1,
  useStl.flexRow,
  useStl.flexBetween,
  { backgroundColor: "#ccc", padding: 10 }
];
const stl03 = [useStl.flex1];
const stl03b = [{ width: 20 }];
const stl04 = [useStl.pad20];

//End Styles

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label }
    } = this;

    return (
      <View style={stl01}>
        <View onClick={onClick} style={stl02}>
          {/* Web Avatar */}
          <Text style={stl03}>{label}</Text>
          <View style={stl03b}>
            {!isOpen && <UseIcomoon name="right" size={18} color={"#666"} />}
            {isOpen && <UseIcomoon name="down" size={18} color={"#666"} />}
          </View>
        </View>
        {isOpen && <View style={stl04}>{this.props.children}</View>}
      </View>
    );
  }
}

export default AccordionSection;
