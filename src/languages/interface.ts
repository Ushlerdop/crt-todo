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
  errorMessages: {
    form: {
      sameTitle: string;
      maxTitleLength: (maxLength: number) => string;
      maxDescriptionLength: (maxLength: number) => string;
      minTitleLength: (minLength: number) => string;
      minDescriptionLength: (minLength: number) => string;
      emptyField: string;
    }
  }
  languageToggleButton: string;
  emptyTaskListMessage: string;
}