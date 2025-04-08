import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

const CardItem = ({ text, onCheck, checked, onDelete }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onCheck}>
        <AntDesign
          name={checked ? 'checkcircle' : 'checkcircleo'}
          size={24}
          color={checked ? 'green' : 'gray'}
        />
      </TouchableOpacity>
      <Text style={[styles.text, checked && styles.checked]}>{text}</Text>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Entypo name="cross" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 5,
    marginBottom: 8,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  checked: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  deleteButton: {
    marginLeft: 10,
  },
});

export default CardItem;
