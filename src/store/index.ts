import { ITaskObject, IFilterStatusList } from './interface';
import { autorun, configure, flow, makeAutoObservable, toJS } from 'mobx';
import sleep from '../utils/sleep';
import mockTasks from '../utils/tasks';

class Store {
  tasks: ITaskObject[] = [];
  currentTasks: ITaskObject[] = [];
  filterStatusesList: IFilterStatusList = {
    ALL: 'all',
    ACTIVE: 'active',
    IMPORTANT: 'important',
    DONE: 'done',
  }
  currentFilterStatus: string = this.filterStatusesList.ALL;
  isAppLoading: boolean = true;
  fetchingError: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  addTask(task: ITaskObject): void {
    this.tasks.push(task);
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  updateTask = (id: number, updatedTask: ITaskObject): void => {
    this.tasks = this.tasks.map(task => {
      if (task.id === id) {
        return updatedTask;
      }
      return task;
    });
  }

  isTaskPropertyToggle = (id: number, property: string): void => {
    this.tasks = this.tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          [property as keyof ITaskObject]: !task[property as keyof ITaskObject],
        }
      }
      return task;
    });
  }

  setIsAppLoading = (status: boolean): void => {
    this.isAppLoading = status
  }

  setFetchingError = (error: string | null): void => {
    this.fetchingError = error
  }

  setTasks = (TasksArray: ITaskObject[]): void => {
    this.tasks = TasksArray
  }

  fakeFetch = flow(function*(this: any, ms: number): Generator<Promise<any>, void, any> {
    this.setIsAppLoading(true);
    try {
      yield sleep(ms);
      this.setIsAppLoading(true);
      this.setFetchingError(null);
    } catch(e: any) {
      this.setIsAppLoading(false);
      this.setFetchingError(e.message);
    } finally {
      this.setIsAppLoading(false);
      this.setFetchingError(null);
      this.setTasks(mockTasks);
    }
  })

  setCurrentFilterStatus = (status: string): void => {
    this.currentFilterStatus = status
  }

  get filteredCurrentTasks(): ITaskObject[] {
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