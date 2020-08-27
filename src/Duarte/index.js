// import packages
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { firestore } from '../config/firebase/fbConfig';

export default () => {
  const fxFirestore = () => {
    firestore
      .collection('users')
      .get()
      .then(res => {
        const arrList = [];
        res.forEach(doc => arrList.push(doc.data()));

        console.warn('arrList', arrList);
      })
      .catch(err => console.warn('usersCollection', err.message));
  };
  React.useEffect(fxFirestore, []);

  return (
    <View>
      <Text>Android Funcionando com Firestore</Text>
    </View>
  );
};
