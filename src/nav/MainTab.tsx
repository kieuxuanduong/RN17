import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import News from '../screens/MainTab/News';
import Trending from '../screens/MainTab/Trending';
import Goals from '../screens/MainTab/Goals';
import HealthyTips from '../screens/MainTab/HealthyTips';
import Profile from '../screens/MainTab/Profile';
import {Assets, Button, Colors, Image, View} from 'react-native-ui-lib';
import {Header} from '@react-navigation/elements';
import {FONTS} from '../config/Typo';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';

export type MainTabParamList = {
  News: undefined;
  Trending: undefined;
  HealthyTips: undefined;
  Goals: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      // tabBar={props => <MyTab {...props} />}
      screenOptions={() => ({
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.dark50,
      })}>
      <Tab.Screen
        name="News"
        component={News}
        options={{
          // headerShown: false,
          tabBarLabel: 'News',
          tabBarIcon: ({color}) => (
            <Image
              assetGroup="icTab"
              assetName="news"
              width-28
              height-28
              tintColor={color}
            />
          ),
          headerTransparent: true,
          header: (props: BottomTabHeaderProps) => {
            return (
              <Header
                title="Exercises"
                headerTitleAlign="left"
                headerTitleStyle={{
                  fontSize: 27,
                  fontFamily: FONTS.Heavy,
                }}
                headerRight={({tintColor, pressColor, pressOpacity}) => {
                  return (
                    <View row>
                      <Button
                        iconSource={Assets.icHeader.search}
                        color={tintColor}
                        style={{width: 44, height: 44}}
                        link
                      />
                      <Button
                        iconSource={Assets.icHeader.dots}
                        color={tintColor}
                        style={{width: 44, height: 44}}
                        link
                      />
                    </View>
                  );
                }}
                headerStyle={{
                  backgroundColor: Colors.transparent,
                  elevation: 0,
                }}
                headerTintColor={Colors.white}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Training"
        component={Trending}
        options={{
          headerShown: false,
          tabBarLabel: 'Training',
          tabBarIcon: ({color}) => (
            <Image
              assetGroup="icTab"
              assetName="training"
              width-28
              height-28
              tintColor={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HealthyTips"
        component={HealthyTips}
        options={{
          headerShown: false,
          tabBarLabel: 'HealthyTips',
          tabBarIcon: ({color}) => (
            <Image
              assetGroup="icTab"
              assetName="healthyTips"
              width-28
              height-28
              tintColor={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Goals"
        component={Goals}
        options={{
          headerShown: false,
          tabBarLabel: 'Goals',
          tabBarIcon: ({color}) => (
            <Image
              assetGroup="icTab"
              assetName={'goals'}
              width-28
              height-28
              tintColor={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Image
              assetGroup="icTab"
              assetName="profile"
              width-28
              height-28
              tintColor={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
