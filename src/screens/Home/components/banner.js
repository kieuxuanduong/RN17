import React from 'react';
import Swiper from 'react-native-swiper';
import {View, StyleSheet, Image, Dimensions} from 'react-native';

const widthScreen = Dimensions.get('window').width;
const widthImgBanner = widthScreen - 50;
const scaleImgBanner = 325 / 150;
const heightImgBanner = widthImgBanner / scaleImgBanner;

const styles = StyleSheet.create({
  containerBanner: {
    marginTop: 20,
    // marginHorizontal: 25,
    marginBottom: 25,
    // backgroundColor: 'red',
    height: heightImgBanner,
  },
  pageBanner: {
    paddingHorizontal: 25,
  },
  imgBanner: {
    width: widthImgBanner,
    height: heightImgBanner,
  },
});

const Banner = ({autoplay = true, dataBanner}) => {
  return (
    <View style={styles.containerBanner}>
      <Swiper autoplay={autoplay} loop paginationStyle={{bottom: 12}}>
        {dataBanner.map((item, index) => {
          return (
            <View key={index} style={styles.pageBanner}>
              <Image source={item.src} style={styles.imgBanner} />
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

export default Banner;
