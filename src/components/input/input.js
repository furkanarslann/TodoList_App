import {View, Text, TextInput, Pressable} from 'react-native';
import React from 'react';
import styles from '../input/input.style';

export default function Input() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Yapılacak..." />
      <Pressable style={styles.button}>
        <Text style={styles.text}>Kaydet</Text>
      </Pressable>
    </View>
  );
}
