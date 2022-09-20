import * as Yup from 'yup';
import { errorMessages } from './errorMessages';

const {
  required,
  titleMinLength,
  titleMaxLength,
  descriptionMinLength,
  descriptionMaxlength
} = errorMessages;

export const formSchema = Yup.object().shape({
  title: Yup.string()
    .required(required)
    .min(3, titleMinLength)
    .max(30, titleMaxLength),
  description: Yup.string()
    .required(required)
    .min(10, descriptionMinLength)
    .max(100, descriptionMaxlength),
  status: Yup.number()
    .required(required),
  priority: Yup.number()
    .required(required),
});
