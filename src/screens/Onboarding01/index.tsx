import {StackNavigationProp} from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {TRootStackParamList} from '../../../App';

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

export type OnBoardNavigationProp = StackNavigationProp<
  TRootStackParamList,
  'Onboarding01'
>;

type Props = {
  navigation: OnBoardNavigationProp;
};

const Onboarding01 = ({navigation}: Props) => {
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
