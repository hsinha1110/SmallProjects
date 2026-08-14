import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Todo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

const App = () => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [text, setText] = useState('');
  const [status, setStatus] = useState('all');
  const [search, setSearch] = useState('');

  // Add Todo
  const addTodo = () => {
    if (!text.trim()) {
      return;
    }

    const newTodo: Todo = {
      id: Date.now().toString(),
      title: text.trim(),
      isCompleted: false,
    };

    setTodo(prev => [...prev, newTodo]);
    setText('');
  };

  // Delete Todo
  const deleteTodo = (id: string) => {
    setTodo(prev => prev.filter(item => item.id !== id));
  };

  // Complete / Uncomplete Todo
  const isTodoCompleted = (id: string) => {
    setTodo(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              isCompleted: !item.isCompleted,
            }
          : item,
      ),
    );
  };

  // Status Filter
  const filteredTodos =
    status === 'pending'
      ? todo.filter(item => !item.isCompleted)
      : status === 'completed'
      ? todo.filter(item => item.isCompleted)
      : todo;

  // Search Filter
  const searchedTodos = filteredTodos.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Todo App</Text>

        {/* Add Todo */}
        <View style={styles.inputContainer}>
          <TextInput
            value={text}
            onChangeText={setText}
            style={styles.input}
            placeholder="Enter your todo"
            placeholderTextColor="#999"
          />

          <TouchableOpacity onPress={addTodo} style={styles.addButton}>
            <Text style={styles.addText}>+ Add</Text>
          </TouchableOpacity>
        </View>

        {/* Status Filter */}
        <View style={styles.statusContainer}>
          <TouchableOpacity
            onPress={() => setStatus('all')}
            style={[
              styles.statusButton,
              status === 'all' && styles.activeStatusButton,
            ]}
          >
            <Text
              style={[
                styles.statusText,
                status === 'all' && styles.activeStatusText,
              ]}
            >
              All
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setStatus('pending')}
            style={[
              styles.statusButton,
              status === 'pending' && styles.activeStatusButton,
            ]}
          >
            <Text
              style={[
                styles.statusText,
                status === 'pending' && styles.activeStatusText,
              ]}
            >
              Pending
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setStatus('completed')}
            style={[
              styles.statusButton,
              status === 'completed' && styles.activeStatusButton,
            ]}
          >
            <Text
              style={[
                styles.statusText,
                status === 'completed' && styles.activeStatusText,
              ]}
            >
              Completed
            </Text>
          </TouchableOpacity>
        </View>

        {/* Search */}
        <TextInput
          value={search}
          onChangeText={setSearch}
          style={styles.searchContainer}
          placeholder="Search todo..."
          placeholderTextColor="#999"
        />

        {/* Todo List */}
        <FlatList
          data={searchedTodos}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.todoRow}>
              {/* Checkbox */}
              <TouchableOpacity
                onPress={() => isTodoCompleted(item.id)}
                style={[
                  styles.checkbox,
                  item.isCompleted && styles.checkboxCompleted,
                ]}
              >
                {item.isCompleted && <Text style={styles.checkmark}>✓</Text>}
              </TouchableOpacity>

              {/* Todo Title */}
              <Text
                style={[
                  styles.todoText,
                  item.isCompleted && styles.completedText,
                ]}
              >
                {item.title}
              </Text>

              {/* Delete */}
              <TouchableOpacity
                onPress={() => deleteTodo(item.id)}
                style={styles.deleteButton}
              >
                <Text style={styles.deleteText}>- Delete</Text>
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No todos found</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: '600',
    marginTop: 20,
    color: '#111',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#222',
    marginTop: 20,
  },

  input: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 16,
    color: '#222',
  },

  addButton: {
    backgroundColor: '#B8DDEC',
    paddingHorizontal: 18,
    paddingVertical: 15,
    marginRight: 10,
  },

  addText: {
    fontSize: 17,
    color: '#111',
  },

  statusContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },

  statusButton: {
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 18,
    paddingVertical: 12,
    marginRight: 10,
    borderRadius: 6,
  },

  activeStatusButton: {
    backgroundColor: '#B8DDEC',
  },

  statusText: {
    color: '#333',
  },

  activeStatusText: {
    fontWeight: '700',
    color: '#111',
  },

  searchContainer: {
    borderWidth: 1,
    borderColor: '#222',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 10,
    fontSize: 16,
    color: '#222',
  },

  todoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },

  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1.5,
    borderColor: '#222',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkboxCompleted: {
    backgroundColor: '#222',
  },

  checkmark: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  todoText: {
    flex: 1,
    marginHorizontal: 15,
    fontSize: 18,
    color: '#111',
  },

  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },

  deleteButton: {
    backgroundColor: '#FF0000',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  deleteText: {
    color: '#FFFFFF',
    fontSize: 16,
  },

  emptyText: {
    textAlign: 'center',
    marginTop: 30,
    color: '#888',
    fontSize: 16,
  },
});

export default App;
