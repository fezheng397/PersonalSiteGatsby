import React from 'react';
import styled from 'styled-components';

export interface ICardProps {
  className?: string;
  imageDesc: string;
  imageSrc: string;
  header: string;
  subHeader: string;
}

export interface ICardState {}

const CardComponent = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(60, 64, 67, 0.3),
    0 2px 3px 2px rgba(60, 64, 67, 0.15);
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0 2px 3px rgba(60, 64, 67, 0.3),
      0 3px 6px 3px rgba(60, 64, 67, 0.15);
  }
`;

const CardImage = styled.img`
  height: 172px;
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

const CardDescription = styled.div`
  padding: 0.5em 0 0 1em;
`;

export class Card extends React.Component<ICardProps, ICardState> {
  public render() {
    const { className, imageDesc, imageSrc, header, subHeader } = this.props;
    return (
      <CardComponent className={className}>
        <CardImage alt={imageDesc} src={imageSrc} />
        <CardDescription>
          <h2>{header}</h2>
          <h4>{subHeader}</h4>
        </CardDescription>
      </CardComponent>
    );
  }
}
