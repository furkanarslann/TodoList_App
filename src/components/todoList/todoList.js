import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Todo from '../todo/todo';

export default function TodoList({todos, setNumber, number, setTodos}) {
  const renderTodo = ({item}) => (
    <Todo
      text={item}
      todos={todos}
      setTodos={setTodos}
      setNumber={setNumber}
      number={number}
    />
  );

  return <FlatList data={todos} renderItem={renderTodo} />;
}
