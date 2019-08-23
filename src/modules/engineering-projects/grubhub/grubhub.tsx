import { CenteredSectionHeader } from 'components/core/headers/headers';
import { EngineeringTemplate } from 'modules/engineering-projects/engineering-template/engineering-template';
import { HeroRedesign } from 'modules/engineering-projects/grubhub/projects/hero-redesign';
import { ProjectNav } from 'modules/engineering-projects/grubhub/projects/project-nav';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export class GrubhubProject extends React.Component {
  public render() {
    return (
      <EngineeringTemplate
        bannerImageSrc={require('assets/grubhub/grubhub-hq.jpeg')}
      >
        <CenteredSectionHeader>Projects</CenteredSectionHeader>
        <ProjectNav />
        <HeroRedesign />
      </EngineeringTemplate>
    );
  }
}
