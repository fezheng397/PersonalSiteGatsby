import { SectionSubHeader5, SubHeader } from 'components/core/headers/headers';
import { Logo } from 'components/core/logo/logo';
import { TransitionItem } from 'components/core/transition/transition';
import { EngineeringTemplateContainer } from 'modules/engineering-projects/engineering-template/engineering-template';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IEngineeringHeroProps {
  bannerImageSrc?: string;
  bannerHeader?: string;
  bannerSubHeader?: string;
  projectDetails?: ProjectDetails[];
}

export interface ProjectDetails {
  header: string;
  subHeader: string;
}

export interface IProjectDetailProps {
  noBorder?: boolean;
}

const TemplateBannerContainer = styled.div`
  width: 100%;
  height: 300px;
  background: ${(props: IEngineeringHeroProps) =>
    `url(${props.bannerImageSrc}) no-repeat`};
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: ${Styles.Sizes.radius2};
  position: relative;
  margin-top: ${Styles.Spaces.section8};

  ${Styles.MediaQuery.sm} {
    margin-top: 0;
    border-radius: 0;
  }
`;

const ProjectBanner = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  border-radius: ${Styles.Sizes.radius2};
  box-shadow: ${Styles.Shadows.standard};
  background-color: ${Styles.Colors.primaryWhite};
  margin-top: -50px;
  text-align: center;
  z-index: ${Styles.Dimensions.baseZ};

  ${Styles.MediaQuery.sm} {
    width: 100%;
    box-shadow: none;
    border-radius: ${Styles.Sizes.radius4};
  }
`;

const ProjectBannerContent = styled.div`
  padding: ${Styles.Spaces.section10};
`;

const Specifications = styled.div`
  padding: ${Styles.Spaces.section8} 0 ${Styles.Spaces.section4} 0;
`;

const ProjectDetailsContainer = styled.div`
  display: flex;
`;

const ProjectDetail = styled.div`
  flex-basis: 33.3%;
  border-right: ${(props: IProjectDetailProps) =>
    props.noBorder ? 'none' : '2px rgba(0, 0, 0, 0.08) solid'};
`;

const DetailDesc = styled.p`
  font-size: 0.9em;
  margin-top: ${Styles.Spaces.spacing1};
  color: ${Styles.Colors.textSubHeader};
`;

const TemplateLogo = styled(Logo)`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: -25px;
`;

const HeroProjectHeader = styled.h1`
  font-size: 2.9em;
  line-height: 1.75em;
`;

export function EngineeringHero({
  bannerImageSrc,
  projectDetails,
}: IEngineeringHeroProps) {
  return (
    <EngineeringTemplateContainer noMobilePadding={true} size="lg">
      <TransitionItem timeout={300} transitionType="fade">
        <TemplateBannerContainer bannerImageSrc={bannerImageSrc} />
      </TransitionItem>

      <ProjectBanner>
        <TemplateLogo logo={require('assets/logos/gh-1200.png')} />
        <ProjectBannerContent>
          <TransitionItem
            timeout={500}
            transitionType="fade-translate"
            translateX={100}
          >
            <HeroProjectHeader>Grubhub</HeroProjectHeader>
          </TransitionItem>
          <TransitionItem
            timeout={500}
            delay={150}
            transitionType="fade-translate"
            translateX={100}
          >
            <SubHeader>Software Engineering Intern</SubHeader>
          </TransitionItem>

          <Specifications>
            <ProjectDetailsContainer>
              {projectDetails.map((detail, index) => {
                return index === projectDetails.length - 1 ? (
                  <TransitionItem
                    timeout={400}
                    delay={(index + 1) * 150 + 375}
                    transitionType="fade-translate"
                    translateY={60}
                  >
                    <ProjectDetail noBorder={true}>
                      <SectionSubHeader5>{detail.header}</SectionSubHeader5>
                      <DetailDesc>{detail.subHeader}</DetailDesc>
                    </ProjectDetail>
                  </TransitionItem>
                ) : (
                  <TransitionItem
                    timeout={400}
                    delay={(index + 1) * 150 + 375}
                    transitionType="fade-translate"
                    translateY={60}
                  >
                    <ProjectDetail>
                      <SectionSubHeader5>{detail.header}</SectionSubHeader5>
                      <DetailDesc>{detail.subHeader}</DetailDesc>
                    </ProjectDetail>
                  </TransitionItem>
                );
              })}
            </ProjectDetailsContainer>
          </Specifications>
        </ProjectBannerContent>
      </ProjectBanner>
    </EngineeringTemplateContainer>
  );
}
