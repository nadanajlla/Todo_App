import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextLabel from '../atoms/TextLabel';
import Button from '../atoms/Button';
import CardItem from '../molecules/CardItem';

const TodoListSection = ({ title, todos, onCheck, onDelete, onRefresh, completed }) => {
  return (
    <View style={styles.container}>
      <TextLabel text={title} />

      {todos.length === 0 ? (
        <View style={styles.emptyBox} />
      ) : (
        todos.map((todo, index) => (
          <CardItem
            key={index}
            text={todo.text}
            checked={todo.completed}
            onCheck={() => onCheck(index)}
            onDelete={() => onDelete(index)}
          />
        ))
      )}

      <Button title="Refresh" onPress={onRefresh} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  emptyBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    borderRadius: 6,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export default TodoListSection;
