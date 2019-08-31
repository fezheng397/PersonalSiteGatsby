import { Container } from 'components/core/container/container';
import { SectionHeaderMajor } from 'components/core/headers/headers';
import {
  PhoneFrame,
  PhoneFrameRow,
} from 'components/core/phone-frame/phone-frame';
import {
  TextSectionContainer,
  TextSectionDesc,
  TextSectionSubHeader,
} from 'modules/engineering-projects/grubhub/projects/project-template';
import {
  IProjectTemplateProps,
  ProjectTemplate,
} from 'modules/engineering-projects/grubhub/projects/project-template';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IAutocompleteProps {}

const AutocompleteComponent = styled.div``;

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
        <TextSectionContainer>
          <TextSectionSubHeader>The Problem</TextSectionSubHeader>
          <TextSectionDesc>
            On entering the current Grubhub landing page, you are prompted to
            click on the input to begin entering your address and discover
            delivery near your location. However, on mobile web, the
            autocomplete results are blocked by the keyboard unless you scroll
            down, presenting an inconvenient user experience on the most
            important page for new customer acquisition.
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
        <TextSectionSubHeader>The Solution</TextSectionSubHeader>
      </Container>
      <Container id="autocomplete-project-ideation" size="lg">
        <TextSectionContainer>
          <TextSectionSubHeader>App Audit</TextSectionSubHeader>
          <TextSectionSubHeader>Feature Architecture</TextSectionSubHeader>

          <TextSectionSubHeader />
        </TextSectionContainer>
      </Container>
      <Container id="autocomplete-project-implementation" size="lg">
        <TextSectionContainer>
          <TextSectionSubHeader>Implementation</TextSectionSubHeader>
          <PhoneFrameRow>
            <PhoneFrame
              imageAlt="iphone frame"
              imageSrc={require('assets/grubhub/projects/autocomplete/homepage.png')}
              caption="Logged-out Homepage Entry - Redesigned Address Input"
            />
            <PhoneFrame
              imageAlt="iphone frame"
              imageSrc={require('assets/grubhub/projects/autocomplete/entry.png')}
              caption="After Focusing on Address Input - Fullscreen Modal for Autocomplete"
            />
            <PhoneFrame
              imageAlt="iphone frame"
              imageSrc={require('assets/grubhub/projects/autocomplete/search-results.png')}
              caption="After Typing to See Results"
            />
          </PhoneFrameRow>
          <PhoneFrameRow>
            <PhoneFrame
              imageAlt="iphone frame"
              imageSrc={require('assets/grubhub/projects/autocomplete/autocomplete-demo-basic.gif')}
              caption="Basic Autocomplete Functionality"
            />
            <PhoneFrame
              imageAlt="iphone frame"
              imageSrc={require('assets/grubhub/projects/autocomplete/geolocate.gif')}
              caption="Geolocate Button Functionality"
            />
            <PhoneFrame
              imageAlt="iphone frame"
              imageSrc={require('assets/grubhub/projects/autocomplete/use-my-location.gif')}
              caption="Use My Location Functionality"
            />
          </PhoneFrameRow>
          <TextSectionSubHeader />
        </TextSectionContainer>
      </Container>
    </AutocompleteComponent>
  );
}
