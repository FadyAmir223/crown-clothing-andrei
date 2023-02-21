import { FormInputStyle, FormInputLabel, Group } from './form-input.style';

const FormInput = ({ label, inputOpt }) => {
  return (
    <Group>
      <FormInputStyle {...inputOpt} />
      {label && (
        <FormInputLabel shrink={inputOpt.value.length} htmlFor={inputOpt.id}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
