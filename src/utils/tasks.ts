import { ITaskObject } from "../store/interface";

const mockTasks: ITaskObject[] = [
    {
      title: 'Pick up children from Granny',
      description: `Don't forget about Harry...at least for today`,
      isDone: false,
      isImportant: true,
      editedDate: new Date().toLocaleDateString(),
      id: 12313,
    },
    {
      title: 'Breakfast',
      description: 'As i remember, she asked for tea and boiled eggs',
      isDone: false,
      isImportant: false,
      editedDate: new Date().toLocaleDateString(),
      id: 2342,
    },
    {
      title: 'Fix the coffee machine',
      description: `It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken roken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken roken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken roken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken `,
      isDone: true,
      isImportant: false,
      editedDate: new Date().toLocaleDateString(),
      id: 56756,
    },
];

export default mockTasks