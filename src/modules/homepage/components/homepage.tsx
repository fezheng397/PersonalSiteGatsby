import { Container } from 'components/core/container/container';
import { CatalogCard } from 'modules/homepage/components/catalog/catalog-card';
import { HomepageCatalog } from 'modules/homepage/components/catalog/homepage-catalog';
import { HomepageHero } from 'modules/homepage/components/homepage-hero/homepage-hero';
import React from 'react';
import styled from 'styled-components';

export class Homepage extends React.Component {
  public render() {
    return (
      <Container size="lg">
        <HomepageHero />
        <HomepageCatalog />
      </Container>
    );
  }
}
