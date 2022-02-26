import { useState } from 'react';

export type TodoListProps = {
  taskId: number | undefined,
  taskName: string | undefined,
  taskStatus: boolean | undefined,
}

export function useInitTodoList(){
  
  const [ Todo, setTodo ] = useState<TodoListProps[]>([])
  
  // Appends a new object to the TodoList as a mewly created Task
  const newTask = ({taskId, taskName, taskStatus}:TodoListProps) => {
    setTodo([...Todo, {taskId, taskName, taskStatus}])
    return true
  }

  // Removes the task
  const removeTask = ({ taskId }: TodoListProps) => {
    // Removes the Task by taskId
    const updatedTodo = Todo.filter(Task => Task.taskId !== taskId)
    // Updates the current TodoList
    setTodo(updatedTodo)
  }

  return {
    Todo,
    removeTask,
    newTask
  }
}