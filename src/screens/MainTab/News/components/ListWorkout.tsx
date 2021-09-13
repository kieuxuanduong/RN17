import React from 'react';
import {Alert, FlatList, LayoutAnimation, StyleSheet} from 'react-native';
import { Colors } from 'react-native-ui-lib';
import {useSelector} from 'react-redux';
import URL from '../../../../config/Api';
import {RootState} from '../../../../reduxs/store';
import {IResWorkout, IWorkout} from '../../../../types/IWorkout';
import ItemWorkout from './ItemWorkout';
interface Props {
  ListHeaderComponent:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}

const ListWorkout = ({ListHeaderComponent}: Props) => {
  const [workout, setWorkout] = React.useState<IWorkout[]>([]);
  const [loading, setLoading] = React.useState(true);
  const token = useSelector<RootState, string>(state => state.auth.token);
  const userId = useSelector<RootState, number>(state => state.auth.user_id);
  React.useEffect(() => {
    if (!token || !userId) return;

    fetch(URL.workouts(userId), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then((json: IResWorkout) => {
        const success = json.success;
        if (!success) {
          Alert.alert('Thông báo', json.message);
          setLoading(false);
          return;
        }
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setWorkout(json.workouts);
        setLoading(false);
        return json;
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <FlatList
      data={workout}
      renderItem={({item}) => {
        return <ItemWorkout item={item} />;
      }}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={ListHeaderComponent}
      // contentContainerStyle={{backgroundColor: Colors.white}}
    />
  );
};

export default ListWorkout;

const styles = StyleSheet.create({});
