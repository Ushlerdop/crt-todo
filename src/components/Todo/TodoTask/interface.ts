import { ITaskObject } from "../../../store/interface";

export interface ITaskModalProps extends ITaskObject {
  active: boolean,
  setModalActive: (value: boolean) => void,
  setEditModalActive: (value: boolean) => void,
}