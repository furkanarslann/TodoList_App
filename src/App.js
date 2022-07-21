import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Layout from './components/layout/layout';
import Header from './components/header/header';
import Input from './components/input/input';
import Todo from './components/todo/todo';
import TodoList from './components/todoList/todoList';

export default function App() {
  const todos = ['alisverise cik', 'yemek ye'];

  return (
    <Layout>
      <Header />
      <TodoList todos={todos} />
      <Input />
    </Layout>
  );
}
