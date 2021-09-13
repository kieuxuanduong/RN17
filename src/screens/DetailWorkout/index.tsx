import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Assets, Colors, Image, Text, View} from 'react-native-ui-lib';
import {RootStackParamList} from '../../nav/RootStack';
import * as Icon from 'react-native-iconly';
import ItemExercise from './components/ItemExercise';
import dayjs from 'dayjs';

const widthBanner = Dimensions.get('window').width;
const heightBanner = (widthBanner / 1600) * 514;

const imgBackgrounds = [
  Assets.imgWorkout.imgWorkout1,
  Assets.imgWorkout.imgWorkout2,
  Assets.imgWorkout.imgWorkout3,
  Assets.imgWorkout.imgWorkout4,
  Assets.imgWorkout.imgWorkout5,
  Assets.imgWorkout.imgWorkout6,
  Assets.imgWorkout.imgWorkout7,
  Assets.imgWorkout.imgWorkout8,
  Assets.imgWorkout.imgWorkout9,
  Assets.imgWorkout.imgWorkout10,
];

const DetailWorkout = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'DetailWorkout'>>();
  const workout = route.params.item;
  console.log(workout);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: heightBanner,
          width: widthBanner,
        }}>
        <Image
          source={imgBackgrounds[workout.muscle_part_id % 10]}
          style={{
            height: heightBanner,
            width: widthBanner,
          }}
          overlayType={Image.overlayTypes.BOTTOM}
        />
      </View>

      <Text h28 marginL-16 marginV-12>
        {workout.name}
      </Text>
      <View row centerV marginH-16 paddingV-4>
        <Icon.Chat color={Colors.grey10} />
        <Text marginL-12>Hoạt động: {workout.commentCount} comment</Text>
      </View>
      <View row centerV marginH-16 paddingV-4>
        <Icon.Calendar color={Colors.grey10} />
        <Text marginL-12>
          Ngày tạo: {dayjs(workout.created_at).format('MM/DD/YYYY')}
        </Text>
      </View>
      <View row centerV marginH-16 paddingV-4 marginB-12>
        <Icon.Work color={Colors.grey10} />
        <Text marginL-12>
          Calo tiêu thụ: {parseInt(workout.calo, 10)} calos
        </Text>
      </View>
      <Text h17 marginH-16 marginV-4>
        Danh sách bài tập ({workout.exercise_items.length})
      </Text>
      {workout.exercise_items.map((item, index) => (
        <ItemExercise item={item.exercise} key={item.id} index={index} />
      ))}
      <Text h17 marginH-16 marginV-4>
        Danh sách bình luận ({workout.commentCount})
      </Text>
    </View>
  );
};

export default DetailWorkout;

const styles = StyleSheet.create({});
