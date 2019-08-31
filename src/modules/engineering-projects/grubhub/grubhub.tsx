import { CenteredSectionHeader } from 'components/core/headers/headers';
import { EngineeringTemplate } from 'modules/engineering-projects/engineering-template/engineering-template';
import { Autocomplete } from 'modules/engineering-projects/grubhub/projects/autocomplete';
import { CityPage } from 'modules/engineering-projects/grubhub/projects/city-page';
import { DashiGatsby } from 'modules/engineering-projects/grubhub/projects/dashi-gatsby';
import { GetTheApp } from 'modules/engineering-projects/grubhub/projects/get-the-app';
import { ProjectNav } from 'modules/engineering-projects/grubhub/projects/project-nav';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IGrubhubPRojectState {
  currentProject: number;
}

export class GrubhubProject extends React.Component {
  public state = {
    currentProject: 1,
  };

  public render() {
    const { currentProject } = this.state;
    return (
      <EngineeringTemplate
        bannerImageSrc={require('assets/grubhub/grubhub-hq.jpeg')}
      >
        <CenteredSectionHeader>Projects</CenteredSectionHeader>
        <ProjectNav selectNewProject={this.selectNewProject} />
        {this.getCurrentProject(currentProject)}
      </EngineeringTemplate>
    );
  }

  public selectNewProject = (newProject: number) => {
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
