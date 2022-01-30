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
    form: {   
      sameTitle: `You already have a task with this Title`,
      maxTitleLength: (maxLength) => `You can write no more than ${maxLength} characters to Title`,
      maxDescriptionLength: (maxLength) => `You can write no more than ${maxLength} characters to Description`,
      minTitleLength: (minLength) => `You have to enter at least ${minLength} characters to title`,
      minDescriptionLength: (minLength) => `You have to enter at least ${minLength} characters to description`,
      emptyField: 'You have to text something here',
      commonError: 'Something went wrong',
    }
  },
  languageToggleButton: 'Изменить на Русский',
  emptyTaskListMessage: 'There are no tasks in this category',
}

export default En