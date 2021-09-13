import React, {useState} from 'react';
import {View, Button, TextInput} from 'react-native';
import {useSelector} from 'react-redux';
import Container from '../../components/Container';
import Txt from '../../components/Txt';
import useBoolean from '../../hooks/useBoolean';
import {RootState} from '../../reduxs/store';
import {IUserState} from '../../reduxs/userSlice';
import ButtonSubmit from './components/ButtonSubmit';
import ButtonUpdateTheme from './components/ButtonUpdateTheme';

const UpdateProfile = () => {
  // const {userInfo, setUserInfo} = useUser();
  const userInfo = useSelector<RootState, IUserState>(state => state.userInfo);
  const [updateUserInfo, setUpdateUserInfo] = useState(userInfo);
  const [showModal, onShowModal, onHideModal] = useBoolean();

  return (
    <Container>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Txt>Ten:</Txt>
        <TextInput
          placeholder="ho va ten"
          defaultValue={updateUserInfo.name}
          onChangeText={(name: string) => {
            setUpdateUserInfo({...updateUserInfo, name});
          }}
        />
        <Txt>Tuoi:</Txt>
        <TextInput
          placeholder="nhap so tuoi"
          defaultValue={updateUserInfo.age}
          onChangeText={(age: string) => {
            setUpdateUserInfo({...updateUserInfo, age});
          }}
        />
        <Txt>Dia chi:</Txt>
        <TextInput
          placeholder="nhap dia chi"
          defaultValue={updateUserInfo.address}
          onChangeText={(address: string) => {
            setUpdateUserInfo({...updateUserInfo, address});
          }}
        />

        <ButtonSubmit updateUserInfo={updateUserInfo} />
        <ButtonUpdateTheme />
        <Button title="show modal" onPress={onShowModal} />
        {!!showModal && (
          <View style={{width: 100, height: 100, backgroundColor: 'red'}}>
            <Button title="hide modal" onPress={onHideModal} />
          </View>
        )}
      </View>
    </Container>
  );
};

export default UpdateProfile;
