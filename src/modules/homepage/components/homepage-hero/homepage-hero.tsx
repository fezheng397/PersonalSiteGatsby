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
import { TransitionItem } from "components/core/transition/transition";

const HeroDescription = styled.p`
  font-size: 20px;
  color: ${Styles.Colors.textLightBlack};

  ${Styles.MediaQuery.md} {
    font-size: 18px;
  }
`;

export class HomepageHero extends React.Component {
  public render() {
    return (
      <HomepageHeroContainer>
        <HeroBanner size="md">
          <HeadshotImgContainer>
            <HeadshotImg src={require("assets/pro-pic-min.png")} />
          </HeadshotImgContainer>

          <TransitionItem
            timeout={400}
            transitionType="fade-translate"
            translateY={50}
          >
            <SubHeader>Hey, I'm</SubHeader>
          </TransitionItem>

          <TransitionItem
            timeout={400}
            transitionType="fade-scale"
            scaleSize={1.55}
          >
            <HeroHeader>Felix Zheng</HeroHeader>
          </TransitionItem>
          <Titles>
            <TransitionItem
              timeout={500}
              delay={150}
              transitionType="fade-translate"
              translateY={50}
            >
              <HeroDescription>
                Hey, I'm Felix. I'm a Software Engineer based in the New York
                area, currently working with Front-end at Grubhub.
              </HeroDescription>
            </TransitionItem>
            <br />
            <TransitionItem
              timeout={500}
              delay={225}
              transitionType="fade-translate"
              translateY={50}
            >
              <HeroDescription>
                Previously, I've worn many hats. Retired breakdancer, mediocre
                music producer, and aspiring designer.
              </HeroDescription>
            </TransitionItem>
          </Titles>
        </HeroBanner>
      </HomepageHeroContainer>
    );
  }
}
