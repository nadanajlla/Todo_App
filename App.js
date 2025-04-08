import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedHistory, setCompletedHistory] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const deleteCompleted = () => {
    const completedTasks = tasks.filter(task => task.completed);
    setCompletedHistory([...completedHistory, ...completedTasks]);
    const updatedTasks = tasks.filter(task => !task.completed);
    setTasks(updatedTasks);
  };

  const clearHistory = () => {
    setCompletedHistory([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Tugas</Text>
      <View style={styles.motivationContainer}>
        <Text style={styles.motivationText}>
          Satu tugas diselesaikan, 1000 tugas menanti dikerjakan
        </Text>
      </View>
      
      {completedHistory.length > 0 && (
        <View style={styles.historySection}>
          <View style={styles.historyHeader}>
            <Text style={styles.historyTitle}>Riwayat Tugas Selesai</Text>
            <TouchableOpacity onPress={clearHistory}>
              <Text style={styles.clearHistoryButton}>Hapus Riwayat</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.historyList}>
            {completedHistory.map((task, index) => (
              <View key={`history-${index}`} style={styles.historyItem}>
                <Text style={styles.completedTask}>{task.text}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      )}
      
      <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Masukkan tugas baru"
            value={newTask}
            onChangeText={setNewTask}
            onSubmitEditing={addTask}
            returnKeyType="done"
          />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.buttonText}>Tambah</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.taskList}>
        {tasks.map((task, index) => (
          <View key={index} style={styles.taskItem}>
            <TouchableOpacity onPress={() => toggleTask(index)}>
              <View style={styles.checkboxContainer}>
                <View style={[styles.checkbox, task.completed && styles.checkedBox]}>
                  {task.completed && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={[styles.taskText, task.completed && styles.completedTask]}>
                  {task.text}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteTask(index)}>
              <Text style={styles.deleteButton}>Hapus</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.actionButtonsContainer}>
        {tasks.length > 0 && (
          <>
            <TouchableOpacity 
              style={styles.toggleAllButton} 
              onPress={() => {
                const allCompleted = tasks.every(task => task.completed);
                setTasks(tasks.map(task => ({...task, completed: !allCompleted})));
              }}>
              <Text style={styles.buttonText}>
                {tasks.every(task => task.completed) ? 'Batal Centang Semua' : 'Centang Semua'}
              </Text>
            </TouchableOpacity>
            
            <View style={styles.clearButtonsContainer}>
              <TouchableOpacity style={styles.clearAllButton} onPress={() => setTasks([])}>
                <Text style={styles.buttonText}>Hapus Semua</Text>
              </TouchableOpacity>
              {tasks.some(task => task.completed) && (
                <TouchableOpacity style={styles.clearCompletedButton} onPress={deleteCompleted}>
                  <Text style={styles.buttonText}>Hapus Selesai</Text>
                </TouchableOpacity>
              )}
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  taskList: {
    flex: 1,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eee',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  checkmark: {
    color: '#fff',
    fontSize: 12,
  },
  taskText: {
    fontSize: 16,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteButton: {
    color: '#f44336',
  },
  actionButtonsContainer: {
    marginTop: 10,
  },
  toggleAllButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  clearButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clearAllButton: {
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    alignItems: 'center',
  },
  clearCompletedButton: {
    backgroundColor: '#ff9800',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
    alignItems: 'center',
  },
  historySection: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  clearHistoryButton: {
    color: '#f44336',
  },
  historyList: {
    maxHeight: 150,
  },
  historyItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  motivationContainer: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#eee',
  },
  motivationText: {
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#555',
    fontSize: 14,
  },
});

export default App;
