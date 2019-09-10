import { HeroHeader, SubHeader } from "components/core/headers/headers";
import {
  HeadshotImg,
  HeadshotImgContainer,
  HeroBanner,
  HomepageHeroContainer,
  Titles
} from "modules/homepage/components/homepage-hero/homepage-hero-styles";
import React from "react";
import styled from "styled-components";
import { Styles } from "vars";

const HeroDescription = styled.p`
  font-size: 20px;
  color: ${Styles.Colors.textLightBlack};
`;

export class HomepageHero extends React.Component {
  public render() {
    return (
      <HomepageHeroContainer>
        <HeroBanner size="md">
          <HeadshotImgContainer>
            <HeadshotImg src={require("assets/pro-pic-min.png")} />
          </HeadshotImgContainer>
          <SubHeader>Hey, I'm</SubHeader>
          <HeroHeader>Felix Zheng</HeroHeader>
          <Titles>
            <HeroDescription>
              Hey, I'm Felix. I'm a Software Engineer based in the New York
              area, currently working with Front-end at Grubhub.
            </HeroDescription>
            <HeroDescription>
              Previously, I've worn many hats. Retired breakdancer, mediocre
              music producer, and aspiring designer.
            </HeroDescription>
          </Titles>
        </HeroBanner>
      </HomepageHeroContainer>
    );
  }
}
