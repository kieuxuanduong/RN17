import React, {useState} from 'react';
import {View, Button} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import Container from '../../../components/Container';
import Txt from '../../../components/Txt';
import useBoolean from '../../../hooks/useBoolean';
import {RootState} from '../../../reduxs/store';
import {IUserState} from '../../../reduxs/userSlice';
import ButtonResetUserInfo from './components/ButtonResetUserInfo';
import ButtonSubmit from './components/ButtonSubmit';

const Profile = React.memo(() => {
  const userInfo = useSelector<RootState, IUserState>(state => state.userInfo);
  const [valueSwitch, setValueSwitch] = useState<boolean>(false);
  const [showModal, onShowModal, onHideModal] = useBoolean();
  return (
    <Container style={{}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Txt>{`Ten: ${userInfo.name}`}</Txt>
        <Txt>{`Age: ${userInfo.age}`}</Txt>
        <ButtonSubmit userInfo={userInfo} />

        <ButtonResetUserInfo />

        <Switch value={valueSwitch} onValueChange={setValueSwitch} />
        <Button title="show modal" onPress={onShowModal} />
        {!!showModal && (
          <View style={{width: 100, height: 100, backgroundColor: 'red'}}>
            <Button title="hide modal" onPress={onHideModal} />
          </View>
        )}
      </View>
    </Container>
  );
});

export default Profile;
