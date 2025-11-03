import { View, Text, Image, ImageSourcePropType, StyleSheet } from 'react-native';
import React from 'react';

import { product_info } from '@/src/data/singleItem';
import { RouteProp, useRoute } from '@react-navigation/native';

type RootStackParamList={
    Productdetail:{id:string}
}
const Productdetail = () => {
    const route = useRoute<RouteProp<RootStackParamList,'Productdetail'>>();
  const { id } = route.params;
    console.log('id is',id);
  const product = product_info.find((c) => c.label === id);
    console.log("product",product);
    
  if (!product) {
    return <Text style={{ textAlign: 'center', marginTop: 50 }}>Product not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Image source={product.img} style={styles.image} />
      <Text style={styles.label}>{product.label}</Text>
      <Text style={styles.cost}>Price: {product.cost}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  image: { width: 200, height: 200 },
  label: { fontSize: 24, fontWeight: 'bold', marginTop: 20 },
  cost: { fontSize: 18, marginTop: 10 },
});

export default Productdetail;