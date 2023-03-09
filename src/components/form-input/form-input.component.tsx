import { FC, InputHTMLAttributes } from 'react';
import { FormInputStyle, FormInputLabel, Group } from './form-input.style';

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormInputStyle {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === 'string' &&
              otherProps.value.length
          )}
          htmlFor={otherProps.id}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
