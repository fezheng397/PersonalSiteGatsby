import { Card } from 'components/core/card/card';
import React from 'react';
import styled from 'styled-components';
import { HomepageHero } from './homepage-hero/homepage-hero';

const HomepageCatalog = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

const CatalogCard = styled(Card)`
  width: 50%;
`;

export class Homepage extends React.Component {
  public render() {
    return (
      <div className="container-lg">
        <HomepageHero />
        <HomepageCatalog>
          <CatalogCard
            imageDesc="Engineering Image"
            imageSrc={require('assets/categories/softeng/active-stock.jpg')}
            header="Engineering"
            subHeader="Development"
          />
          <CatalogCard
            imageDesc="Engineering Image"
            imageSrc={require('assets/categories/softeng/active-stock.jpg')}
            header="Engineering"
            subHeader="Development"
          />
          <CatalogCard
            imageDesc="Engineering Image"
            imageSrc={require('assets/categories/softeng/active-stock.jpg')}
            header="Engineering"
            subHeader="Development"
          />
          <CatalogCard
            imageDesc="Engineering Image"
            imageSrc={require('assets/categories/softeng/active-stock.jpg')}
            header="Engineering"
            subHeader="Development"
          />
        </HomepageCatalog>
      </div>
    );
  }
}
