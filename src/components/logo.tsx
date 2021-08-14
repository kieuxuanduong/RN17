import React from 'react';

import {View, StyleSheet, Image, Text} from 'react-native';
import GradientText from './gradient-text';
import Assets from '../config/Assets';

const styles = StyleSheet.create({
  logo: {
    width: 175,
    height: 139,
  },
  brand: {
    fontSize: 40,
    lineHeight: 54,
    fontWeight: '700',
    fontFamily: 'Viga',
    textAlign: 'center',
  },
  motto: {
    fontFamily: 'Inter',
    fontSize: 13,
    lineHeight: 16,
    color: '#09051C',
    fontWeight: '700',
    textAlign: 'center',
  },
});

const Logo = () => {
  return (
    <View>
      <Image source={Assets.img_logo} style={styles.logo} />
      <GradientText style={styles.brand}>FoodNinja</GradientText>
      <Text style={styles.motto}>Deliver Favorite Food</Text>
    </View>
  );
};

export default Logo;
