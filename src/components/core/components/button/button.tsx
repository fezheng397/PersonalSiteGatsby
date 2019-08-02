import React from 'react';

export interface IButtonProps {
  className: string;
  placeholder: string;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  type: 'primary' | 'secondary';
}

export interface IButtonState {}

export class Button extends React.Component<IButtonProps, IButtonState> {
  public static defaultProps = {
    size: 'md',
    type: 'primary',
  };

  public render() {
    const { className, placeholder } = this.props;
    return (
      <div className={`${className}`}>
        <button>{placeholder}</button>
      </div>
    );
  }
}
