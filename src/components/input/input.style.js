import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#37474F',
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    paddingBottom: 1,
    borderColor: '#808080',
    color: 'white',
  },
  button_disabled: {
    width: '90%',
    marginTop: 10,
    padding: 15,
    backgroundColor: '#808080',
    borderRadius: 15,
  },
  button_active: {
    width: '90%',
    marginTop: 10,
    padding: 15,
    backgroundColor: '#FBA501',
    borderRadius: 15,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;
