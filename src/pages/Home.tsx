import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    setTasks([...tasks, {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }])
  }

  function handleMarkTaskAsDone(id: number) {
    setTasks(tasks.map(item => item.id === id ? { ...item, done: !item.done } : item))
  }

  function handleRemoveTask(id: number) {
    setTasks(tasks.filter(item => item.id !== id))
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}