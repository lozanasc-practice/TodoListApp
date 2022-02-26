import { useState } from 'react';
import { StyleSheet } from 'react-native';

import { Text, View, TextInput } from '../components/Themed';
import { TodoItem } from '../components/TodoItem';
import { RootTabScreenProps } from '../types';
import { useInitTodoList } from '../hooks/useInitTodoList';

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {

  const { Todo, newTask, removeTask } = useInitTodoList();
  const [ taskCount, setTaskCount ] = useState(0);
  const [ taskName, setTaskName ] = useState('');

  return (
    <View style={styles.baseContainer}>
     <View style={styles.inputContainer}>
      <Text style={styles.inputHeading}>
        Hey, what's the agenda for today? 🌤️
      </Text>
      <TextInput 
        style={styles.todoInput}
        onChangeText={task => setTaskName(task)}
        onSubmitEditing={() => {
          // Increments the taskCount
          setTaskCount(taskCount + 1);
          // Pushes new Task on the Todo array
          newTask({
            // Will help us keep track of the tasks and be able to use it as ref to delete and edit a task
            taskId: taskCount,
            taskName: taskName,
            taskStatus: false,
          })
          // Logs the new task pushed
          console.info('New task made:', {
            taskId: taskCount,
            taskName: taskName,
            taskStatus: false,
          })
        }}
        placeholder="Let's do something great today!"
      />
     </View>
     <View style={styles.todoContainer}>
        {
          Todo.map(
            Task => 
            <TodoItem 
              key={Task.taskId} 
              taskId={Task.taskId} 
              taskName={Task.taskName} 
              taskStatus={Task.taskStatus} 
              />
            )
        }
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 12,
    marginHorizontal: 12,
    borderRadius: 20,
    backgroundColor: 'lightgray',
    paddingVertical: 12,
    paddingHorizontal: 12,
    justifyContent: 'space-evenly',  
  },
  inputHeading: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  todoInput: {
    height: 40,
    marginVertical: 16,
    marginHorizontal: 5,
    borderRadius: 12,
    padding: 12,
  },
  todoContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginVertical: 12,
    marginHorizontal: 12,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: 'gray',
  }
});
