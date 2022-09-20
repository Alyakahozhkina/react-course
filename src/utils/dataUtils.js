import { v4 as uuidv4 } from 'uuid';

export const initialData = [
  {
    id: uuidv4(),
    title: 'Do something',
    description: 'Lorem ipsum Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor',
    status: 1,
    priority: 2,
    creationDate: '11-08-2022 13:04:12',
    updateDate: '28-08-2022 10:31:43',
  },
  {
    id: uuidv4(),
    title: 'Do something',
    description: 'Lorem ipsum dolor',
    status: 2,
    priority: 3,
    creationDate: '11-08-2022 11:04:12',
    updateDate: '28-08-2022 17:31:43',
  },
  {
    id: uuidv4(),
    title: 'Do something',
    description: 'Lorem ipsum Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor',
    status: 3,
    priority: 4,
    creationDate: '11-08-2022 18:04:12',
    updateDate: '28-08-2022 13:31:43',
  },
  {
    id: uuidv4(),
    title: 'Do something',
    description: 'Lorem ipsum Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor',
    status: 1,
    priority: 5,
    creationDate: '10-08-2022 18:04:12',
    updateDate: '27-08-2022 13:31:43',
  },
  {
    id: uuidv4(),
    title: 'Do something',
    description: 'Lorem ipsum dolor',
    status: 2,
    priority: 1,
    creationDate: '12-08-2022 18:04:12',
    updateDate: '29-08-2022 13:31:43',
  },
];

export const options = {
  status: [
    {
      key: 1,
      value: 'Open',
    },
    {
      key: 2,
      value: 'In Progress',
    },
    {
      key: 3,
      value: 'Resolved',
    },
  ],
  priority: [
    {
      key: 1,
      value: 'Low',
    },
    {
      key: 2,
      value: 'Normal',
    },
    {
      key: 3,
      value: 'High',
    },
    {
      key: 4,
      value: 'Urgent',
    },
    {
      key: 5,
      value: 'Immediate',
    },
  ],
};
