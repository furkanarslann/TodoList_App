import {View, Text} from 'react-native';
import React from 'react';
import styles from './todo.style';

export default function Todo({text}) {
  console.log({text});
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
