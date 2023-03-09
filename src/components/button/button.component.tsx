import { ButtonHTMLAttributes, FC } from 'react';
import { BaseButton, GoogleSignIn, Inverted } from './button.style';

export enum BUTTON_TYPES {
  base = 'base',
  google = 'google-sign-in',
  inverted = 'inverted',
}

export const getButton = (buttonType = BUTTON_TYPES.base): typeof BaseButton =>
  ({
    [BUTTON_TYPES.base]: BaseButton,
    [BUTTON_TYPES.google]: GoogleSignIn,
    [BUTTON_TYPES.inverted]: Inverted,
  }[buttonType]);

type ButtonProps = {
  buttonType?: BUTTON_TYPES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
