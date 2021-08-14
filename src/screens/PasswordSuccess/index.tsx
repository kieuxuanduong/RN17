import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import GradientText from '../../components/gradient-text';
import Assets from '../../config/Assets';
import {OnBoardNavigationProp} from '../Onboarding01';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bg_pattern: {
    flex: 1,
  },
  containerContent: {
    flex: 1,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 134,
    height: 134,
  },
  brand: {
    fontSize: 30,
    lineHeight: 39,
    fontWeight: '700',
    fontFamily: 'Viga',
    textAlign: 'center',
    marginTop: 33,
    marginBottom: 12,
  },
  motto: {
    fontSize: 23,
    lineHeight: 30,
    color: '#09051C',
    fontWeight: '700',
    textAlign: 'center',
  },
  linearButton: {
    borderRadius: 15,
    height: 57,
    // width: 157,
    marginBottom: 60,
    alignSelf: 'center',
  },
  btnLogin: {
    flex: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 60,
    paddingVertical: 18,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

type Props = {
  navigation: OnBoardNavigationProp;
};

const PasswordSuccess = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={Assets.bg_pattern}
          resizeMode="cover"
          style={styles.bg_pattern}>
          <View style={styles.containerContent}>
            <Image
              resizeMode={'contain'}
              source={Assets.logo_success}
              style={styles.logo}
            />
            <GradientText style={styles.brand}>Congrats!</GradientText>
            <Text style={styles.motto}>Password reset successful</Text>
          </View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['rgba(83, 232, 139, 1)', 'rgba(21, 190, 119, 1)']}
            style={styles.linearButton}>
            <TouchableOpacity
              style={styles.btnLogin}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
          </LinearGradient>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
};

export default PasswordSuccess;
