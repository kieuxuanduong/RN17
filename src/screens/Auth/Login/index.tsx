import React from 'react';
import {View, Text, Colors, TextField, Assets} from 'react-native-ui-lib';

import BtnLogin from './components/BtnLogin';

const Login = () => {
  const [infoLogin, setInfoLogin] = React.useState({
    email: '',
    password: '',
  });
  return (
    <View backgroundColor="#FFF" flex-1>
      {/* <View marginL-15 marginV-8>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image assetGroup="icons" assetName={'close'} width-28 height-28 />
        </TouchableOpacity>
      </View> */}

      <Text h26 primary marginB-16 marginH-24>
        Connect email address
      </Text>
      <Text m16 color={Colors.dark70} left marginB-67 marginH-24>
        It’s recommended to connect your email{'\n'}address for us to better
        protect your{'\n'}information.
      </Text>
      <View marginH-24>
        <Text m17 color={Colors.dark80}>
          Your Email
        </Text>
        <TextField
          placeholder="Enter Email"
          onChangeText={(email: string) => {
            setInfoLogin(prev => {
              return {...prev, email};
            });
          }}
        />
        <Text m17 color={Colors.dark80}>
          Set Password
        </Text>
        <TextField
          placeholder="Enter Password"
          rightIconSource={Assets.icons.dontshow}
          secureTextEntry
          onChangeText={(password: string) => {
            setInfoLogin(prev => {
              return {...prev, password};
            });
          }}
        />
      </View>
      <BtnLogin infoLogin={infoLogin} />
      {/* <View flex bottom right>
        <Text
          h16
          marginR-24
          marginB-46
          onPress={() => {
            navigation.goBack();
          }}>
          SKIP
        </Text>
      </View> */}
    </View>
  );
};

export default Login;
