import { ITaskObject } from "../../../../store/interface";

export interface IUpdateFormProps extends ITaskObject{
  active: boolean,
  setModalActive: (value: boolean) => void,
}