import * as React from 'react';

import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {Autocomplete} from '../../components';

const {width} = Dimensions.get('screen');

const StepOne = ({setGeocode}) => {

  const [geoc, setGeoc] = React.useState()

  return (
    <View style={{flex: 1}}>
      <View
        style={{height: 200,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 25}}>Bem Vindo</Text>
      </View>
      <View
        style={{
          flex: 0.6,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: width * 0.9,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Autocomplete
            setGeocode={setGeoc}
            set
              style={{
                width: width * 0.7,
              }}
            />
          </View>
          <TouchableOpacity
          disabled={!geoc}
          onPress={() => setGeocode(geoc)}
          >
            <View
              style={{
                height: 50,
                width: 50,
                backgroundColor: !!geoc ? '#8de' : '#d9d9d9',
                borderRadius: 30,
              }}></View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default StepOne;
