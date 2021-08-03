import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ImageBackground,
  StyleSheet,
  Pressable,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import GradientText from '../../components/gradient-text';
import Logo from '../../components/logo';
import Assets from '../../config/Assets';

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
    // justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    marginBottom: 12,
    flexDirection: 'row',
  },
  imgIconInput: {
    width: 24,
    height: 24,
  },
  txtInput: {
    paddingLeft: 16,
  },
  txtCheck: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 12,
    lineHeight: 20,
  },
  linearButton: {
    borderRadius: 15,
    height: 57,
    // width: 157,
    // marginBottom: 20,
    alignSelf: 'center',
  },
  btnRegister: {
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
  txtToLogin: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    marginBottom: 36,
    marginTop: 20,
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
});

const Register = ({navigation}) => {
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
                <Image
                  style={styles.imgIconInput}
                  resizeMode={'contain'}
                  source={Assets.ic_profile}
                />
                <TextInput
                  style={styles.txtInput}
                  placeholder="Anamwp..|"
                  placeholderTextColor="rgba(59, 59, 59, 0.3)"
                />
              </View>
              <View style={styles.inputBox}>
                <Image
                  style={styles.imgIconInput}
                  resizeMode={'contain'}
                  source={Assets.ic_message}
                />
                <TextInput
                  style={styles.txtInput}
                  //   secureTextEntry={true}
                  placeholder="Email"
                  placeholderTextColor="rgba(59, 59, 59, 0.3)"
                />
              </View>
              <View style={styles.inputBox}>
                <Image
                  style={styles.imgIconInput}
                  resizeMode={'contain'}
                  source={Assets.ic_lock}
                />
                <TextInput
                  style={[styles.txtInput, {flex: 1}]}
                  secureTextEntry={true}
                  placeholder="Password"
                  placeholderTextColor="rgba(59, 59, 59, 0.3)"
                />
                <Pressable
                  onPress={() => {
                    // navigation.navigate('Onboarding03');
                  }}>
                  <Image
                    style={{marginRight: 20}}
                    source={Assets.ic_show}
                  />
                </Pressable>
              </View>
              <View style={{marginTop: 8, marginBottom: 20}}>
                <View style={{flexDirection: 'row', marginBottom: 12}}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    colors={['rgba(83, 232, 139, 1)', 'rgba(21, 190, 119, 1)']}
                    style={{padding: 5, borderRadius: 12, marginRight: 12}}>
                    <TouchableOpacity
                      //   style={styles.btnRegister}
                      onPress={() => {
                        // navigation.navigate('Onboarding03');
                      }}>
                      <Image source={Assets.ic_check} />
                    </TouchableOpacity>
                  </LinearGradient>

                  <Text style={styles.txtCheck}>Keep Me Signed In</Text>
                </View>

                <View style={{flexDirection: 'row', marginBottom: 12}}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    colors={['rgba(83, 232, 139, 1)', 'rgba(21, 190, 119, 1)']}
                    style={{padding: 5, borderRadius: 12, marginRight: 12}}>
                    <TouchableOpacity
                      //   style={styles.btnRegister}
                      onPress={() => {
                        // navigation.navigate('Onboarding03');
                      }}>
                      <Image source={Assets.ic_check} />
                    </TouchableOpacity>
                  </LinearGradient>

                  <Text style={styles.txtCheck}>
                    Email Me About Special Pricing
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['rgba(83, 232, 139, 1)', 'rgba(21, 190, 119, 1)']}
            style={styles.linearButton}>
            <TouchableOpacity
              style={styles.btnRegister}
              onPress={() => {
                navigation.navigate('SignupProcess');
              }}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </LinearGradient>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <GradientText style={styles.txtToLogin}>
              already have an account?
            </GradientText>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
      {/* </SafeAreaView> */}
    </View>
  );
};

export default Register;
