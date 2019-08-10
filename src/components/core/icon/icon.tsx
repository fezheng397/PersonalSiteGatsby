import React from 'react';
import styled from 'styled-components';

export interface IIconProps {
  icon: string;
}

export interface IIconState {}

export class Icon extends React.Component<IIconProps, {}> {
  public render() {
    const { icon } = this.props;
    return (
      <svg style={{ width: '50px', height: '50px' }}>
        <use xlinkHref={`#${icon}`} />
      </svg>
    );
  }
}
