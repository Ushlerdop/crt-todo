import { ILang } from "./interface"

const En: ILang = {
  form: {
      title: 'Title',
      note: 'Note',
      addButton: 'Add',
      updateButton: 'Update',
  },
  tasksMods: {
      allTasks: 'All',
      activeTasks: 'Active',
      importantTasks: 'Important',
      doneTasks: 'Done',
  },
  task: {
      edited: 'Edited'
  },
  errorMessages: {
    sameTitle: `You already have a task with this Title`,
    emptyInputs: 'You have to text something in Title and Description',
    maxLength: (maxTextInputLength, maxTextAreaLength) => `You can write no more than ${maxTextInputLength} characters in Title and ${maxTextAreaLength} in Description sections`,
  },
  languageToggleButton: 'Изменить на Русский',
  emptyTaskListMessage: 'There are no tasks in this category',
}

export default En