import { ILang } from "./interface"

const Ru: ILang = {
  form: {
      title: 'Заголовок',
      note: 'Описание',
      addButton: 'Добавить',
      updateButton: 'Изменить',
  },
  tasksMods: {
      allTasks: 'Все',
      activeTasks: 'Текущие',
      importantTasks: 'Важные',
      doneTasks: 'Сделано',
  },
  task: {
      edited: 'Изменено'
  },
  errorMessages: {
    form: {
      sameTitle: `У вас уже есть задача с таким заголовком`,
      maxTitleLength: (maxLength) => `Вы можете ввести не более ${maxLength} символов в заголовок`,
      maxDescriptionLength: (maxLength) => `Вы можете ввести не более ${maxLength} символов в описание`,
      minTitleLength: (minLength) => `Нужно ввести как минимум ${minLength} символов в заголовок`,
      minDescriptionLength: (minLength) => `Нужно ввести как минимум ${minLength} символов в описание`,      
      emptyField: 'Поле не может быть пустым',
      commonError: 'Что-то пошло не так',
    }
  },
  languageToggleButton: 'Switch to English',
  emptyTaskListMessage: 'В этой категории нет задач',
}

export default Ru