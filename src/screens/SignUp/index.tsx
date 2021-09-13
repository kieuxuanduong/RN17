import {useNavigation, NavigationProp} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  View,
  Image,
  Text,
  Colors,
  TouchableOpacity,
  TextField,
  Assets,
} from 'react-native-ui-lib';
import {Button} from 'react-native-ui-lib';

import {RootStackParamList} from '../../nav/RootStack';

const SignUp = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View backgroundColor="#FFF" flex-1>
      <View marginL-15 marginV-8>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image assetGroup="icons" assetName={'close'} width-28 height-28 />
        </TouchableOpacity>
      </View>

      <Text h26 color={Colors.primary} left marginB-16 marginH-24>
        Connect email address
      </Text>
      <Text m16 color={Colors.dark70} left marginB-67 marginH-24>
        It’s recommended to connect your email{`\n`}address for us to better
        protect your{`\n`}information.
      </Text>
      <View marginH-24>
        <Text m17 color={Colors.dark80}>
          Your Email
        </Text>
        <TextField placeholder="email123@gmail.com" onChangeText={() => {}} />
        <Text m17 color={Colors.dark80}>
          Set Password
        </Text>
        <TextField
          value="123456"
          rightIconSource={Assets.icons.dontshow}
          secureTextEntry
          onChangeText={() => {}}
        />
      </View>
      <Button
        label="CONFIRM"
        marginH-41
        onPress={() => {
          navigation.navigate('MainTab');
        }}
      />
      <View flex bottom right>
        <Text
          h16
          marginR-24
          marginB-46
          onPress={() => {
            navigation.goBack();
          }}>
          SKIP
        </Text>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  btnFacebook: {},
  btnEmail: {},
});
