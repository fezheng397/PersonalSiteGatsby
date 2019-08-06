import React from 'react';
import styled from 'styled-components';
import 'styles/pages/homepage.scss';

const HeroBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const HeroHeader = styled.h1`
  font-size: 2.5rem;
`;

const SubHeader = styled.h3`
  color: #aaaaaa;
`;

const Titles = styled.div`
  margin-top: 2rem;
`;

export class Homepage extends React.Component {
  public render() {
    return (
      <div className="container-lg homepage-hero">
        <HeroBanner>
          <div className="headshot">
            <img src={require('assets/pro-pic-min.png')} />
          </div>
          <SubHeader>Hey, I'm</SubHeader>
          <HeroHeader>Felix Zheng</HeroHeader>
          <Titles>
            <SubHeader>Software Engineer</SubHeader>
            <SubHeader>Music Producer</SubHeader>
            <SubHeader>Entrepreneur</SubHeader>
          </Titles>
        </HeroBanner>
      </div>
    );
  }
}
