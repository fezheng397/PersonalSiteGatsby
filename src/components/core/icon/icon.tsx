import React from 'react';
import styled, { keyframes } from 'styled-components';

export interface IIconProps {
  className?: string;
  fill?: string;
  icon?: string;
  width?: number;
  height?: number;
}

export interface IIconState {}

const IconComponent = styled.svg`
  width: ${(props: IIconProps) => props.width}px;
  height: ${(props: IIconProps) => props.height}px;
  fill: ${(props: IIconProps) => props.fill};
`;

export class Icon extends React.Component<IIconProps, {}> {
  public render() {
    const { className, icon } = this.props;
    return (
      <IconComponent {...this.props} className={className}>
        <use xlinkHref={`#${icon}`} />
      </IconComponent>
    );
  }
}
