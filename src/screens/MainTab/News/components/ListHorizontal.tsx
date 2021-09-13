import React from 'react';
import {
  Alert,
  FlatList,
  LayoutAnimation,
  Platform,
  StyleSheet,
  UIManager,
} from 'react-native';
import {Card, Colors, Text, View} from 'react-native-ui-lib';
import {useSelector} from 'react-redux';
import URL from '../../../../config/Api';
import {RootState} from '../../../../reduxs/store';
import {IExercise, IResExercise} from '../../../../types/IExercises';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const ItemList = ({item}: {item: IExercise}) => {
  return (
    <Card
      style={styles.containerItem}
      onPress={() => console.log('press on a card')}>
      <Card.Section
        imageSource={{uri: item.img}}
        imageStyle={{height: 190, width: 190}}
      />
      <View paddingL-16 paddingR-6 marginB-11>
        <Text m15 marginT-10 numberOfLines={1}>
          {item.name}
        </Text>
        <View row>
          <Text b13 color={Colors.dark70}>
            Calo: {item.calo_per_hour} / hour
          </Text>
        </View>
      </View>
      <View absT bg-white marginT-10 marginL-10 br100 paddingV-2 paddingH-8>
        <Text h8 color={Colors.dark70}>
          1 WEEK
        </Text>
      </View>
    </Card>
  );
};

const ListHorizontal = () => {
  const [exercises, setExercises] = React.useState<IExercise[]>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const token = useSelector<RootState, string>(state => state.auth.token);
  React.useEffect(() => {
    if (!token) return;
    fetch(URL.exercises, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then((json: IResExercise) => {
        const success = json.success;
        //login fail
        if (!success) {
          Alert.alert('Thong bao', json.message);
          setLoading(false);
          return;
        }
        //login success
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setExercises(json.exercises);
        setLoading(false);
        return json;
      })
      .catch(error => {
        console.error(error);
      });
  }, [token]);

  return (
    <View paddingV-12 backgroundColor='#FFF'>
      <View row spread paddingH-16 centerV>
        <Text h24>Exercise For Beginners</Text>
        <Text h15 color={Colors.dark70}>
          More
        </Text>
      </View>

      {loading ? (
        <View row paddingH-16 paddingV-12>
          <Card
            style={[
              styles.containerItem,
              {height: 251, backgroundColor: Colors.dark40},
            ]}
          />
          <Card
            style={[
              styles.containerItem,
              {height: 251, backgroundColor: Colors.dark40},
            ]}
          />
          <Card
            style={[
              styles.containerItem,
              {height: 210, backgroundColor: Colors.dark40},
            ]}
          />
        </View>
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={exercises}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{paddingHorizontal: 16, paddingVertical: 12}}
          renderItem={({item, index}) => {
            return <ItemList item={item} key={index} />;
          }}
        />
      )}
      <View row spread paddingH-16 centerV>
        <Text h24>Workouts</Text>
      </View>
    </View>
  );
};

export default ListHorizontal;

const styles = StyleSheet.create({
  containerItem: {
    width: 190,
    marginRight: 12,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
