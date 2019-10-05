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

const CityPageComponent = styled.div``;

const cityPageTemplate: IProjectTemplateProps = {
  imageAlt: 'City Page Illustration',
  imageSrc: require('assets/grubhub/projects/autocomplete/autocomplete-icon.png'),
  imagePosition: 'left',
  objective: `To extend the current carousel component to include a new design pattern.`,
  roles: [
    {
      roleHeader: 'Design Review',
      roleDesc: 'This is a text description',
    },
    {
      roleHeader: 'Implementation',
      roleDesc: 'This is a text description',
    },
  ],
};

export function CityPage({  }: ICityPageProps) {
  return (
    <TransitionItem timeout={300} transitionType="fade">
      <CityPageComponent>
        <SectionHeaderMajor>Best Restaurants</SectionHeaderMajor>
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
            <TextSectionSubHeader>Problem Statement</TextSectionSubHeader>
            <TextSectionDesc>
              While plannning out the design for the new City pages which listed
              the top delivery restaurants from a city, we discovered the need
              to extend our carousel pattern. As I was implementing the
              additions, I found our current component lacking functionalities
              such as locking to the nearest item after swiping. Because the
              city page carousels were image-focused, the lack of such features
              led to an awkward user experience.
            </TextSectionDesc>
            <TextSectionSubHeader>Reviewing Expectations</TextSectionSubHeader>
            <TextSectionDesc>
              The city carousel was a new pattern. No locking when swiping on
              mobile, leading to an unintuitive and disruptive user experience.
            </TextSectionDesc>
            <TextSectionSubHeader>Feature Architecture</TextSectionSubHeader>
            <TextSectionDesc>
              The city carousel was a new pattern. No locking when swiping on
              mobile, leading to an unintuitive and disruptive user experience.
            </TextSectionDesc>

            <TextSectionSubHeader>Implementation</TextSectionSubHeader>
            <TextSectionDesc>
              The city carousel was a new pattern. No locking when swiping on
              mobile, leading to an unintuitive and disruptive user experience.
            </TextSectionDesc>
            <TextSectionSubHeader>Stakeholder Review</TextSectionSubHeader>
            <TextSectionDesc>
              The city carousel was a new pattern. No locking when swiping on
              mobile, leading to an unintuitive and disruptive user experience.
            </TextSectionDesc>
            <TextSectionSubHeader>Testing</TextSectionSubHeader>
            <TextSectionDesc>
              The city carousel was a new pattern. No locking when swiping on
              mobile, leading to an unintuitive and disruptive user experience.
            </TextSectionDesc>
            <TextSectionSubHeader>Code Review</TextSectionSubHeader>
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
