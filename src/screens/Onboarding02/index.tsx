import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Assets from '../../config/Assets';
import {OnBoardNavigationProp} from '../Onboarding01';

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
    marginTop: 56.83,
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
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
    height: 57,
    width: 157,
    marginBottom: 31,
  },
  btnNext: {
    flex: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

type Props = {
  navigation: OnBoardNavigationProp;
};

const Onboarding02 = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.containerContent}>
          <Image style={styles.imgOnboard} source={Assets.img_onboard02} />
          <View style={styles.containerTxt}>
            <Text style={styles.txtTitle}>
              Find your Comfort{'\n'}Food Here
            </Text>
            <Text style={styles.txtSubTitle}>
              Here You Can find a chef or dish for every{'\n'}taste and color.
              Enjoy!
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
                navigation.navigate('Onboarding03');
              }}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Onboarding02;
