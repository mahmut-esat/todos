import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './ContentCard.style';

function ContentCard({onPress, text}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ContentCard;
