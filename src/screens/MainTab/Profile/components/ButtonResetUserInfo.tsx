import React from 'react';
import {Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../../reduxs/store';
import {onResetUserInfo} from '../../../../reduxs/userSlice';

const ButtonResetUserInfo = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Button
      title="RESET"
      onPress={() => {
        dispatch(onResetUserInfo());
      }}
    />
  );
};

export default ButtonResetUserInfo;
