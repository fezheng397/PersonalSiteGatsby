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
  BackgroundSectionContent,
  BackgroundSectionSubHeader,
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
    <TransitionItem timeout={300} transitionType="fade">
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
              caption="After Focusing on Address Input (Results are blocked)"
            />
            <PhoneFrame
              imageAlt="iphone frame"
              imageSrc={require('assets/grubhub/projects/autocomplete/homepage-problem-scrolled-cropped.png')}
              caption="After Scrolling to See Results"
            />
          </PhoneFrameRow>
          <TextSectionContainer>
            <TextSectionSubHeader>Reviewing Expectations</TextSectionSubHeader>
            <TextSectionDesc>
              Prior to beginning my work on this feature, my lead wanted to
              ensure that he wanted the delivered component to be highly
              reusable. This is due to the widespread use of the address input
              throughout Grubhub's entire site, making it a challenge to create
              a component that can handle various cases of business logic as
              well as various forms of presentations.
            </TextSectionDesc>
          </TextSectionContainer>
        </Container>
        <Container id="autocomplete-project-ideation" size="lg">
          <TextSectionContainer>
            <TextSectionSubHeader>Feature Architecture</TextSectionSubHeader>
            <TextSectionDesc>
              One of the most challenging aspects of implementing the new
              autocomplete component was taking into consideration the current
              address input implementation. Due to the current address input
              component's usage, it's filled with excessive conditional
              rendering and business logic. As a result, I set out to try and
              split up and better organize the component while creating the new
              fullscreen autocomplete modal, to create a better foundational
              structure for the component in the future.
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
        </Container>
        <Container id="autocomplete-project-review" size="lg">
          <TextSectionContainer>
            <TextSectionSubHeader>Stakeholder Review</TextSectionSubHeader>
            <TextSectionDesc>
              Stakeholder review involved ensuring both the designers and the
              product managers (PMs) involved throughout the process were
              satisfied with the engineered feature. The review process for this
              project was unique because it involved a scope change midway
              through, complicating the timeline and deliverables. Looking at
              the finished product, there are two parts - the redesigned address
              input and 'Find Food' button, immediately seen in the homepage
              hero, and the fullscreen autocomplete modal that is triggered upon
              click/focus of the address input. The first of the two was the
              change added halfway through. Challenges included: typography,
              fullscreen modal on mobile web, smoother transitions between
              loading states
            </TextSectionDesc>

            <TextSectionSubHeader>Testing</TextSectionSubHeader>
            <TextSectionDesc>
              Once the stakeholders were satisfied, I moved on to testing. Unit
              testing was relatively straight forward. Challenges included
              mocking the variants/modal helpers and getting that to work.
              Altering the previous address input's tests (which there were a
              ton of) to add in my functionalities, and maintaining test
              coverage percentile. ATs/Smoke tests - Had to be careful with
              ensuring I didn't break anything site-wide bc the address input
              was such a widely used component.
            </TextSectionDesc>
          </TextSectionContainer>
          <BackgroundSection bgColor={Styles.Colors.bgGray}>
            <BackgroundSectionContent>
              <ul>
                <BackgroundSectionSubHeader>Header</BackgroundSectionSubHeader>
                <li>list item 1</li>
                <li>list item 2</li>
              </ul>
              <ul>
                <BackgroundSectionSubHeader>Header</BackgroundSectionSubHeader>
                <li>list item 1</li>
                <li>list item 2</li>
              </ul>
            </BackgroundSectionContent>
          </BackgroundSection>
          <TextSectionContainer>
            <TextSectionSubHeader>Code Review</TextSectionSubHeader>
            <TextSectionDesc>
              The code-review process for this particular project dragged on for
              a long time.
            </TextSectionDesc>
          </TextSectionContainer>
        </Container>
      </AutocompleteComponent>
    </TransitionItem>
  );
}
