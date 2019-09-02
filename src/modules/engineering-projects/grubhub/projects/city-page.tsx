import { Container } from 'components/core/container/container';
import { SectionHeaderMajor } from 'components/core/headers/headers';
import { TransitionItem } from 'components/core/transition/transition';
import {
  IProjectTemplateProps,
  ProjectTemplate,
} from 'modules/engineering-projects/grubhub/projects/project-template';
import {
  TextSectionContainer,
  TextSectionDesc,
  TextSectionSubHeader,
} from 'modules/engineering-projects/grubhub/projects/project-template';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface ICityPageProps {}

const CityPageComponent = styled(Container)``;

const cityPageTemplate: IProjectTemplateProps = {
  imageAlt: 'City Page Illustration',
  imageSrc: require('assets/grubhub/projects/autocomplete/autocomplete-icon.png'),
  imagePosition: 'right',
  objective: `To create a new page, highlighting all the top restaurants at a certain city.`,
  roles: [
    {
      roleHeader: 'Role Header',
      roleDesc: 'This is a text description',
    },
    {
      roleHeader: 'Role Header',
      roleDesc: 'This is a text description',
    },
  ],
};

export function CityPage({  }: ICityPageProps) {
  return (
    <TransitionItem timeout={300} transitionType="fade">
      <CityPageComponent>
        <SectionHeaderMajor>City Page</SectionHeaderMajor>
        <Container id="city-page-project-header" size="lg">
          <ProjectTemplate
            imageAlt={cityPageTemplate.imageAlt}
            imageSrc={cityPageTemplate.imageSrc}
            imagePosition={cityPageTemplate.imagePosition}
            objective={cityPageTemplate.objective}
            roles={cityPageTemplate.roles}
          />
        </Container>
        <Container id="city-page-project-analysis" size="lg">
          <TextSectionContainer>
            <TextSectionSubHeader>The Problem</TextSectionSubHeader>
            <TextSectionDesc>
              The city carousel was a new pattern. No locking when swiping on
              mobile, leading to an unintuitive and disruptive user experience.
            </TextSectionDesc>
            <TextSectionSubHeader>The Problem</TextSectionSubHeader>
            <TextSectionDesc>
              The city carousel was a new pattern. No locking when swiping on
              mobile, leading to an unintuitive and disruptive user experience.
            </TextSectionDesc>
            <TextSectionSubHeader>The Problem</TextSectionSubHeader>
            <TextSectionDesc>
              The city carousel was a new pattern. No locking when swiping on
              mobile, leading to an unintuitive and disruptive user experience.
            </TextSectionDesc>
          </TextSectionContainer>
        </Container>
      </CityPageComponent>
    </TransitionItem>
  );
}
