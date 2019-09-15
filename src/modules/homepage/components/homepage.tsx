import { HomepageCatalog } from 'modules/homepage/components/catalog/homepage-catalog';
import { HomepageHero } from 'modules/homepage/components/homepage-hero/homepage-hero';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

const ComingSoonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const ComingSoonIllo = styled.img`
  width: 640px;

  ${Styles.MediaQuery.sm} {
    width: 100%;
  }
`;

const ComingSoonHeader = styled.h1`
  color: ${Styles.Colors.textLightBlack};
`;

export class Homepage extends React.Component {
  public render() {
    if (true) {
      return (
        <ComingSoonContainer>
          <ComingSoonIllo
            alt="Coming Soon Illustration"
            src={require('assets/coming-soon/website-construction.png')}
          />
          <ComingSoonHeader>Coming Soon...</ComingSoonHeader>
        </ComingSoonContainer>
      );
    }

    return (
      <div>
        <HomepageHero />
        <HomepageCatalog />
      </div>
    );
  }
}
