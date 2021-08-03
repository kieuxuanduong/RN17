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
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/header';

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
    marginBottom: 10,
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
  containerTitleSection: {
    flexDirection: 'row',
    marginHorizontal: 31,
    justifyContent: 'space-between',
    alignContent: 'center',
    marginVertical: 10,
  },
  txtTitleSection: {
    color: '#09051C',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '700',
  },

  // filterList: {},

  containerList: {
    marginHorizontal: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  containerItem: {
    height: 44,
    backgroundColor: 'rgba(254, 173, 29, 0.1)',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginRight: 10,
    marginVertical: 10,
  },
  txtNameItem: {
    color: 'rgba(218, 99, 23, 1)',
  },
  linearButton: {
    // flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
    marginHorizontal: 25,
    height: 57,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginBottom: 31,
  },
  btnSearch: {
    flex: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    // flex: 1,
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

const Section = ({title, data}) => {
  return (
    <View>
      <View style={styles.containerTitleSection}>
        <Text style={styles.txtTitleSection}>{title}</Text>
      </View>
      <View style={styles.containerList}>
        {data.map((item, index) => {
          return (
            <View key={index} style={styles.containerItem}>
              <Text style={styles.txtNameItem}>{item.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const Filter = ({route, navigation}) => {
  console.log('route', route);
  const dataList = [
    {
      id: '0',
      title: 'Type',
      data: [
        {
          id: '0',
          name: 'Restaurant',
        },
        {
          id: '1',
          name: 'Menu',
        },
      ],
    },
    {
      id: '1',
      title: 'Location',
      data: [
        {
          id: '0',
          name: '1 Km',
        },
        {
          id: '1',
          name: '>10 Km',
        },
        {
          id: '2',
          name: '<10 Km',
        },
      ],
    },
    {
      id: '2',
      title: 'Food',
      data: [
        {
          id: '0',
          name: 'Cake',
        },
        {
          id: '1',
          name: 'Soup',
        },
        {
          id: '2',
          name: 'Main Course',
        },
        {
          id: '3',
          name: 'Appetizer',
        },
        {
          id: '4',
          name: 'Dessert',
        },
      ],
    },
  ];
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          {/* view header */}
          <Header navigation={navigation} />
          {/* view search */}
          <View style={styles.containerSearch}>
            <View style={styles.searchBar}>
              <Image source={Assets.ic_search} />
              <TextInput
                style={styles.txtSearch}
                placeholder="What do you want to order?"
                placeholderTextColor="rgba(249, 168, 77, 0.4)"
              />
            </View>
          </View>

          {/* <View style={styles.filterList}> */}
          {dataList.map((item, index) => {
            return (
              <View key={index}>
                <Section title={item.title} data={item.data} />
              </View>
            );
          })}
        </View>
        <View style={{}}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['rgba(83, 232, 139, 1)', 'rgba(21, 190, 119, 1)']}
            style={styles.linearButton}>
            <TouchableOpacity style={styles.btnSearch}>
              <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Filter;
