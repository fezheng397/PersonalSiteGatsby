import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IButtonProps {
  className?: string;
  onClick?: () => void;
  placeholder?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  type?: 'primary' | 'secondary';
}

export interface IButtonState {}

const sizes = {
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: '',
};

const ButtonComponent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;
  border: none;
  font-family: ${Styles.Fonts.nunitoRegular};
  font-weight: ${Styles.Fonts.weightStd};
  margin: none;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export class Button extends React.Component<IButtonProps, IButtonState> {
  public static defaultProps = {
    size: 'md',
    type: 'primary',
  };

  public render() {
    const { children, className, onClick, placeholder } = this.props;
    return (
      <ButtonComponent className={className} onClick={onClick}>
        {children ? children : placeholder}
      </ButtonComponent>
    );
  }
}
