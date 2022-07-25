import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './todo.style';

export default function Todo({text, todos, setNumber, number, setTodos}) {
  const [active, setActive] = useState(styles.container);
  const [decoration, setDecoration] = useState(styles.text);
  const [clicked, setClicked] = useState(false);

  const todoClicked = () => {
    setClicked(!clicked);
    if (clicked) {
      setActive(styles.container);
      setDecoration(styles.text);
      setNumber(number + 1);
    } else {
      setActive(styles.container_done);
      setDecoration(styles.text_done);
      setNumber(number - 1);
    }
  };

  const deleteTodo = () => {
    const newTodos = todos.filter(item => item !== text);
    setTodos(newTodos);
    active === styles.container ? setNumber(number - 1) : '';
  };
  return (
    <Pressable style={active} onPress={todoClicked} onLongPress={deleteTodo}>
      <Text style={decoration}>{text}</Text>
    </Pressable>
  );
}
