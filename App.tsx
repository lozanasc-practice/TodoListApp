import { Text } from 'react-native';

import Layout from './components/Layout';
import { useInitTodoList } from './hooks/useTaskInit';

export default function App() {

  // ? Basic To-do functionalities
  const { Todo, newTask, removeTask } = useInitTodoList();

  return (
    <Layout>
    </Layout>
  );
}
 