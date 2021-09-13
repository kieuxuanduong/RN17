import {useNavigation, NavigationProp} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Button} from 'react-native';
import {IUserInfo} from '..';
import {RootStackParamList} from '../../nav/RootStack';

const ButtonSubmit = (userInfo: IUserInfo) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Button
      title="cap nhat thong tin"
      onPress={() => {
        navigation.navigate('UpdateProfile', {
          name: userInfo.name,
          age: userInfo.age,
        });
      }}
    />
  );
};

export default ButtonSubmit;

const styles = StyleSheet.create({});
