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
    // justifyContent: 'space-around',
    padding: 26,
    alignItems: 'center',
    marginBottom: 12,
    flexDirection: 'row',
  },
  txtInput: {
    paddingLeft: 16,
  },
  txtVia: {
    color: '#828282',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 4,
  },
  txtDetails: {
    color: '#09051C',
    fontSize: 16,
    lineHeight: 24,
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

const FourDot = () => {
  return (
    <View style={{flexDirection: 'row', marginRight: 10}}>
      <Image style={{marginRight: 4}} source={Assets.ic_dot} />
      <Image style={{marginRight: 4}} source={Assets.ic_dot} />
      <Image style={{marginRight: 4}} source={Assets.ic_dot} />
      <Image style={{marginRight: 4}} source={Assets.ic_dot} />
    </View>
  );
};

const ViaMethod = ({navigation}) => {
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
            <Text style={styles.txtTitle}>Forgot password?</Text>
            <Text style={styles.txtSubTitle}>
              Select which contact details should we{'\n'}use to reset your
              password
            </Text>
            <View style={styles.containerInput}>
              <TouchableOpacity style={styles.inputBox}>
                <Image source={Assets.ic_sms} />
                <View style={styles.txtInput}>
                  <Text style={styles.txtVia}>Via sms:</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FourDot />
                    <FourDot />
                    <Text style={styles.txtDetails}>4235</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.inputBox}>
                <Image source={Assets.ic_email} />
                <View style={styles.txtInput}>
                  <Text style={styles.txtVia}>Via email:</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FourDot />
                    <Text style={styles.txtDetails}>@gmail.com</Text>
                  </View>
                </View>
              </TouchableOpacity>
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
              navigation.navigate('VerificationCode');
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

export default ViaMethod;
