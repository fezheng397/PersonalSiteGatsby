import { Container } from 'components/core/container/container';
import { SubHeader } from 'components/core/headers/headers';
import { CenteredSectionHeader } from 'components/core/headers/headers';
import { TransitionItem } from 'components/core/transition/transition';
import {
  EngineeringHero,
  ProjectDetails,
} from 'modules/engineering-projects/engineering-template/engineering-hero';
import { EngineeringOverview } from 'modules/engineering-projects/engineering-template/engineering-overview';
import { ProjectIteratorButton } from 'modules/engineering-projects/engineering-template/project-iterator-button';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IEngineeringTemplateProps {
  bannerImageSrc?: string;
  bannerHeader?: string;
  bannerSubHeader?: string;
  renderReflection?: () => JSX.Element;
}

export interface IEngineeringTemplateState {}

export const EngineeringTemplateContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EngineeringTemplateFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${Styles.Spaces.section16};
`;

const ProjectDashboard = styled(Container)`
  width: 100%;
  border-top: 2px ${Styles.Colors.borderGray} solid;
  padding: ${Styles.Spaces.section4} 0;
  display: flex;
  justify-content: center;
`;

const ProjectNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const projectDetails: ProjectDetails[] = [
  { header: 'Duration', subHeader: 'Summer 2019 (3 mos)' },
  { header: 'Team', subHeader: 'Growth & Lifecycle' },
  { header: 'Platform', subHeader: 'Web, Front-end' },
];

export class EngineeringTemplate extends React.Component<
  IEngineeringTemplateProps,
  IEngineeringTemplateState
> {
  public render() {
    const { bannerImageSrc, children, renderReflection } = this.props;

    return (
      <div>
        <EngineeringHero
          bannerImageSrc={bannerImageSrc}
          projectDetails={projectDetails}
        />
        <EngineeringOverview />
        {children}
        <EngineeringTemplateFooter>
          {renderReflection ? renderReflection() : null}
          <ProjectDashboard size="lg">
            <ProjectNav>
              <div />
              <ProjectIteratorButton
                buttonType="Next"
                projectLink="https://www.sweinterns.com"
                projectName="SWEInterns"
                projectImage={require('assets/sweinterns/sweinterns-project-cover.png')}
              />
            </ProjectNav>
          </ProjectDashboard>
        </EngineeringTemplateFooter>
      </div>
    );
  }
}
