import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientButton = (props: {
  children: JSX.Element;
  linearStyle: StyleProp<ViewStyle>;
  style: StyleProp<ViewStyle>;
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['rgba(83, 232, 139, 1)', 'rgba(21, 190, 119, 1)']}
      style={props.linearStyle}>
      <TouchableOpacity {...props}>{props.children}</TouchableOpacity>
    </LinearGradient>
  );
};

export default GradientButton;
