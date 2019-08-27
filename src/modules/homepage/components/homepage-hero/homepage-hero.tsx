import { HeroHeader, SubHeader } from 'components/core/headers/headers';
import { IconProvider } from 'components/core/icon-provider/icon-provider';
import { Icon } from 'components/core/icon/icon';

import {
  HeadshotImg,
  HeadshotImgContainer,
  HeroBanner,
  HomepageHeroContainer,
  Titles,
} from 'modules/homepage/components/homepage-hero/homepage-hero-styles';
import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  height: 50px;
  width: 50px;
  position: absolute;
  left: 16%;
  top: 10%;
`;

export class HomepageHero extends React.Component {
  public render() {
    return (
      <HomepageHeroContainer>
        <IconProvider />
        <HeroBanner>
          <HeadshotImgContainer>
            <HeadshotImg src={require('assets/pro-pic-min.png')} />
          </HeadshotImgContainer>
          <SubHeader>Hey, I'm</SubHeader>
          <HeroHeader>Felix Zheng</HeroHeader>
          <Titles>
            <SubHeader>Software Engineer</SubHeader>
            <SubHeader>Music Producer</SubHeader>
            <SubHeader>Entrepreneur</SubHeader>
          </Titles>
          <LogoContainer>
            <img
              alt="grubhub-logo"
              src={require('assets/logos/gh-1200.png')}
              style={{
                height: '100%',
                width: '100%',
                borderRadius: '10px',
                transform: 'rotate(-15deg)',
              }}
            />
          </LogoContainer>
        </HeroBanner>
      </HomepageHeroContainer>
    );
  }
}
