import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from 'react-native';

import Logo from '../../components/logo';
import Assets from '../../config/Assets';

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
});

const Onboarding01 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={Assets.bg_pattern}
          resizeMode="cover"
          style={styles.bg_pattern}>
          <View style={styles.containerContent}>
            <Pressable onPress={() => navigation.navigate('Onboarding02')}>
              <Logo />
            </Pressable>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
};

export default Onboarding01;
