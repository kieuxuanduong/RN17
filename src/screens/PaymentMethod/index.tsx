import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Assets from '../../config/Assets';
import {OnBoardNavigationProp} from '../Onboarding01';

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
    elevation: 1,
    borderRadius: 15,
    borderColor: 'rgba(90, 108, 234, 0.07)',
    width: screenWidth - 50,
    height: 57,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 28,
    marginBottom: 12,
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

type Props = {
  navigation: OnBoardNavigationProp;
};

const PaymentMethod = ({navigation}: Props) => {
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
            <Text style={styles.txtTitle}>Payment Method</Text>
            <Text style={styles.txtSubTitle}>
              This data will be displayed in your account{'\n'}profile for
              security
            </Text>
            <View style={styles.containerInput}>
              <TouchableOpacity style={styles.inputBox}>
                <Image source={Assets.ic_paypal} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.inputBox}>
                <Image source={Assets.ic_visa} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.inputBox}>
                <Image source={Assets.ic_payoneer} />
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
              navigation.navigate('UploadPhoto');
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

export default PaymentMethod;