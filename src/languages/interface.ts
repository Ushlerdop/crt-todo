export interface ILang {
  form: {
    title: string;
    note: string;
    addButton: string;
    updateButton: string;
  };
  tasksMods: {
    allTasks: string;
    activeTasks: string;
    importantTasks: string;
    doneTasks: string;
  };
  task: {
    edited: string;
  };
  languageToggleButton: string;
}