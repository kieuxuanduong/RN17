import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Text, Colors} from 'react-native-ui-lib';

import {useDispatch} from 'react-redux';
import URL from '../../../../config/Api';
import {RootStackParamList} from '../../../../nav/RootStack';
import {IAuth, onLogin, saveAuthAsync} from '../../../../reduxs/authSlice';

interface Props {
  infoLogin: {
    email: string;
    password: string;
  };
}

const BtnLogin = ({infoLogin}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState<boolean>(false);

  const onPressLogin = React.useCallback(() => {
    setLoading(true);

    fetch(URL.Login, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: infoLogin.email,
        password: infoLogin.password,
      }),
    })
      .then(response => response.json())
      .then((json: IAuth) => {
        const success = json.success;
        //login fail
        if (!success) {
          Alert.alert('Thong bao', json.message);
          setLoading(false);
          return;
        }
        //login success
        dispatch(onLogin(json));
        setLoading(false);
        saveAuthAsync(json);
        navigation.navigate('MainTab');
        return json;
      })
      .catch(error => {
        console.error(error);
      });
  }, [infoLogin]);

  return (
    <TouchableOpacity
      style={styles.btnLogin}
      onPress={onPressLogin}
      disabled={!!loading}>
      {!!loading ? (
        <ActivityIndicator color={Colors.white} />
      ) : (
        <Text h16 white>
          LOGIN
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default BtnLogin;

const styles = StyleSheet.create({
  btnLogin: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 99,
    marginHorizontal: 24,
  },
});
