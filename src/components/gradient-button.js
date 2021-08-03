import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const GradientButton = props => {
  console.log(props);
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
