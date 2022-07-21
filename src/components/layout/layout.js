import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './layout.style';

export default function Layout({children}) {
  return <SafeAreaView style={styles.layout}>{children}</SafeAreaView>;
}
