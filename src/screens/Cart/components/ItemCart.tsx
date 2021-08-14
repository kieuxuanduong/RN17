import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IProduct} from '..';
import Assets from '../../../config/Assets';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    margin: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  content: {
    marginHorizontal: 16,
    flex: 1,
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtName: {
    fontSize: 16,
    color: '#09051C',
    fontWeight: '700',
    marginBottom: 4,
  },
  txtDes: {
    fontSize: 14,
    color: 'rgba(59, 59, 59, .3)',
  },
  txtPrice: {
    color: '#15BE77',
    fontSize: 19,
  },
  btnMinus: {
    width: 26,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'rgba(83,232,139,.1)',
  },
  btnPlus: {
    width: 26,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#15BE77',
  },
  txtQuantity: {
    fontSize: 16,
    width: 40,
    textAlign: 'center',
  },
});

interface Props {
  item: IProduct;
}

const ItemCart = ({item}: Props) => {
  const [quantity, setQuantity] = React.useState(1);
  return (
    <View style={styles.container}>
      <Image
        source={Assets.img_vegan}
        style={{width: 62, height: 62}}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <Text style={styles.txtName} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.txtDes}>{item.des}</Text>
        <Text style={styles.txtPrice}>{item.price}</Text>
      </View>
      <View style={styles.quantity}>
        <TouchableOpacity
          style={styles.btnMinus}
          //   onPress={() => setQuantity(quantity - 1)}>
          onPress={() => setQuantity(prevQuantity => prevQuantity - 1)}>
          <Image source={Assets.ic_minus} />
        </TouchableOpacity>
        <Text style={styles.txtQuantity}>{quantity}</Text>
        <TouchableOpacity
          style={styles.btnPlus}
          onPress={() => setQuantity(quantity + 1)}>
          <Image source={Assets.ic_plus} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemCart;
