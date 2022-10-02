import * as Yup from 'yup';
import { errorMessages } from './errorMessages';

const {
  required,
  titleMinLength,
  titleMaxLength,
  descriptionMinLength,
  descriptionMaxlength,
  weightTest,
} = errorMessages;

export const formSchema = Yup.object().shape({
  title: Yup.string()
    .required(required)
    .min(3, titleMinLength)
    .max(30, titleMaxLength),
  description: Yup.string()
    .required(required)
    .min(5, descriptionMinLength)
    .max(1000, descriptionMaxlength),
  weight: Yup.string()
    .required(required)
    .matches(/^\d+(\.?\d+)?$/, weightTest),
  category: Yup.string()
});
