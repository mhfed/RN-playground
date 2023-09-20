import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {RootParamList} from '../../App';
import {IProduct} from '../models/IProducts';

type ListScreenProps = StackScreenProps<RootParamList, 'ListScreen'>;

type ItemProps = {
  item: IProduct;
  navigation: Pick<ListScreenProps, 'navigation'>['navigation'];
};

const Item = ({item, navigation}: ItemProps) => {
  const handlePressItem = () => navigation.push('DetailScreen', {item: item});
  return (
    <TouchableOpacity onPress={handlePressItem} style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={{uri: item.image}} style={{width: '100%', height: 200}} />
      <Text style={styles.price}>${item.price}</Text>
      <Text style={styles.title}>{item.rating.rate}</Text>
    </TouchableOpacity>
  );
};

const ListScreen = ({navigation, route}: ListScreenProps) => {
  console.log(route);
  console.log(navigation);
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}: {item: IProduct}) => {
          return <Item item={item} navigation={navigation} />;
        }}
        keyExtractor={(item: any) => item.id}
      />
    </SafeAreaView>
  );
};
export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'transparent',
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
  },
  title: {
    fontSize: 32,
  },
  price: {
    fontSize: 40,
    color: 'red',
  },
});
