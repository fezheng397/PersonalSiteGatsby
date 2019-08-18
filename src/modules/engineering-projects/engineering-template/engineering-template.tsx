import { Container } from 'components/core/container/container';
import { SubHeader } from 'components/core/headers/headers';
import { Logo } from 'components/core/logo/logo';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IEngineeringTemplateProps {
  bannerImageSrc?: string;
  bannerHeader?: string;
  bannerSubHeader?: string;
}

export interface IEngineeringTemplateState {}

const EngineeringTemplateContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TemplateBannerContainer = styled.div`
  width: 100%;
  height: 300px;
  background: url(${require('assets/grubhub/grubhub-hq.jpeg')});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 60%;
  border-radius: ${Styles.Sizes.radius2};
  position: relative;
  transition: opacity 200ms ease-in;
  margin-top: ${Styles.Spaces.section8};
`;

const ProjectBanner = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  border-radius: ${Styles.Sizes.radius2};
  box-shadow: ${Styles.Shadows.standard};
  background-color: ${Styles.Colors.primaryWhite};
  margin-top: -50px;
  text-align: center;
  z-index: 8000;
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

export interface IProjectDetailProps {
  noBorder?: boolean;
}

const ProjectDetail = styled.div`
  flex-basis: 33.3%;
  border-right: ${(props: IProjectDetailProps) =>
    props.noBorder ? 'none' : '2px rgba(0, 0, 0, 0.08) solid'};
`;

const DetailHeader = styled.h5`
  text-transform: uppercase;
  font-weight: 600;
`;

const DetailSubHeader = styled.h5`
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

const IPhoneFrame = styled.img`
  width: 230px;
  height: 500px;
  border-radius: 25px;
`;

// Turn ProjectBanner into a component. Also Project details
export class EngineeringTemplate extends React.Component<
  IEngineeringTemplateProps,
  IEngineeringTemplateState
> {
  public render() {
    const { children } = this.props;
    return (
      <EngineeringTemplateContainer size="lg">
        <TemplateBannerContainer />

        <ProjectBanner>
          <TemplateLogo logo={require('assets/logos/gh-1200.png')} />
          <ProjectBannerContent>
            <h1>GrubHub - Diner Platform</h1>
            <SubHeader>Software Engineering Intern</SubHeader>
            <Specifications>
              <ProjectDetailsContainer>
                <ProjectDetail>
                  <DetailHeader>Duration</DetailHeader>
                  <DetailSubHeader>Summer 2019 (3 mos)</DetailSubHeader>
                </ProjectDetail>
                <ProjectDetail>
                  <DetailHeader>Team</DetailHeader>
                  <DetailSubHeader>Growth & Lifecycle</DetailSubHeader>
                </ProjectDetail>
                <ProjectDetail noBorder={true}>
                  <DetailHeader>Role</DetailHeader>
                  <DetailSubHeader>Front-end Engineering</DetailSubHeader>
                </ProjectDetail>
              </ProjectDetailsContainer>
            </Specifications>
          </ProjectBannerContent>
        </ProjectBanner>
        <IPhoneFrame
          alt="iphone frame"
          src={require('assets/grubhub/projects/promote-mweb-option2.png')}
        />
        {children}
      </EngineeringTemplateContainer>
    );
  }
}
