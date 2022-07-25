import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7DA453',
    borderRadius: 10,
    padding: 10,
    margin: 15,
  },
  container_done: {
    backgroundColor: '#37474F',
    borderRadius: 10,
    padding: 10,
    margin: 15,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '300',
  },
  text_done: {
    color: 'grey',
    fontSize: 20,
    fontWeight: '300',
    textDecorationLine: 'line-through',
  },
});

export default styles;
