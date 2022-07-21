import {View, Text} from 'react-native';
import React from 'react';
import styles from '../header/header.style';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Yapılacaklar</Text>
      <Text style={styles.number}>0</Text>
    </View>
  );
}
