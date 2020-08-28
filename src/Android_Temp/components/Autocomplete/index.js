import * as React from 'react';

import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import {predictions} from './utils';
import {geocode} from './utils';

const Autocomplete = (props) => {
  const {style = {}, setGeocode} = props;

  const [listPredictions, setListPredictions] = React.useState([]);
  const [searchText, setSeachText] = React.useState('');
  const [search, setSeach] = React.useState('');
  const [selectedAddress, setSelectedAddress] = React.useState(false);
  const [loader, setLoader] = React.useState(false);

  let timer = null;

  React.useEffect(() => {
    const fetch = async (searchText) => {
      const resultPredictions = await predictions(searchText);
      setListPredictions(resultPredictions.predictions);
      setLoader(false);
    };
    if (!!searchText) {
      setLoader(true);
      fetch(searchText);
    }
    return () => {
      setListPredictions([]);
      setSeachText('');
    };
  }, [searchText]);

  React.useEffect(() => {
    const fetch = async () => {
      const resultGeocode = await geocode(selectedAddress.place_id);
      setGeocode(resultGeocode.results && resultGeocode.results[0]);
      setLoader(false);
    };
    if (!!selectedAddress) {
      fetch();
    }
  }, [selectedAddress]);

  const renderItem = ({item}, index) => {
    return <Item key={index} item={item} />;
  };

  const Item = ({item, key}) => {
    const handleOnPress = () => {
      Keyboard.dismiss();
      console.log(item);
      setSelectedAddress(item);
      setSeach(item.description);
      setListPredictions([]);
    };
    return (
      <TouchableOpacity
        key={key}
        style={{
          paddingHorizontal: 15,
          paddingVertical: 15,
          borderTopWidth: 1,
          borderTopColor: '#e9e9e9',
        }}
        onPress={handleOnPress}>
        <Text>{item.description}</Text>
      </TouchableOpacity>
    );
  };

  const handleOnChange = (searchText) => {
    setSeach(searchText);
    function doStuff() {
      setSeachText(searchText);
    }
    clearTimeout(timer);
    timer = setTimeout(doStuff, 600);
  };

  return (
    <View
      style={{
        ...style,
        maxHeight: 210,
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#a9a9a9',
        borderRadius: 7,
        position: 'absolute',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}>
        <TextInput
          style={{fontSize: 16, width: '90%'}}
          onChangeText={handleOnChange}
          value={search}
        />
        {loader && <ActivityIndicator size="small" color="#0000ff" />}
      </View>
      <FlatList renderItem={renderItem} data={listPredictions} />
    </View>
  );
};

export default Autocomplete;
