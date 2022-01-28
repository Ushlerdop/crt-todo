export interface IUpdateFormProps {
  active: boolean,
  description: string,
  editedDate: string,
  id: number,
  isDone: boolean,
  isImportant: boolean,
  setModalActive: (value: boolean) => React.Dispatch<React.SetStateAction<boolean>>,
  title: string,
}