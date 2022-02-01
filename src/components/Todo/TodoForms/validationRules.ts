import { ILang } from "../../../languages/interface";

const formValidationRules = (language: ILang) => {
  const minTextInputLength: number = 1;
  const minTextAreaLength: number = 1;
  const maxTextInputLength: number = 500;
  const maxTextAreaLength: number = 3000;
  return ({title: {
    required: language.errorMessages.form.emptyField,
      minLength: {
      value: minTextInputLength,
        message: language.errorMessages.form.minTitleLength(minTextInputLength),
    },
    maxLength: {
      value: maxTextInputLength,
        message: language.errorMessages.form.maxTitleLength(maxTextInputLength),
    },
  },
  description: {
    required: language.errorMessages.form.emptyField,
      minLength: {
      value: minTextAreaLength,
        message: language.errorMessages.form.minDescriptionLength(minTextAreaLength)
    },
    maxLength: {
      value: maxTextAreaLength,
        message: language.errorMessages.form.maxDescriptionLength(maxTextAreaLength),
    },
  }})
}

export default formValidationRules