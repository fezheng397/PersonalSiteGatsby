import { CenteredSectionHeader } from 'components/core/headers/headers';
import { TransitionItem } from 'components/core/transition/transition';
import { EngineeringTemplate } from 'modules/engineering-projects/engineering-template/engineering-template';
import { Autocomplete } from 'modules/engineering-projects/grubhub/projects/autocomplete';
import { CityPage } from 'modules/engineering-projects/grubhub/projects/city-page';
import { DashiGatsby } from 'modules/engineering-projects/grubhub/projects/dashi-gatsby';
import { GetTheApp } from 'modules/engineering-projects/grubhub/projects/get-the-app';
import { ProjectNav } from 'modules/engineering-projects/grubhub/projects/project-nav';
import React from 'react';
import styled from 'styled-components';
import { scrollTo, WindowUtil } from 'utilities/window-util';
import { Styles } from 'vars';
import {
  TextSectionContainer,
  TextSectionDesc,
  TextSectionSubHeader,
} from './projects/project-template';

export interface IGrubhubProjectState {
  currentProject: number;
  navPosFixed: boolean;
  projectInState: boolean;
}

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const ProjectsContainer = styled.div`
  margin-bottom: ${Styles.Spaces.section8};
`;

export class GrubhubProject extends React.Component {
  public state = {
    currentProject: 1,
    navPosFixed: false,
    projectInState: true,
  };
  public windowUtil = new WindowUtil();

  private projectsRef;

  constructor(props) {
    super(props);
    this.projectsRef = React.createRef();
  }

  public render() {
    const { currentProject, navPosFixed } = this.state;

    return (
      <div>
        <EngineeringTemplate
          bannerImageSrc={require('assets/grubhub/grubhub-banner-phone-01.png')}
        >
          <div id="project-nav-component-container">
            <CenteredSectionHeader>Projects</CenteredSectionHeader>
            <ProjectNav
              currentProject={currentProject}
              navPosFixed={this.navPosFixed}
              selectNewProject={this.selectNewProject.bind(this)}
            />
          </div>

          <ProjectsContainer id="projects-container" ref={this.projectsRef}>
            {this.getCurrentProject(currentProject)}
          </ProjectsContainer>
        </EngineeringTemplate>
      </div>
    );
  }

  public async selectNewProject(newProject: number) {
    this.setState({ projectInState: false });
    scrollTo(document.getElementById('project-nav-component-container'));

    this.setState({ currentProject: newProject, projectInState: true });
  }

  public navPosFixed = (fixed: boolean) => {
    this.setState({ navPosFixed: fixed });
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

  private renderReflection() {
    return (
      <TextSectionContainer>
        <TextSectionSubHeader>Problem Statement</TextSectionSubHeader>
        <TextSectionDesc>
          I'm extremely thankful to Grubhub for providing me the opportunity to
          work with such a talented, helpful, and inspiring team over the
          summer. I learned an abundance of new
        </TextSectionDesc>
      </TextSectionContainer>
    );
  }
}
