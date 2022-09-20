import dayjs from 'dayjs';
import { v4 as uuidv4} from 'uuid';

const dateFormat = 'DD-MM-YYYY HH:mm:ss';

export const getToDoBody = (res, id) => {
  return {
    ...res,
    id: id ? id : uuidv4(),
    creationDate: id ? res.creationDate : dayjs().format(dateFormat),
    updateDate: dayjs().format(dateFormat),
  }
};
