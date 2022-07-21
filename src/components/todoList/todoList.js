import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Todo from '../todo/todo';

export default function TodoList({todos}) {
  console.log({todos});
  const renderTodo = ({todo}) => <Todo text={todo} />;

  return <FlatList data={todos} renderItem={renderTodo} />;
}
