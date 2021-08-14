import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Assets from '../config/Assets';
import {MainTabNavigationProp} from '../screens/Home';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginLeft: 31,
    marginRight: 39,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  txtHeader: {
    color: '#09051C',
    fontSize: 31,
    lineHeight: 41,
  },
  btnNoti: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 11,
    elevation: 3,
  },
});

type Props = {
  navigation: MainTabNavigationProp;
};

const Header = ({navigation}: Props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.txtHeader}>Find Your{'\n'}Favorite Food</Text>
      <TouchableOpacity
        style={styles.btnNoti}
        onPress={() => {
          // alert('onPress ic noti');
          if (navigation) {
            navigation.goBack();
          }
        }}>
        <Image source={Assets.ic_notification} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
