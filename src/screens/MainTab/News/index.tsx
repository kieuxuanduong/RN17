import React from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {View, Image} from 'react-native-ui-lib';
import {useSelector} from 'react-redux';
import {RootState} from '../../../reduxs/store';
import Banner from './components/Banner';
import ItemWorkout from './components/ItemWorkout';
import ListHorizontal from './components/ListHorizontal';
import ListWorkout from './components/ListWorkout';

const widthScreen = Dimensions.get('window').width;
const widthImg = widthScreen;
const heightImg = (widthImg / 375) * 256;

const News = () => {
  const nameUser = useSelector<RootState, string>(
    state => state.auth.customer.name,
  );
  return (
    <View flex bg-white>
      <Image
        assetGroup="news"
        assetName="bg"
        width={widthImg}
        height={heightImg}
        style={{position: 'absolute'}}
      />
      <ListWorkout
        ListHeaderComponent={
          <>
            <Banner />
            <ListHorizontal />
          </>
        }
      />
    </View>
  );
};

export default News;
