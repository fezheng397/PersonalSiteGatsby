import { Container } from 'components/core/container/container';
import { StyledLink } from 'components/core/link/link-styles';
import { ProjectCard } from 'modules/engineering/components/project-card/project-card';
import React from 'react';
import styled from 'styled-components';

export interface IEngineeringProps {}

const EngineeringComponent = styled(Container)``;

export class Engineering extends React.Component<IEngineeringProps, {}> {
  public render() {
    return (
      <EngineeringComponent size="lg">
        <h1>Hi</h1>
        <StyledLink to="/engineering/grubhub">
          <ProjectCard
            imageDesc="Grubhub Project"
            imageSrc={require('assets/logos/GrubHub_Logo_2016.svg')}
            location="New York, NY"
            projectName="Grubhub"
            role="Software Engineer Intern"
            timePeriod="Summer 2019"
          />
        </StyledLink>
      </EngineeringComponent>
    );
  }
}
