import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import GradientText from '../../components/gradient-text';
import Assets from '../../config/Assets';
import Logo from '../../components/logo';
import {MainTabNavigationProp} from '../Home';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFF',
  },
  containerContent: {
    flex: 1,
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  bg_pattern: {
    flex: 1,
  },
  txtTitle: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 26,
    color: '#09051C',
    marginTop: 60,
  },
  containerInput: {
    justifyContent: 'space-between',
    marginTop: 40,
  },
  inputBox: {
    backgroundColor: '#fff',
    elevation: 1,
    borderRadius: 15,
    borderColor: 'rgba(90, 108, 234, 0.07)',
    width: screenWidth - 50,
    height: 57,
    justifyContent: 'center',
    paddingLeft: 28,
    marginBottom: 12,
  },
  txtOr: {
    color: '#09051C',
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '700',
    marginTop: 8,
  },
  socialButtonBar: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    width: screenWidth - 50,
  },
  btnSocial: {
    flexDirection: 'row',
    elevation: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 16,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: (screenWidth - 71) / 2,
  },
  txtSocial: {
    marginLeft: 13,
    color: '#09051C',
    fontSize: 14,
    // lineHeight: 14,
    fontWeight: '700',
  },
  forgotPw: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    marginBottom: 36,
    marginTop: 20,
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  linearButton: {
    borderRadius: 15,
    height: 57,
    width: 157,
    // marginBottom: 20,
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
  navigation: MainTabNavigationProp;
};

const Login = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      {/* <SafeAreaView style={styles.container}> */}
      <ImageBackground
        source={Assets.bg_pattern_login}
        resizeMode="cover"
        style={styles.bg_pattern}>
        <ScrollView>
          <View style={styles.containerContent}>
            <View style={{marginTop: 47}}>
              <Logo />
            </View>
            <Text style={styles.txtTitle}>Login To Your Account</Text>
            <View style={styles.containerInput}>
              <View style={styles.inputBox}>
                <TextInput
                  // style={styles.txtSearch}
                  placeholder="Email"
                  placeholderTextColor="rgba(59, 59, 59, 0.3)"
                />
              </View>
              <View style={styles.inputBox}>
                <TextInput
                  // style={styles.txtSearch}
                  secureTextEntry={true}
                  placeholder="Password"
                  placeholderTextColor="rgba(59, 59, 59, 0.3)"
                />
              </View>
            </View>
            <Text style={styles.txtOr}>Or Continue With</Text>
            <View style={styles.socialButtonBar}>
              <TouchableOpacity style={styles.btnSocial}>
                <Image source={Assets.ic_facebook} />
                <Text style={styles.txtSocial}>Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnSocial}>
                <Image source={Assets.ic_google} />
                <Text style={styles.txtSocial}>Google</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ViaMethod');
              }}>
              <GradientText style={styles.forgotPw}>
                Forgot Your Password?
              </GradientText>
            </TouchableOpacity>
          </View>

          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['rgba(83, 232, 139, 1)', 'rgba(21, 190, 119, 1)']}
            style={styles.linearButton}>
            <TouchableOpacity
              style={styles.btnLogin}
              onPress={() => {
                navigation.navigate('MainTab');
              }}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </LinearGradient>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <GradientText style={styles.forgotPw}>Register</GradientText>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
      {/* </SafeAreaView> */}
    </View>
  );
};

export default Login;
