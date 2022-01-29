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
    sameTitle: string;
    emptyInputs: string;
    maxLength: (maxTextInputLength: number, maxTextAreaLength: number) => string;
  }
  languageToggleButton: string;
  emptyTaskListMessage: string;
}