import Assets from '../../config/Assets';
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Pressable,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFF',
  },

  btnBack: {
    height: 45,
    width: 45,
    backgroundColor: 'rgba(249, 168, 77, 0.1)',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: 38,
  },
  txtTitle: {
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 33,
    color: '#09051C',
    marginTop: 20,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 25,
    // backgroundColor: 'red',
    // height: 33,
    marginBottom: 12,
  },
  containerListChat: {
    alignItems: 'center',
    // marginTop: 12,
    flexDirection: 'column',
    flex: 1,
    // backgroundColor: 'green',
  },
  itemChat: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 3,
    borderRadius: 15,
    borderColor: 'rgba(90, 108, 234, 0.07)',
    width: screenWidth - 40,
    height: 81,
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 8,
    marginBottom: 12,
  },
  imgProfile: {
    height: 62,
    width: 62,
  },
  chatDetails: {
    flex: 1,
    paddingLeft: 18,
    paddingRight: 12,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  txtName: {
    color: '#09051C',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
  },
  txtTime: {
    color: 'rgba(59, 59, 59, 0.3)',
    fontSize: 14,
    lineHeight: 14,
  },
  txtMessage: {
    color: 'rgba(59, 59, 59, 0.3)',
    fontSize: 14,
    lineHeight: 14,
  },
});

const Chat = ({route, navigation}) => {
  const dataChat = [
    {
      id: '0',
      imgProfile: Assets.img_profile_1,
      name: 'Anamwp',
      time: '20:00',
      content: 'Your Order Just Arrived!',
    },
    {
      id: '1',
      imgProfile: Assets.img_profile_2,
      name: 'Guy Hawkins',
      time: '20:00',
      content: 'Your Order Just Arrived!',
    },
    {
      id: '2',
      imgProfile: Assets.img_profile_3,
      name: 'Leslie Alexander',
      time: '20:00',
      content: 'Your Order Just Arrived!',
    },
    {
      id: '3',
      imgProfile: Assets.img_profile_1,
      name: 'Leslie Alexander',
      time: '20:00',
      content: 'Your Order Just Arrived!',
    },
    {
      id: '4',
      imgProfile: Assets.img_profile_1,
      name: 'Anamwp',
      time: '20:00',
      content: 'Your Order Just Arrived!',
    },
    {
      id: '5',
      imgProfile: Assets.img_profile_2,
      name: 'Guy Hawkins',
      time: '20:00',
      content: 'Your Order Just Arrived!',
    },
    {
      id: '6',
      imgProfile: Assets.img_profile_3,
      name: 'Leslie Alexander',
      time: '20:00',
      content: 'Your Order Just Arrived!',
    },
    {
      id: '7',
      imgProfile: Assets.img_profile_1,
      name: 'Leslie Alexander',
      time: '20:00',
      content: 'Your Order Just Arrived!',
    },
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.btnBack}>
          <Image source={Assets.ic_back} />
        </TouchableOpacity>
        <Text style={styles.txtTitle}>Chat</Text>

        <ScrollView style={styles.container}>
          <View>
            <View style={styles.containerListChat}>
              {dataChat.map((item, index) => {
                return (
                  <TouchableOpacity style={styles.itemChat} key={index}>
                    <Image style={styles.imgProfile} source={item.imgProfile} />
                    <View style={styles.chatDetails}>
                      <View style={styles.nameRow}>
                        <Text style={styles.txtName}>{item.name}</Text>
                        <Text style={styles.txtTime}>{item.time}</Text>
                      </View>
                      <Text style={styles.txtMessage}>{item.content}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View style={{height: 90}} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Chat;
