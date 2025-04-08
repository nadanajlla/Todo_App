import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200EE',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginVertical: 5,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Button;
