import { RefKeys } from '../types/interfaces';
import { validationRules } from './validationRules';
import { FormErrors } from '../types/interfaces';

export const validateField = (
  fieldName: RefKeys,
  refs: ReturnType<typeof import('./refs').useFormRefs>,
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>,
) => {
  let value: string | File | null = refs[fieldName].current?.value || '';

  if (fieldName === 'picture') {
    value = refs[fieldName].current?.files?.[0] || null;
  }

  const error = validationRules[fieldName](
    value,
    refs.password2.current?.value || '',
  );

  setErrors((prevErrors) => ({
    ...prevErrors,
    [fieldName]: error || '',
  }));
};
