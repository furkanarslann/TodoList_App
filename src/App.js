import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Layout from './components/layout/layout';
import Header from './components/header/header';
import Input from './components/input/input';
import Todo from './components/todo/todo';
import TodoList from './components/todoList/todoList';

export default function App() {
  const [todos, setTodos] = useState([
    'alisverise cik',
    'yemek ye',
    'donedonedone',
  ]);
  const [number, setNumber] = useState(todos.length);

  return (
    <Layout>
      <Header number={number} />
      <TodoList todos={todos} setNumber={setNumber} number={number} setTodos={setTodos} />
      <Input setTodos={setTodos} todos={todos} setNumber={setNumber} />
    </Layout>
  );
}
