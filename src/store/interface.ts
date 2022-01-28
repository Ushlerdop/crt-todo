export interface ITaskObject {
  title: string;
  description: string;
  isDone: boolean;
  isImportant: boolean;
  editedDate: string;
  id: number;
}

export interface IFilterStatusList {  
  ALL: string;
  ACTIVE: string;
  IMPORTANT: string;
  DONE: string;
}