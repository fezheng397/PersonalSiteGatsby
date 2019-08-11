import { Container } from 'components/core/container/container';
import { StyledLink } from 'components/core/link/link-styles';
import { Link } from 'gatsby';
import { CatalogCard } from 'modules/homepage/components/catalog/catalog-card';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

const HomepageCatalogComponent = styled.div`
  align-items: center;
  padding: ${Styles.Spaces.section8} 0;
`;

const CatalogHeader = styled.div`
  text-align: center;
  margin-bottom: ${Styles.Spaces.section4};
`;

const CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

export class HomepageCatalog extends React.Component {
  public render() {
    return (
      <HomepageCatalogComponent>
        <CatalogHeader>
          <h1>Check out what I do!</h1>
        </CatalogHeader>

        <CardContainer>
          <StyledLink to="/engineering">
            <CatalogCard
              imageDesc="Engineering Image"
              imageSrc={require('assets/categories/softeng/active-stock.jpg')}
              header="Engineering"
              subHeader="Development"
            />
          </StyledLink>
          <StyledLink to="/music">
            <CatalogCard
              imageDesc="Engineering Image"
              imageSrc={require('assets/categories/music/active-stock.jpg')}
              header="Music"
              subHeader="Development"
            />
          </StyledLink>
        </CardContainer>

        <CardContainer>
          <StyledLink to="/blog">
            <CatalogCard
              imageDesc="Engineering Image"
              imageSrc={require('assets/categories/blog/active-stock.jpg')}
              header="Blog"
              subHeader="Development"
            />
          </StyledLink>
          <StyledLink to="/design">
            <CatalogCard
              imageDesc="Engineering Image"
              imageSrc={require('assets/categories/design/active-stock.jpg')}
              header="Design"
              subHeader="Development"
            />
          </StyledLink>
        </CardContainer>
      </HomepageCatalogComponent>
    );
  }
}
