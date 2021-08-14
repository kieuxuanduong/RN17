import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
  SafeAreaView,
} from 'react-native';

import Banner from './components/banner';
import Header from '../../components/header';
import Assets from '../../config/Assets';

const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFF',
  },
  containerSearch: {
    marginHorizontal: 25,
    height: 50,
    marginTop: 18,
    flexDirection: 'row',
  },
  searchBar: {
    flex: 1,
    marginRight: 9,
    backgroundColor: 'rgba(249,168,77,0.1)',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 18,
  },
  txtSearch: {
    fontSize: 12,
    color: 'rgba(249,168,77,0.4)',
    lineHeight: 14,
    marginLeft: 19,
  },
  btnFilter: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: 'rgba(249,168,77,0.1)',
    justifyContent: 'center',
    alignContent: 'center',
  },
  containerTitleSection: {
    flexDirection: 'row',
    marginHorizontal: 31,
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  txtTitleSection: {
    color: '#09051C',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '700',
  },
  txtViewMore: {
    color: '#FF7C32',
    fontSize: 12,
    lineHeight: 16,
  },
  containerList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  containerItem: {
    width: (widthScreen - 80) / 2,
    backgroundColor: '#FFF',
    marginBottom: 20,
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 26,
    elevation: 3,
    borderRadius: 22,
  },
  imgItem: {
    width: 100,
    height: 100,
  },
  txtNameItem: {
    fontSize: 16,
    lineHeight: 21,
    color: '#000000',
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 4,
  },
  txtTimeItem: {
    fontSize: 13,
    lineHeight: 17,
    color: 'rgba(0,0,0,.5)',
  },
  containerItemPopular: {
    marginHorizontal: 30,
    elevation: 3,
    backgroundColor: '#FFF',
    borderRadius: 22,
    flexDirection: 'row',
    marginBottom: 20,
    padding: 12,
    alignItems: 'center',
    paddingRight: 20,
  },
  imgPopular: {
    width: 64,
    height: 64,
  },
  contentItemPopular: {
    marginLeft: 21,
    flex: 1,
  },
  txtPriceItemPopular: {
    color: '#FEAD1D',
    lineHeight: 29,
    fontSize: 22,
    fontWeight: '700',
  },
});

import {StackNavigationProp} from '@react-navigation/stack';
import {TRootStackParamList} from '../../../App';

export type MainTabNavigationProp = StackNavigationProp<
  TRootStackParamList,
  'MainTab'
>;

type Props = {
  navigation: MainTabNavigationProp;
};

const Home = ({navigation}: Props) => {
  console.log('hello');
  console.log(navigation);
  const dataNearestRestaurant = [
    {
      id: '0',
      name: 'Vegan Resto',
      time: '12 Mins',
      source: Assets.img_vegan,
    },
    {
      id: '1',
      name: 'Healthy Food',
      time: '8 Mins',
      source: Assets.img_healthy,
    },
    {
      id: '2',
      name: 'Healthy Food',
      time: '8 Mins',
      source: Assets.img_healthy,
    },
  ];

  const dataBanner = [
    {
      id: '0',
      src: Assets.img_banner,
    },
    {
      id: '1',
      src: Assets.img_banner,
    },
    {
      id: '2',
      src: Assets.img_banner,
    },
  ];

  // React.userEffect(()=>{
  //   console.log('Home'),
  //   navigation.setOptions({
  //     title: title,
  //   });
  // }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          {/* view header */}
          <Header navigation={navigation} />
          {/* view search */}
          <View style={styles.containerSearch}>
            <Pressable
              style={styles.searchBar}
              onPress={() =>
                navigation.navigate('Filter', {
                  name: 'Trung',
                  age: 18,
                })
              }>
              <Image source={Assets.ic_search} />
              <Text style={styles.txtSearch}>What do you want to order?</Text>
            </Pressable>

            <View style={styles.btnFilter}>
              <Image source={Assets.ic_filter} />
            </View>
          </View>

          {/* banner */}
          <Banner autoplay={false} dataBanner={dataBanner} />
          <View style={styles.containerTitleSection}>
            <Text style={styles.txtTitleSection}>Nearest Restaurant</Text>
            <Text style={styles.txtViewMore}>View More</Text>
          </View>
          <View>
            <ScrollView
              horizontal
              contentContainerStyle={{paddingHorizontal: 30, paddingTop: 4}}
              showsHorizontalScrollIndicator={false}>
              {dataNearestRestaurant.map((item, index) => {
                return (
                  <View
                    style={[styles.containerItem, {marginRight: 20}]}
                    key={index}>
                    <Image
                      source={item.source}
                      style={styles.imgItem}
                      resizeMode="contain"
                    />
                    <Text style={styles.txtNameItem}>{item.name}</Text>
                    <Text style={styles.txtTimeItem}>{item.time}</Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>

          <View style={styles.containerTitleSection}>
            <Text style={styles.txtTitleSection}>Popular Menu</Text>
            <Text style={styles.txtViewMore}>View More</Text>
          </View>

          <View>
            {dataNearestRestaurant.map((item, index) => {
              return (
                <View style={styles.containerItemPopular} key={index}>
                  <Image
                    source={item.source}
                    style={styles.imgPopular}
                    resizeMode="contain"
                  />

                  <View style={styles.contentItemPopular}>
                    <Text style={styles.txtNameItem}>{item.name}</Text>
                    <Text style={styles.txtTimeItem}>{item.time}</Text>
                  </View>
                  <Text style={styles.txtPriceItemPopular}>$15</Text>
                </View>
              );
            })}
          </View>
          <View style={{height: 90}} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;
