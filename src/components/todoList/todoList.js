import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Todo from '../todo/todo';

export default function TodoList({todos}) {
  console.log({todos});
  const renderTodo = ({item}) => <Todo text={item} />;

  return <FlatList data={todos} renderItem={renderTodo} />;
}
