import { autorun, makeAutoObservable, toJS } from 'mobx';
import mockTasks from '../utils/tasks';

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  tasks = mockTasks;

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
}

export const store = new Store();

autorun(() => {
  console.log(toJS(store.tasks.map(task => task.isImportant)))
})