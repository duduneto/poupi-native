// import packages
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { firestore } from '../config/firebase/fbConfig';

import Register from './Register';

export default () => {
  const fxFirestore = () => {
    firestore
      .collection('users')
      .get()
      .then(res => {
        const arrList = [];
        res.forEach(doc => arrList.push(doc.data()));

        console.log('arrList', arrList);
      })
      .catch(err => console.warn('usersCollection', err.message));
  };
  React.useEffect(fxFirestore, []);

  return (
    <Register />
  );
};
