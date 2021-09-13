import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {View, Image, Text, Colors, TouchableOpacity} from 'react-native-ui-lib';
import {RootStackParamList} from '../../nav/RootStack';

const width = Dimensions.get('window').width;

const CreateAccount = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View backgroundColor="#FFF" flex-1>
      <View marginL-15 marginV-8>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image assetGroup="icons" assetName={'back'} width-28 height-28 />
        </TouchableOpacity>
      </View>
      <View marginB-18>
        <Image
          assetGroup="createAccount"
          assetName={'createAccount'}
          marginL-36
          marginR-38
          style={{
            width: width - 74,
            height: width - 74,
          }}
        />
      </View>
      <Text h26 color={Colors.primary} center marginB-6>
        Change starts here
      </Text>
      <Text m16 color={Colors.dark70} center marginB-49>
        Save your progress to access your personal{`\n`}trainning program!
      </Text>
      <TouchableOpacity
        backgroundColor={Colors.primary}
        style={{borderRadius: 23, elevation: 3, height: 46}}
        row
        center
        marginH-41
        marginB-24
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        <Image assetGroup="icons" assetName={'email'} marginR-11 />
        <Text color={Colors.white}>EMAIL</Text>
      </TouchableOpacity>
      <TouchableOpacity
        backgroundColor={Colors.primary}
        style={{
          borderRadius: 23,
          elevation: 3,
          backgroundColor: Colors.violet20,
          height: 46,
        }}
        row
        center
        marginH-41
        marginB-24>
        <Image assetGroup="icons" assetName={'facebook'} marginR-11 />
        <Text color={Colors.white}>FACEBOOK</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderRadius: 23,
          elevation: 3,
          backgroundColor: '#fff',
          height: 46,
        }}
        row
        center
        marginH-41
        marginB-24>
        <Image assetGroup="icons" assetName={'google'} marginR-11 />
        <Text color={Colors.dark10}>GOOGLE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  btnFacebook: {},
  btnEmail: {},
});
