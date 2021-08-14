import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Filter from './src/screens/Filter';
import Onboarding01 from './src/screens/Onboarding01';
import Onboarding02 from './src/screens/Onboarding02';
import Onboarding03 from './src/screens/Onboarding03';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import SignupProcess from './src/screens/SignupProcess';
import PaymentMethod from './src/screens/PaymentMethod';
import UploadPhoto from './src/screens/UploadPhoto';
import UploadPreview from './src/screens/UploadPreview';
import SetLocation from './src/screens/SetLocation';
import SignupSuccess from './src/screens/SignupSuccess';
import VerificationCode from './src/screens/VerificationCode';
import ViaMethod from './src/screens/ViaMethod';
import Password from './src/screens/Password';
import PasswordSuccess from './src/screens/PasswordSuccess';

import MainTab from './src/nav/MainTab';

export type TRootStackParamList = {
  MainTab: undefined;
  Filter: {
    name: string;
    age: number;
  };
  Onboarding01: undefined;
  Onboarding02: undefined;
  Onboarding03: undefined;
  Login: undefined;
  Register: undefined;
  SignupProcess: undefined;
  PaymentMethod: undefined;
  UploadPhoto: undefined;
  UploadPreview: undefined;
  SetLocation: undefined;
  SignupSuccess: undefined;
  ViaMethod: undefined;
  VerificationCode: undefined;
  Password: undefined;
  PasswordSuccess: undefined;
};

const Stack = createStackNavigator<TRootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'MainTab'}>
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding01"
          component={Onboarding01}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding02"
          component={Onboarding02}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding03"
          component={Onboarding03}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupProcess"
          component={SignupProcess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PaymentMethod"
          component={PaymentMethod}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UploadPhoto"
          component={UploadPhoto}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UploadPreview"
          component={UploadPreview}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SetLocation"
          component={SetLocation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupSuccess"
          component={SignupSuccess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ViaMethod"
          component={ViaMethod}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerificationCode"
          component={VerificationCode}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Password"
          component={Password}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PasswordSuccess"
          component={PasswordSuccess}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            title: 'trang chu',
            headerTitle: () => (
              <View style={{flexDirection: 'row'}}>
                <Text>Trang Chu</Text>
                <Image source={require('./ic_filter.png')} />
              </View>
            ),
          }}
        /> */}
        <Stack.Screen
          name="Filter"
          component={Filter}
          options={{
            // headerShown: false,
            headerTitle: 'Back',
            title: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
