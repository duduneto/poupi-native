import * as React from 'react';

import {View} from 'react-native';

import {StepOne, StepTwo} from './steps';

const Register = () => {

  const [geocode, setGeocode] = React.useState();

  return (
    <View style={{flex: 1}}>
      {!geocode ? 
      <StepOne setGeocode={setGeocode}/>
      : <StepTwo geocode={geocode} />
      }
    </View>
  );
};

export default Register;
