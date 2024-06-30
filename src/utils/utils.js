import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from './useLocalStorage';
import { showSuccessNotification, showWarningNotification } from './notify';


function useTasks() {
  const {
    item: tasks,
    saveItems: saveTasks,
    loading,
    error,
    synchronizeItem: synchronizeTasks,
  } = useLocalStorage("TASKS", []);


  const editTask = (id, newText) => {    
    
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex >= 0) {      
      const newTasks = [...tasks];
      newTasks[taskIndex].text = newText;
      saveTasks(newTasks);      
      showSuccessNotification('Tarea editada correctamente');      
    }
  };
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    saveTasks(updatedTasks);
    showWarningNotification('Tarea eliminada correctamente');
    return updatedTasks;
  };

  

  const addSubtask = (id, subtaskText) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex >= 0) {
      const newSubtask = {
        id: uuidv4(),
        text: subtaskText,
      };
      const updatedTask = {
        ...tasks[taskIndex],
        subtasks: tasks[taskIndex].subtasks
          ? [...tasks[taskIndex].subtasks, newSubtask]
          : [newSubtask]
      };
      const newTasks = [
        ...tasks.slice(0, taskIndex),
        updatedTask,
        ...tasks.slice(taskIndex + 1)
      ];
      saveTasks(newTasks);
      showSuccessNotification('Subtarea agregada correctamente');

    } else {
      console.error(`No se encontró la tarea con ID: ${taskId}`);
    }
  };

  const getSubtasks = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    if (taskIndex >= 0) {
      return tasks[taskIndex].subtasks || [];
    } else {
      console.error(`No se encontró la tarea con ID: ${taskId}`);
      return [];
    }
  };
  
  const deleteSubtask = (subtaskId, task) => {
    const updatedSubtasks = task.subtasks.filter((subtask) => subtask.id !== subtaskId);
    const updatedTask = {
      ...task,
      subtasks: updatedSubtasks
    };
    saveTasks([...tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t))]);
    showWarningNotification('Subtarea eliminada correctamente');
    return updatedTask;
 
  };

  const addTask = (text) => {
    const newTask = [...tasks];
    newTask.push({
      text,
      id: uuidv4(),
      subtasks: []
    });
    saveTasks(newTask);
    showSuccessNotification(`Tarea ${text.title} agregada correctamente`);
  };

  const state = {
    tasks,
    error,
    loading,
  };

  const stateUpdaters = {
    deleteTask,
    addTask,
    editTask,
    addSubtask,
    synchronizeTasks,
    getSubtasks,
    deleteSubtask
  };

  return {
    state,
    stateUpdaters,
  };
}


export { useTasks };