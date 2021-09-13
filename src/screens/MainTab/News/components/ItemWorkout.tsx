import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {View, Card, Text, Colors, Image} from 'react-native-ui-lib';
import {RootStackParamList} from '../../../../nav/RootStack';
import {IWorkout} from '../../../../types/IWorkout';

const widthScreen = Dimensions.get('window').width;
const ItemWorkout = ({item}: {item: IWorkout}) => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  const onPressItem = React.useCallback(() => {
    navigate('DetailWorkout', {
      item,
    });
  }, []);

  return (
    <View backgroundColor="#FFF">
      <TouchableOpacity onPress={onPressItem}>
        <Card style={styles.container} row>
          <View style={styles.contentItem}>
            <Image
              style={{height: 150, width: 150}}
              source={{
                uri: item.exercise_items[0]?.exercise.img,
              }}
              resizeMode="contain"
            />
          </View>
          <View>
            <View row>
              <View
                backgroundColor={'#F7B500'}
                br100
                marginT-10
                marginL-10
                paddingV-2
                paddingH-8>
                <Text h8 color={Colors.white}>
                  PRO
                </Text>
              </View>
            </View>

            <View paddingL-16 paddingR-6 marginB-11>
              <Text h16 marginT-10 numberOfLines={1} color={'#6F6F6F'}>
                {item.name}
              </Text>
              <Text b13 color={'#7E7D7D'}>
                Calo: {item.calo}/hour
              </Text>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export default ItemWorkout;

const styles = StyleSheet.create({
  container: {
    width: widthScreen - 32,
    backgroundColor: Colors.blue80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    alignSelf: 'center',
    marginBottom: 12,
  },
  contentItem: {
    overflow: 'hidden',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    // backgroundColor: 'red',
    height: 150,
    width: 150,
  },
});
