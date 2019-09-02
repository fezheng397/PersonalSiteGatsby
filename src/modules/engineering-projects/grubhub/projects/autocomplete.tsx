import { Container } from 'components/core/container/container';
import {
  CenteredSectionHeader2,
  SectionHeaderMajor,
} from 'components/core/headers/headers';
import {
  PhoneFrame,
  PhoneFrameRow,
} from 'components/core/phone-frame/phone-frame';
import { TransitionItem } from 'components/core/transition/transition';
import {
  BackgroundSection,
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
  imageAlt: 'Autocomplete Illustration',
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

export function Autocomplete({  }: IAutocompleteProps) {
  return (
    <TransitionItem timeout={300}>
      <AutocompleteComponent id="autocomplete-component">
        <Container id="autocomplete-project-header" size="lg">
          <SectionHeaderMajor>Search Autocomplete</SectionHeaderMajor>
          <ProjectTemplate
            imageAlt={autocompleteTemplate.imageAlt}
            imageSrc={autocompleteTemplate.imageSrc}
            imagePosition={autocompleteTemplate.imagePosition}
            objective={autocompleteTemplate.objective}
            roles={autocompleteTemplate.roles}
          />
        </Container>
        <Container id="autocomplete-project-analysis" size="lg">
          <TextSectionContainer>
            <TextSectionSubHeader>Problem Statement</TextSectionSubHeader>
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
              caption="Current Logged-out Homepage Entry"
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
          <TextSectionContainer>
            <TextSectionSubHeader>
              Reviewing Stakeholder Expectations
            </TextSectionSubHeader>
            <TextSectionDesc>After</TextSectionDesc>
          </TextSectionContainer>
        </Container>
        <Container id="autocomplete-project-ideation" size="lg">
          <TextSectionContainer>
            <TextSectionSubHeader>Feature Architecture</TextSectionSubHeader>
            <TextSectionDesc>
              One of the most challenging aspects of implementing the new
              autocomplete component was taking into consideration the current
              address input implementation. This is because the current address
              input was the most widespread component throughout the entire
              website, filled with excessive conditional rendering and business
              logic. As a result, I set out to try and split up the component
              while creating the new fullscreen autocomplete modal, to create a
              better foundational structure for the component in the future. The
              first page to feature this change was the logged-out homepage in
              the address input, which would autocomplete your location.
            </TextSectionDesc>
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
          <Container id="autocomplete-project-review" size="lg">
            <TextSectionContainer>
              <TextSectionSubHeader>Stakeholder Review</TextSectionSubHeader>
              <TextSectionDesc>
                After the implementation was complete, I moved onto stakeholder
                review, ensuring both the designers and the product managers
                involved throughout the process were satisfied with the
                engineered feature. Typically, this step was pretty
                straightforward during my 3 months at Grubhub. However, for this
                project there was a scope change midway through.
              </TextSectionDesc>

              <TextSectionSubHeader>Testing</TextSectionSubHeader>
              <TextSectionDesc>
                Once the stakeholders were satisfied, I moved on to testing.
              </TextSectionDesc>
            </TextSectionContainer>
            <BackgroundSection bgColor={Styles.Colors.bgGray}>
              <p>This is a text description</p>
            </BackgroundSection>
            <TextSectionContainer>
              <TextSectionSubHeader>Code Review</TextSectionSubHeader>
              <TextSectionDesc>
                The code-review process for this particular project dragged on
                for a long time.
              </TextSectionDesc>
            </TextSectionContainer>
          </Container>
        </Container>
      </AutocompleteComponent>
    </TransitionItem>
  );
}
