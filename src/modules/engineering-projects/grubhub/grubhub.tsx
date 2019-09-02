import { CenteredSectionHeader } from 'components/core/headers/headers';
import { TransitionItem } from 'components/core/transition/transition';
import { EngineeringTemplate } from 'modules/engineering-projects/engineering-template/engineering-template';
import { Autocomplete } from 'modules/engineering-projects/grubhub/projects/autocomplete';
import { CityPage } from 'modules/engineering-projects/grubhub/projects/city-page';
import { DashiGatsby } from 'modules/engineering-projects/grubhub/projects/dashi-gatsby';
import { GetTheApp } from 'modules/engineering-projects/grubhub/projects/get-the-app';
import { ProjectNav } from 'modules/engineering-projects/grubhub/projects/project-nav';
import { delay } from 'q';
import React from 'react';
import styled from 'styled-components';
import {
  checkRelativePosition,
  getCurrentWindowPosition,
  scrollTo,
  WindowUtil,
} from 'utilities/window-util';
import { Styles } from 'vars';

export interface IGrubhubProjectState {
  currentProject: number;
}

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const ProjectsContainer = styled.div``;

export class GrubhubProject extends React.Component {
  public state = {
    currentProject: 1,
  };
  public windowUtil = new WindowUtil();

  private projectsRef;

  constructor(props) {
    super(props);
    this.projectsRef = React.createRef();
  }

  public render() {
    const { currentProject } = this.state;

    return (
      <div>
        <TransitionItem timeout={500}>
          <EngineeringTemplate
            bannerImageSrc={require('assets/grubhub/grubhub-hq.png')}
          >
            <div id="project-nav-component-container">
              <CenteredSectionHeader>Projects</CenteredSectionHeader>
              <ProjectNav selectNewProject={this.selectNewProject.bind(this)} />
            </div>
            <ProjectsContainer id="projects-container" ref={this.projectsRef}>
              {this.getCurrentProject(currentProject)}
            </ProjectsContainer>
          </EngineeringTemplate>
        </TransitionItem>
      </div>
    );
  }

  public async selectNewProject(newProject: number) {
    scrollTo(document.getElementById('project-nav-component-container'));
    // await delay(200);
    this.setState({ currentProject: newProject });
  }

  private getCurrentProject(currentProject) {
    const projects = {
      1: <DashiGatsby />,
      2: <CityPage />,
      3: <Autocomplete />,
      4: <GetTheApp />,
    };

    return projects[currentProject];
  }
}
