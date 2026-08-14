import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type Todo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

const App = () => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [text, setText] = useState('');

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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Todo App</Text>

        {/* Input */}
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

        {/* Todo List */}
        <FlatList
          data={todo}
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
            <Text style={styles.emptyText}>No todos added yet</Text>
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
