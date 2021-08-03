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
import Assets from '../../config/Assets';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerContent: {
    flex: 1,
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  bg_pattern: {
    flex: 1,
    // backgroundColor: 'red'
  },
  btnBack: {
    height: 45,
    width: 45,
    backgroundColor: 'rgba(249, 168, 77, 0.1)',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: 38,
  },
  txtTitle: {
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 26,
    color: '#09051C',
    marginTop: 20,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 25,
    // backgroundColor: 'red',
  },
  txtSubTitle: {
    fontSize: 12,
    lineHeight: 22,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: 20,
  },
  containerInput: {
    justifyContent: 'space-between',
    marginTop: 40,
  },
  inputBox: {
    backgroundColor: '#fff',
    elevation: 3,
    borderRadius: 15,
    borderColor: 'rgba(90, 108, 234, 0.07)',
    width: screenWidth - 28,
    height: 103,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 12,
    flexDirection: 'row',
  },
  txtInput: {
    color: 'rgba(9, 5, 28, 1)',
    fontSize: 33,
    lineHeight: 49,
    textAlign: 'center',
    fontWeight: '700',
    letterSpacing: 60,
    width: screenWidth - 28,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  linearButton: {
    borderRadius: 15,
    height: 57,
    width: 157,
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

const VerificationCode = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <SafeAreaView style={styles.container}> */}
      <ImageBackground
        source={Assets.bg_pattern_03}
        resizeMode="cover"
        style={styles.bg_pattern}>
        {/* <View> */}
        <ScrollView>
          <View style={styles.containerContent}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={styles.btnBack}>
              <Image source={Assets.ic_back} />
            </TouchableOpacity>
            <Text style={styles.txtTitle}>
              Enter 4-digit{'\n'}Verification code
            </Text>
            <Text style={styles.txtSubTitle}>
              Code send to +6282045**** . This code will{'\n'}expired in 01:30
            </Text>
            <View style={styles.containerInput}>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.txtInput}
                  maxLength={4}
                  placeholder={'____'}
                  keyboardType={'number-pad'}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['rgba(83, 232, 139, 1)', 'rgba(21, 190, 119, 1)']}
          style={styles.linearButton}>
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => {
              navigation.navigate('Password');
            }}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </LinearGradient>
        {/* </View> */}
      </ImageBackground>
      {/* </SafeAreaView> */}
    </View>
  );
};

export default VerificationCode;
