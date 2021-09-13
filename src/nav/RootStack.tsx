import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../screens/OnBoarding';
import Profile from '../screens/MainTab/Profile';
import UpdateProfile from '../screens/UpdateProfile';
import CreateAccount from '../screens/CreateAccount';
import SignUp from '../screens/SignUp';
import MainTab from './MainTab';
import Login from '../screens/Auth/Login';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../reduxs/store';
import {
  EStatusAuth,
  getAuthAsync,
  IAuth,
  onLogin,
  updateStatusAuth,
} from '../reduxs/authSlice';
import {View, Colors} from 'react-native-ui-lib';
import {ActivityIndicator, Alert} from 'react-native';
import URL from '../config/Api';
import DetailWorkout from '../screens/DetailWorkout';
import { IWorkout } from '../types/IWorkout';

export type RootStackParamList = {
  ProWelcomefile: undefined;
  OnBoarding: undefined;
  CreateAccount: undefined;
  SignUp: undefined;
  MainTab: undefined;
  Setting: undefined;
  CategoryDetail: undefined;
  CategoryDetailSub: undefined;
  TopicDetail: undefined;
  ProfileAndFriend: undefined;
  ProfileCouponsVouchers: undefined;
  MyTopic: undefined;
  Search: undefined;
  FAQ: undefined;
  Filter: undefined;
  Login: undefined;

  DetailWorkout: {
    item: IWorkout;
  };
};

const Stack = createNativeStackNavigator();
const RootStack = () => {
  const dispatch = useDispatch();
  const statusAuth = useSelector<RootState, EStatusAuth>(
    state => state.auth.statusAuth,
  );

  const checkLogin = React.useCallback(async () => {
    const auth: IAuth | null = await getAuthAsync();
    if (auth) {
      //call api validate auth
      fetch(URL.ValidateToken, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: auth.token,
        }),
      })
        .then(response => response.json())
        .then((json: {success: boolean; message: string}) => {
          const success = json.success;
          //token fail
          if (!success) {
            Alert.alert('Thong bao', json.message);
            dispatch(updateStatusAuth({statusAuth: EStatusAuth.unauth}));
            return;
          }
          //token success
          dispatch(onLogin(auth));
        });
    } else {
      dispatch(updateStatusAuth({statusAuth: EStatusAuth.unauth}));
    }
  }, []);

  React.useEffect(() => {
    checkLogin();
  });

  if (statusAuth === EStatusAuth.check) {
    return (
      <View flex center>
        <ActivityIndicator color={Colors.primary} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        {statusAuth === EStatusAuth.unauth ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CreateAccount"
              component={CreateAccount}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="MainTab"
              component={MainTab}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="DetailWorkout"
              component={DetailWorkout}
              // options={{headerShown: false}}
            />
          </>
        )}

        {/* <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
