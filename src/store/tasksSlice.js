import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sleep from "../utils/sleep";
import mockTasks from "../utils/tasks";

export const fakeFetch = createAsyncThunk(
  'tasks/fakeFetch',
  async function(ms, token = {}) {
    const response = await sleep(ms, token);
    return response;
  }
)

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    isAppLoading: null,
    fetchingError: null,
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
  extraReducers: {
    [fakeFetch.pending]: (state) => {
      state.isAppLoading = true;
      state.fetchingError = null;
    },
    [fakeFetch.fulfilled]: (state) => {
      state.tasks = mockTasks;
      state.isAppLoading = false;
      state.fetchingError = null;
    },
    [fakeFetch.rejected]: (state) => {
    },
  }
});

export const { addTodo, deleteTask, updateTask, isTaskPropertyToggle } = tasksSlice.actions;

export default tasksSlice.reducer;