import { Container } from 'components/core/container/container';
import { SubHeader } from 'components/core/headers/headers';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IEngineeringTemplateProps {}

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
  width: 80%;
  height: 100%;
  border-radius: ${Styles.Sizes.radius2};
  box-shadow: ${Styles.Shadows.standard};
  background-color: ${Styles.Colors.primaryWhite};
  margin-top: -50px;
  padding: ${Styles.Spaces.section8};
  text-align: center;
  z-index: 8000;
`;

export class EngineeringTemplate extends React.Component<
  IEngineeringTemplateProps,
  IEngineeringTemplateState
> {
  public render() {
    return (
      <EngineeringTemplateContainer size="lg">
        <TemplateBannerContainer />
        <ProjectBanner>
          <h1>GrubHub: Diner Platform</h1>
          <SubHeader>Front-end Engineering Intern</SubHeader>
        </ProjectBanner>
      </EngineeringTemplateContainer>
    );
  }
}
