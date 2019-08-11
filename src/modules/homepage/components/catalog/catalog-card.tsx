import { Card } from 'components/core/card/card';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface ICatalogCardProps {
  className?: string;
  imageDesc: string;
  imageSrc: string;
  header: string;
  subHeader: string;
}

const CatalogCardComponent = styled(Card)`
  height: 300px;
  width: 300px;
  box-shadow: ${Styles.Shadows.standard};
  margin: ${Styles.Spaces.spacing16} ${Styles.Spaces.spacing4};

  &:hover,
  &:focus {
    box-shadow: ${Styles.Shadows.standardHover};
  }
`;

const CardImage = styled.img`
  height: 172px;
  width: 100%;
  border-radius: ${Styles.Sizes.radius5} ${Styles.Sizes.radius5} 0 0;
`;

const CardDescription = styled.div`
  padding: ${Styles.Spaces.spacing4} 0 0 ${Styles.Spaces.spacing6};
`;

export class CatalogCard extends React.Component<ICatalogCardProps, {}> {
  public render() {
    const { className, imageDesc, imageSrc, header, subHeader } = this.props;
    return (
      <CatalogCardComponent className={className}>
        <CardImage alt={imageDesc} src={imageSrc} />
        <CardDescription>
          <h2>{header}</h2>
          <h4>{subHeader}</h4>
        </CardDescription>
      </CatalogCardComponent>
    );
  }
}
