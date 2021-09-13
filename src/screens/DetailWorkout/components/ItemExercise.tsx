import React from 'react';
import {StyleSheet, Animated, Dimensions} from 'react-native';
import {View, Text, Card, Colors} from 'react-native-ui-lib';
import {IExercise} from '../../../types/IExercises';
const widthScreen = Dimensions.get('window').width;
interface Props {
  item: IExercise;
  index: number;
}

const ItemExercise = ({item, index}: Props) => {
  const transX = React.useRef(new Animated.Value(widthScreen)).current;

  React.useEffect(() => {
    Animated.timing(transX, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true,
      delay: index * 250,
    }).start();
  }, []);

  return (
    <Animated.View style={{transform: [{translateX: transX}]}}>
      <Card
        style={styles.containerItem}
        onPress={() => console.log('press on a card')}
        row>
        <Card.Section
          imageSource={{uri: item.img}}
          imageStyle={{height: 100, width: 100}}
        />

        <View paddingL-16 paddingR-6 marginB-11>
          <Text m15 marginT-10 numberOfLines={1}>
            {item.name}
          </Text>
          <Text b13 color={Colors.dark70}>
            Calo: {item.calo_per_hour}/hour
          </Text>
        </View>
      </Card>
    </Animated.View>
  );
};

export default ItemExercise;

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 16,
    marginVertical: 8,
  },
});
