import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Assets from '../../config/Assets';
import {OnBoardNavigationProp} from '../Onboarding01';

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
  containerPreview: {
    justifyContent: 'flex-start',
    marginTop: 60,
    borderColor: 'rgba(90, 108, 234, 0.07)',
    height: 245,
    width: 238,
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  imgPreview: {
    borderRadius: 10,
    height: 245,
    width: 238,
  },
  icClose: {
    width: 31,
    height: 31,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 10,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderWidth: 1,
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

const UploadPreview = ({navigation}: Props) => {
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
            <Text style={styles.txtTitle}>Upload Your Photo{'\n'}Profile</Text>
            <Text style={styles.txtSubTitle}>
              This data will be displayed in your account{'\n'}profile for
              security
            </Text>
            <View>
              <ImageBackground
                resizeMode="contain"
                source={Assets.img_preview}
                style={styles.containerPreview}
                imageStyle={styles.imgPreview}>
                <TouchableOpacity style={styles.icClose}>
                  <Image source={Assets.ic_close} />
                </TouchableOpacity>
              </ImageBackground>
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
              navigation.navigate('SetLocation');
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

export default UploadPreview;
