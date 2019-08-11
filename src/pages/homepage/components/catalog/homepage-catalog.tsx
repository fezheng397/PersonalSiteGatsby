import { CatalogCard } from 'pages/homepage/components/catalog/catalog-card';
import React from 'react';
import styled from 'styled-components';
import { Spaces } from 'vars/spaces';

const HomepageCatalogComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  margin: ${Spaces.section8} 0;
`;

const CardContainer = styled.div`
  margin-bottom: ${Spaces.spacing8};
`;

export class HomepageCatalog extends React.Component {
  public render() {
    return (
      <HomepageCatalogComponent>
        <CardContainer>
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
        </CardContainer>

        <CardContainer>
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
        </CardContainer>
      </HomepageCatalogComponent>
    );
  }
}
