import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from '../header/header.style';

export default function Header({number}) {
 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Yapılacaklar</Text>
      <Text style={styles.number}>{number}</Text>
    </View>
  );
}
