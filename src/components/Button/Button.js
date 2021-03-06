import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './Button.style';

function ButtonCard({title, onPress, icon}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default ButtonCard;
