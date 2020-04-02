import { Container } from 'components/core/container/container';
import { SectionHeader } from 'components/core/headers/headers';
import { StyledLink } from 'components/core/link/link-styles';
import { ProjectCard } from 'modules/engineering/components/project-card/project-card';
import React from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import { internalLinkEvent } from 'utilities/analytics';
import { Styles } from 'vars';

export interface IEngineeringProps {}

const EngineeringComponent = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: ${Styles.Spaces.spacing8};
  padding-bottom: ${Styles.Spaces.spacing8};

  ${Styles.MediaQuery.md} {
    flex-direction: column;
    justify-content: center;
    align-item: center;
  }
`;

const ProjectContainer = styled.div`
  padding: ${Styles.Spaces.spacing8} 0;
`;

export class Engineering extends React.Component<IEngineeringProps, {}> {
  public render() {
    return (
      <EngineeringComponent size='lg'>
        <ProjectContainer>
          <StyledLink
            onClick={() => {
              internalLinkEvent('Constellate');
            }}
            to='/'
            target='_blank'
          >
            <ProjectCard
              imageDesc='Constellate Project'
              imageSrc={require('assets/constellate-card.svg')}
              location='New York, NY'
              projectName='Constellate'
              role='Working on something new :)'
              timePeriod='Present'
            />
          </StyledLink>
        </ProjectContainer>
        <ProjectContainer>
          <a
            onClick={() => {
              internalLinkEvent('SeatGeek');
            }}
            href='https://www.seatgeek.com'
            target='_blank'
          >
            <ProjectCard
              imageDesc='SeatGeek Project'
              imageSrc={require('assets/seatgeek-card.svg')}
              location='New York, NY'
              projectName='SeatGeek'
              role='Software Engineer'
              timePeriod='February 2020 - Present'
            />
          </a>
        </ProjectContainer>
        <ProjectContainer>
          <StyledLink
            onClick={() => {
              internalLinkEvent('Grubhub');
            }}
            to='/engineering/grubhub'
          >
            <ProjectCard
              imageDesc='Grubhub Project'
              imageSrc={require('assets/grubhub/projects/grubhub-project.png')}
              location='New York, NY'
              projectName='Grubhub'
              role='Software Engineer Intern'
              timePeriod='Summer 2019'
            />
          </StyledLink>
        </ProjectContainer>
        <ProjectContainer>
          <a
            onClick={() => {
              internalLinkEvent('SWEInterns');
            }}
            href='https://www.sweinterns.com'
            target='_blank'
          >
            <ProjectCard
              imageDesc='SWEInterns Project'
              imageSrc={require('assets/sweinterns/sweinterns-project-cover.png')}
              location='New York, NY'
              projectName='Interns.SWE'
              role='Designer/Developer'
              timePeriod='Fall 2019'
            />
          </a>
        </ProjectContainer>
      </EngineeringComponent>
    );
  }
}
