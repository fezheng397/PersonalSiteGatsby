import React from 'react';
import styled, { keyframes } from 'styled-components';

export interface IIconProps {
  className?: string;
  icon: string;
}

export interface IIconState {}

const IconComponent = styled.svg`
  width: 60px;
  height: 60px;
`;

export class Icon extends React.Component<IIconProps, {}> {
  public render() {
    const { className, icon } = this.props;
    return (
      <IconComponent className={className}>
        <use xlinkHref={`#${icon}`} />
      </IconComponent>
    );
  }
}
