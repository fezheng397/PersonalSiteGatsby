import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface ICardProps {
  className?: string;

  /**
   * Variants
   */
  catalog?: boolean;
}

export interface ICardState {}

const CardComponent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${Styles.Sizes.radius5};

  cursor: pointer;
`;

export class Card extends React.Component<ICardProps, ICardState> {
  public render() {
    const { children, className } = this.props;
    return <CardComponent className={className}>{children}</CardComponent>;
  }
}
