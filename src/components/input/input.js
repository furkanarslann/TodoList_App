import {View, Text, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from '../input/input.style';

export default function Input({setTodos, todos, setNumber}) {
  const [input, setInput] = useState('');

  const saveTodo = () => {
    const newTodos = [...todos, input];
    setTodos(newTodos);
    setNumber(newTodos.length);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={input}
        style={styles.input}
        placeholder="Yapılacak..."
        placeholderTextColor="#9D9D9D"
        onChangeText={newTodo => setInput(newTodo)}
      />
      <Pressable
        disabled={input === ''}
        style={input === '' ? styles.button_disabled : styles.button_active}
        onPress={saveTodo}>
        <Text style={styles.text}>Kaydet</Text>
      </Pressable>
    </View>
  );
}
