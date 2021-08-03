import {Assets} from '../../config/Assets';
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFF',
  },
 
});

const Cart = ({route, navigation}) => {
  
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Cart;
