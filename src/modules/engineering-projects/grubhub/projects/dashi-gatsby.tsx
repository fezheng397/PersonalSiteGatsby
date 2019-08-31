import { Container } from 'components/core/container/container';
import { SectionHeaderMajor } from 'components/core/headers/headers';
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

export interface IDashiGatsbyProps {}

const DashiGatsbyComponent = styled(Container)``;

const dashiGatsbyTemplate: IProjectTemplateProps = {
  imageAlt: 'Dashi Gatsby Illustration',
  imageSrc: require('assets/grubhub/projects/autocomplete/autocomplete-icon.png'),
  imagePosition: 'left',
  objective: `To create an intuitive and efficient experience for users landing on
  the logged out homepage looking to quickly find food near them and
  order.`,
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

export function DashiGatsby({  }: IDashiGatsbyProps) {
  return (
    <DashiGatsbyComponent>
      <SectionHeaderMajor>Dashy - Gatsby</SectionHeaderMajor>
      <Container id="dashi-gatsby-project-header" size="lg">
        <ProjectTemplate
          imageAlt={dashiGatsbyTemplate.imageAlt}
          imageSrc={dashiGatsbyTemplate.imageSrc}
          imagePosition={dashiGatsbyTemplate.imagePosition}
          objective={dashiGatsbyTemplate.objective}
          roles={dashiGatsbyTemplate.roles}
        />
      </Container>
      <Container id="dashi-gatsby-project-analysis" size="lg">
        <TextSectionContainer>
          <TextSectionSubHeader>The Problem</TextSectionSubHeader>
          <TextSectionDesc>
            Too many legacy technologies - difficult to maintain.
          </TextSectionDesc>
        </TextSectionContainer>
      </Container>
    </DashiGatsbyComponent>
  );
}
