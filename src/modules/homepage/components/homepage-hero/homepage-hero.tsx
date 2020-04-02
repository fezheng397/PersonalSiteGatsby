import { Button } from 'components/core/button/button';
import { HeroHeader, SubHeader } from 'components/core/headers/headers';
import { Icon } from 'components/core/icon/icon';
import { TransitionItem } from 'components/core/transition/transition';
import {
  HeadshotImg,
  HeadshotImgContainer,
  HeroBanner,
  HomepageHeroContainer,
  Titles
} from 'modules/homepage/components/homepage-hero/homepage-hero-styles';
import React from 'react';
import styled from 'styled-components';
import { scrollTo } from 'utilities/window-util';
import { Styles } from 'vars';

const HeroDescription = styled.p`
  font-size: 20px;
  color: ${Styles.Colors.textLightBlack};

  ${Styles.MediaQuery.md} {
    font-size: 18px;
  }
`;

const SeeMoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: ${Styles.Spaces.section16} 0 ${Styles.Spaces.section8};

  ${Styles.MediaQuery.sm} {
    margin: ${Styles.Spaces.section10} 0 ${Styles.Spaces.section8};
  }
`;
const SeeMoreButton = styled(Button)`
  width: 60px;
  height: 60px;
  box-shadow: ${Styles.Shadows.imageShadow};
  border-radius: ${Styles.Sizes.radiusCircle};
  transition: all 150ms ease-in;

  &:hover,
  &:focus,
  &:active {
    box-shadow: ${Styles.Shadows.imageShadow};
    transform: translateY(-8px);
  }
`;

export class HomepageHero extends React.Component {
  public render() {
    return (
      <HomepageHeroContainer>
        <HeroBanner size='md'>
          <HeadshotImgContainer>
            <HeadshotImg src={require('assets/pro-pic-min.png')} />
          </HeadshotImgContainer>

          <TransitionItem
            timeout={400}
            transitionType='fade-translate'
            translateY={50}
          >
            <SubHeader>Hey, I'm</SubHeader>
          </TransitionItem>

          <TransitionItem
            timeout={400}
            transitionType='fade-scale'
            scaleSize={1.55}
          >
            <HeroHeader>Felix Zheng</HeroHeader>
          </TransitionItem>
          <Titles>
            <TransitionItem
              timeout={500}
              delay={150}
              transitionType='fade-translate'
              translateY={50}
            >
              <HeroDescription>
                I'm a Software Engineer based in the New York area currently @
                SeatGeek.
              </HeroDescription>
            </TransitionItem>
            <br />
            <TransitionItem
              timeout={475}
              delay={250}
              transitionType='fade-translate'
              translateY={50}
            >
              <HeroDescription>
                Aside from my professional side, I love to produce music/DJ and
                freestyle on the piano.
              </HeroDescription>
            </TransitionItem>
          </Titles>
          <TransitionItem timeout={500} delay={450} transitionType='fade'>
            <SeeMoreButtonContainer>
              <SeeMoreButton onClick={this.scrollToProjects}>
                <Icon
                  height={24}
                  width={24}
                  fill={Styles.Colors.textLightBlack}
                  icon='arrow-right'
                  rotate={90}
                />
              </SeeMoreButton>
            </SeeMoreButtonContainer>
          </TransitionItem>
        </HeroBanner>
      </HomepageHeroContainer>
    );
  }

  public scrollToProjects = () => {
    scrollTo(document.getElementById('homepage-catalog'));
  };
}
