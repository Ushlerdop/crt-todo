import { autorun, configure, flow, makeAutoObservable, toJS } from 'mobx';
import sleep from '../utils/sleep';
import mockTasks from '../utils/tasks';

class Store {
  tasks = [];
  currentTasks = [];
  filterStatusesList = {
    ALL: 'all',
    ACTIVE: 'active',
    IMPORTANT: 'important',
    DONE: 'done',
  }
  currentFilterStatus = this.filterStatusesList.ALL;
  isAppLoading = true;
  fetchingError = null;

  constructor() {
    makeAutoObservable(this);
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  updateTask = (id, updatedTask) => {
    this.tasks = this.tasks.map(task => {
      if (task.id === id) {
        return updatedTask;
      }
      return task;
    });
  }

  isTaskPropertyToggle = (id, property) => {
    this.tasks = this.tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          [property]: !task[property],
        }
      }
      return task;
    });
  }

  setIsAppLoading = status => {
    this.isAppLoading = status
  }

  setFetchingError = error => {
    this.fetchingError = error
  }

  setTasks = TasksArray => {
    this.tasks = TasksArray
  }

  fakeFetch = flow(function*(ms) {
    this.setIsAppLoading(true);
    try {
      yield sleep(ms);
      this.setIsAppLoading(true);
      this.setFetchingError(null);
    } catch(e) {
      this.setIsAppLoading(false);
      this.setFetchingError(e.message);
    } finally {
      this.setIsAppLoading(false);
      this.setFetchingError(null);
      this.setTasks(mockTasks);
    }
  })

  setCurrentFilterStatus = status => {
    this.currentFilterStatus = status
  }

  get filteredCurrentTasks() {
    switch (this.currentFilterStatus) {
      case 'all':
        return store.tasks;
        break;
      case 'active':
        return store.tasks.filter(item => item.isDone === false);
        break;
      case 'important':
        return store.tasks.filter(item => item.isImportant === true);
        break;
      case 'done':
        return store.tasks.filter(item => item.isDone === true);
        break;
      default:
        return store.tasks;
        break;
    }
  }
}

export const store = new Store();