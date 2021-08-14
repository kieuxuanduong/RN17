import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  BottomTabBarOptions,
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {getBottomSpace} from 'react-native-iphone-x-helper';
import * as IconlyPack from 'react-native-iconly';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Cart from '../screens/Cart';
import Chat from '../screens/Chat';
import Colors from '../config/Color';

const widthScreen = Dimensions.get('window').width;

export type TMainTabParamList = {
  Home: undefined;
  Profile: undefined;
  Cart: undefined;
  Chat: undefined;
};
const Tab = createBottomTabNavigator<TMainTabParamList>();

type TRouteName = keyof TMainTabParamList;

const MyTab = ({
  state,
  activeTintColor = Colors.primary,
  inactiveTintColor = Colors.primary5,
  navigation,
}: BottomTabBarProps<BottomTabBarOptions>) => {
  // console.log(props);
  let routeNames = state.routeNames as TRouteName[];
  let currentIndex = state.index;
  const renderContent = (item: TRouteName, color: string) => {
    switch (item) {
      case 'Home':
        return <IconlyPack.Home set="bold" color={color} key={item} />;
      case 'Profile':
        return <IconlyPack.User set="bold" color={color} key={item} />;
      case 'Cart':
        return (
          <View>
            <IconlyPack.Buy set="bold" color={color} key={item} />
            <View style={styles.badge}>
              <Text style={styles.txtNumberCart}>7</Text>
            </View>
          </View>
        );
      case 'Chat':
        return (
          <View>
            <IconlyPack.Chat set="bold" color={color} key={item} />
            <View style={styles.badge} />
          </View>
        );
      default:
        return null;
    }
  };
  return (
    <View style={styles.containerTab}>
      {routeNames.map((item, index) => {
        let color =
          currentIndex === index ? activeTintColor : inactiveTintColor;

        return (
          <TouchableOpacity
            style={styles.btnTab}
            key={index}
            onPress={() => navigation.navigate(item)}>
            {renderContent(item, color)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const MainTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.primary5,
      }}
      tabBar={MyTab}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <IconlyPack.Home
              set="bold"
              // primaryColor="blueviolet"
              // secondaryColor="blue"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <IconlyPack.User set="bold" />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: () => <IconlyPack.Buy set="bold" />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: () => <IconlyPack.Chat set="bold" />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  containerTab: {
    width: widthScreen - 32,
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: getBottomSpace() ? getBottomSpace() + 10 : 16,
    left: 16,
    padding: 16,
    flexDirection: 'row',
    borderRadius: 22,
    shadowColor: 'rgb(90, 108, 234)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    elevation: 3,
  },

  btnTab: {
    flex: 1,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },

  badge: {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 7,
    minHeight: 14,
    minWidth: 14,
    alignItems: 'center',
    justifyContent: 'center',
    top: -3,
    right: -5,
    borderWidth: 1,
  },
  txtNumberCart: {
    fontSize: 9,
    lineHeight: 12,
    color: '#fff',
  },
});

export default MainTab;
