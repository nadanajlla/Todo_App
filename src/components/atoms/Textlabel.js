import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextLabel = ({ text }) => (
  <Text style={styles.label}>{text}</Text>
);

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default TextLabel;
