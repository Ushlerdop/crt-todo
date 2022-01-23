import { createSlice } from "@reduxjs/toolkit";
import mockTasks from "../utils/tasks";

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: mockTasks,
  },
  reducers: {
    addTodo(state, action) {
      console.log(state);
      console.log(action);

      state.tasks.push(action.payload);
    },
    deleteTask(state, action) {
      console.log(state);
      console.log(action);
      state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
    },
    updateTask(state, action) {
      state.tasks = state.tasks.map(task => {
        if (task.id === action.payload.id) {
          return action.payload.updatedTask;
        }
        return task;
      });
    },
    isTaskPropertyToggle(state, action) {
      state.tasks = state.tasks.map(task => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            [action.payload.property]: !task[action.payload.property],
          }
        }
        return task;
      });
    },
  },
});

export const { addTodo, deleteTask, updateTask, isTaskPropertyToggle } = tasksSlice.actions;

export default tasksSlice.reducer;