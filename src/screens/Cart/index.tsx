import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import ItemCart from './components/ItemCart';

export interface IProduct {
  name: string;
  des: string;
  quantity: number;
  id: string;
  price: string;
}

// const dataCart: IProduct[] = [
//   {
//     id: '0',
//     name: 'Spacy fresh crab',
//     des: 'Waroenk kita',
//     quantity: 1,
//     price: '$ 35',
//   },
//   {
//     id: '1',
//     name: 'Spacy fresh crab 2',
//     des: 'Waroenk kita',
//     quantity: 1,
//     price: '$ 35',
//   },
// ];

const initDataCart: IProduct[] = [
  {
    id: '0',
    name: 'Spacy fresh crab',
    des: 'Waroenk kita',
    quantity: 1,
    price: '$ 35',
  },
  {
    id: '1',
    name: 'Spacy fresh crab 2',
    des: 'Waroenk kita',
    quantity: 1,
    price: '$ 35',
  },
  {
    id: '1',
    name: 'Spacy fresh crab 2',
    des: 'Waroenk kita',
    quantity: 1,
    price: '$ 35',
  },
  {
    id: '1',
    name: 'Spacy fresh crab 2',
    des: 'Waroenk kita',
    quantity: 1,
    price: '$ 35',
  },
  {
    id: '1',
    name: 'Spacy fresh crab 2',
    des: 'Waroenk kita',
    quantity: 1,
    price: '$ 35',
  },
  {
    id: '1',
    name: 'Spacy fresh crab 2',
    des: 'Waroenk kita',
    quantity: 1,
    price: '$ 35',
  },
];

const Cart = () => {
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const [dataCart, setDataCart] = React.useState<IProduct[]>(initDataCart);
  const [isLoadmore, setIsLoadmore] = React.useState<boolean>(false);

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <Text style={styles.title}>Order details</Text>
        <FlatList
          data={dataCart}
          renderItem={({item}) => {
            return <ItemCart item={item} />;
          }}
          keyExtractor={(item, index) => index.toString()}
          // refreshing={true}
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            // do call api 2s
            setTimeout(() => {
              //update data
              setDataCart(initDataCart);
              setRefreshing(false);
            }, 500);
          }}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            setIsLoadmore(true);
            setTimeout(() => {
              setDataCart(prev => prev.concat(initDataCart));
              setIsLoadmore(false);
            }, 5000);
          }}
          ListFooterComponent={() => {
            return (
              <View
                style={{width: '100%', height: 40, justifyContent: 'center'}}>
                {!!isLoadmore && <ActivityIndicator color="#15BE77" />}
              </View>
            );
          }}
        />
        <View style={{height: 100}}></View>
        {/* <ItemCart /> */}
      </SafeAreaView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: '#09051C',
    fontWeight: '700',
    marginLeft: 10,
    marginTop: 16,
  },
});
