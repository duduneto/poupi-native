import * as React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import geohash from 'ngeohash';
import firebase from 'firebase';
import { firestore } from '../../../config/firebase/fbConfig';

const StepTwo = ({ geocode }) => {
  
  const [result, setResults] = React.useState([]);

  const getGeohashRange = (
    latitude,
    longitude,
    distance, // miles
  ) => {
    const lat = 0.0144927536231884; // degrees latitude per mile
    const lon = 0.0181818181818182; // degrees longitude per mile

    const lowerLat = latitude - lat * distance;
    const lowerLon = longitude - lon * distance;

    const upperLat = latitude + lat * distance;
    const upperLon = longitude + lon * distance;

    const lower = geohash.encode(lowerLat, lowerLon);
    const upper = geohash.encode(upperLat, upperLon);

    return {
      lower,
      upper,
    };
  };

  const fxFirestore = () => {
    const latitude = geocode.geometry.location.lat;
    const longitude = geocode.geometry.location.lng;

    const range = getGeohashRange(latitude, longitude, 2);

    firestore
      .collection('stores')
      .where('geohash', '>=', range.lower)
      .where('geohash', '<=', range.upper)
      .get()
      .then(results => {
        const arrDocs = [];
        results.forEach(doc => arrDocs.push(doc.data()));
        setResults(arrDocs);
      });
  };
  React.useEffect(fxFirestore, []);

  const Item = ({ title }) => (
    <View style={{paddingVertical: 15, marginHorizontal: 15, paddingHorizontal: 10,backgroundColor: '#fba'}}>
      <Text>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.store_name} />;

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 200,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 25 }}>Endereços mais próximos</Text>
      </View>
      <FlatList
        data={result}
        renderItem={renderItem}
        // keyExtractor={item => item.docId}
      />
    </View>
  );
};

export default StepTwo;
