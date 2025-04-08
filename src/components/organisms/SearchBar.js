import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const SearchBar = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    onAdd(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Add a new task"
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleAdd}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
  },
});

export default SearchBar;
