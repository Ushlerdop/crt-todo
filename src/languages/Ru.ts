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
    sameTitle: `У вас уже есть задача с таким заголовком`,
    emptyInputs: 'Введите что-нибудь в заголовок и описание задачи',
    maxLength: (maxTextInputLength, maxTextAreaLength) => `Вы можете ввести не более ${maxTextInputLength} символов в заголовок и не более ${maxTextAreaLength} в описание`,
  },
  languageToggleButton: 'Switch to English',
  emptyTaskListMessage: 'В этой категории нет задач',
}

export default Ru