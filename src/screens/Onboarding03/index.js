import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Pressable,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgOnboard: {
    width: screenWidth,
    // backgroundColor: 'green',
    marginTop: 87,
  },
  containerTxt: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 42,
    // backgroundColor: 'red',
  },
  txtTitle: {
    textAlign: 'center',
    color: '#09051C',
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 29,
  },
  txtSubTitle: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 22,
  },
  linearButton: {
    borderRadius: 15,
    height: 57,
    // width: 157,
    marginBottom: 31,
  },
  btnNext: {
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
    // margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

const Onboarding03 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.containerContent}>
          {/* <Image style={styles.imgOnboard} source={Assets.img_onboard03} /> */}
          <Image style={styles.imgOnboard} source={Assets.img_onboard03} />
          <View style={styles.containerTxt}>
            <Text style={styles.txtTitle}>
              Food Ninja is Where Your{'\n'}Comfort Food Lives
            </Text>
            <Text style={styles.txtSubTitle}>
              Enjoy a fast and smooth food delivery at{'\n'}your doorstep
            </Text>
          </View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['rgba(83, 232, 139, 1)', 'rgba(21, 190, 119, 1)']}
            style={styles.linearButton}>
            <TouchableOpacity
              style={styles.btnNext}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Onboarding03;
