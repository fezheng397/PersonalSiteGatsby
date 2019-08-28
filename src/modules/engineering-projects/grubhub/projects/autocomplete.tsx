import { Container } from 'components/core/container/container';
import {
  CenteredSectionHeader2,
  SectionHeaderMajor,
  SectionSubHeader4,
} from 'components/core/headers/headers';
import { PhoneFrame } from 'components/core/phone-frame/phone-frame';
import {
  IProjectTemplateProps,
  ProjectTemplate,
} from 'modules/engineering-projects/grubhub/projects/project-template';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IAutocompleteProps {}

const AutocompleteComponent = styled.div``;

const TextSectionContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  align-items: center;
`;

const TextSectionSubHeader = styled(SectionSubHeader4)`
  text-align: center;
  color: ${Styles.Colors.textLightBlack};
  margin: ${Styles.Spaces.spacing8} 0;
`;

const TextSectionDesc = styled.p`
  margin-bottom: ${Styles.Spaces.spacing16};
`;

const autocompleteTemplate: IProjectTemplateProps = {
  imageAlt: '',
  imageSrc: require('assets/grubhub/projects/autocomplete/autocomplete-icon.png'),
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

const PhoneFrameRow = styled.div`
  display: flex;
  justify-content: center;

  ${Styles.MediaQuery.md} {
    flex-direction: column;
  }
`;

export function Autocomplete({  }: IAutocompleteProps) {
  return (
    <AutocompleteComponent id="autocomplete-component">
      <Container id="autocomplete-project-header" size="lg">
        <SectionHeaderMajor>Search Autocomplete</SectionHeaderMajor>
        <ProjectTemplate
          imageAlt={autocompleteTemplate.imageAlt}
          imageSrc={autocompleteTemplate.imageSrc}
          objective={autocompleteTemplate.objective}
          roles={autocompleteTemplate.roles}
        />
      </Container>
      <Container id="autocomplete-project-analysis" size="lg">
        <CenteredSectionHeader2>Analysis</CenteredSectionHeader2>
        <TextSectionSubHeader>The Problem</TextSectionSubHeader>
        <TextSectionContainer>
          <TextSectionDesc>
            The reason for this project was because the current homepage is
            shite
          </TextSectionDesc>
        </TextSectionContainer>
        <PhoneFrameRow>
          <PhoneFrame
            imageAlt="iphone frame"
            imageSrc={require('assets/grubhub/projects/autocomplete/homepage-default-cropped.png')}
            caption="Logged-out Homepage Entry"
          />
          <PhoneFrame
            imageAlt="iphone frame"
            imageSrc={require('assets/grubhub/projects/autocomplete/homepage-problem-noscroll-cropped.png')}
            caption="After Focusing on Address Input"
          />
          <PhoneFrame
            imageAlt="iphone frame"
            imageSrc={require('assets/grubhub/projects/autocomplete/homepage-problem-scrolled-cropped.png')}
            caption="After Scrolling to See Results"
          />
        </PhoneFrameRow>
        <TextSectionSubHeader>Reviewing Expectations</TextSectionSubHeader>
        <TextSectionSubHeader>App Audit</TextSectionSubHeader>
      </Container>
      <TextSectionContainer>
        <CenteredSectionHeader2>Ideation</CenteredSectionHeader2>
        <TextSectionSubHeader>Feature Architecture</TextSectionSubHeader>
        <TextSectionSubHeader />
      </TextSectionContainer>

      <TextSectionContainer>
        <CenteredSectionHeader2>Implementation</CenteredSectionHeader2>
        <TextSectionSubHeader>Coding...</TextSectionSubHeader>
        <TextSectionSubHeader />
      </TextSectionContainer>
    </AutocompleteComponent>
  );
}
