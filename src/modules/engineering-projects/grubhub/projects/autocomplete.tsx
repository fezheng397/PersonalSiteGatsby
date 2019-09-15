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
  BackgroundSectionList,
  BackgroundSectionListItem,
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
  bgColor: '#C7EDE6',
  imageAlt: 'Autocomplete Illustration',
  imageSrc: require('assets/grubhub/projects/autocomplete/autocomplete-cover.png'),
  imagePosition: 'left',
  objective: `To create an intuitive and efficient experience for users landing on
  the logged out homepage looking to quickly find food near them and
  order.`,
  roles: [
    {
      roleHeader: 'Feature Architecture',
      roleDesc: 'This is a text description',
    },
    {
      roleHeader: 'Implementation',
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
            bgColor={autocompleteTemplate.bgColor}
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
            <p>
              One of the most challenging aspects of implementing the new
              fullscreen autocomplete was taking into consideration the current
              address input implementation. Due to the current address input's
              usage, it's filled with excessive, intermingled conditional
              rendering and business logic occupying over 1500 lines. As a
              result, I set out to create a better foundational structure for
              the future. I planned to do so through the following:
            </p>
            <p>
              <strong>1) Container Component Architecture - </strong>I wanted to
              utilize this common React design pattern to split the business
              logic involved in the address input from all the render logic.
              This step would involve separating functionality that included
              geolocating, calling backend APIs to retrieve location results
              based on the input value, and more.
            </p>
            <TextSectionDesc>
              <strong>2) Separating Autocomplete/Typeahead Logic - </strong>
              In addition to business logic, much of the typeahead logic that
              drives the autocomplete feature resides within the address input
              component as well. I wanted to differentiate this logic as well,
              leaving just a render layer/subcomponent at the bottom of the
              chain to handle conditional rendering.
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
              />{' '}
              <PhoneFrame
                imageAlt="iphone frame"
                imageSrc={require('assets/grubhub/projects/autocomplete/loading-state.png')}
                caption="Loading State When Fetching Results"
              />
            </PhoneFrameRow>

            <TextSectionSubHeader />
          </TextSectionContainer>
        </Container>
        <Container id="autocomplete-project-review" size="lg">
          <TextSectionContainer>
            <TextSectionSubHeader>Stakeholder Review</TextSectionSubHeader>
            <p>
              Stakeholder review involved ensuring both the designers and the
              product managers (PMs) involved throughout the process were
              satisfied with the engineered feature. Although generally
              straightforward, this project presented a few unique challenges
              during review:
            </p>
            <p>
              <strong>1) Project Scope Change - </strong>We had originally
              assumed the fullscreen autocomplete was the only feature to
              implement. However, after handing the feature off to the PM, she
              informed us that she had forgotten to mention that a visual
              redesign of the address input would be apart of this experiment.
              The additional changes weren't too complex (mainly UI alterations
              with conditional rendering), but the pure size of the growing pull
              request along with midway context switching taught me a lesson on
              the importance of defining a reasonable scope for a project.
            </p>
            <TextSectionDesc>
              <strong>2) A/B Testing with Variants - </strong> The project was
              my first chance to work with variants. These were implemented so
              PMs could toggle new changes/features without altering code and
              target smaller percentages of the user base during A/B testing
              using Google Optimize. Although the learning curve wasn't too
              steep, I had to maintain constant communication with stakeholders
              during review to ensure my variants were intuitive to customize
              and use outside of the codebase.
            </TextSectionDesc>

            <TextSectionSubHeader>Testing</TextSectionSubHeader>
            <TextSectionDesc>
              Once the stakeholders were satisfied, I moved on to testing.
              Because the address input was used in so many places, I had to be
              extra careful when ensuring none of my changes broke any other
              features. Here's a breakdown of functionalities I had to
              write/alter tests for:
            </TextSectionDesc>
          </TextSectionContainer>
          <BackgroundSection bgColor={Styles.Colors.bgGray}>
            <BackgroundSectionContent>
              <BackgroundSectionList>
                <BackgroundSectionSubHeader>
                  Unit Tests
                </BackgroundSectionSubHeader>
                <BackgroundSectionListItem>
                  Maintaining prior address input tests
                </BackgroundSectionListItem>
                <BackgroundSectionListItem>
                  Ensuring correct UI elements rendered
                </BackgroundSectionListItem>
                <BackgroundSectionListItem>
                  Conceptualizing tests for new fullscreen autocomplete
                  functionality
                </BackgroundSectionListItem>
                <BackgroundSectionListItem>
                  Mocking variants and modals to avoid global state bleeding
                  into other tests and causing failures.
                </BackgroundSectionListItem>
              </BackgroundSectionList>

              <BackgroundSectionList>
                <BackgroundSectionSubHeader>
                  Automated Tests
                </BackgroundSectionSubHeader>
                <BackgroundSectionListItem>
                  Guaranteeing smoke tests all passed.
                </BackgroundSectionListItem>
                <BackgroundSectionListItem>
                  Assuring address input UI variations didn't break.
                </BackgroundSectionListItem>
                <BackgroundSectionListItem>
                  Confirming core Grubhub features function correctly.
                </BackgroundSectionListItem>
              </BackgroundSectionList>
            </BackgroundSectionContent>
          </BackgroundSection>
          <TextSectionContainer>
            <TextSectionSubHeader>Code Review</TextSectionSubHeader>
            <p>
              Although I list code review at the end, I always checked in with
              engineering leads or senior throughout the process to ensure my
              conceptual design and implemenation were optimal.
            </p>
            <p>
              <strong>Feature Design - </strong>Throughout this project's
              timeline, I constantly revisited this topic with more experienced
              engineers. Although we didn't stray too far from the original
              concept, there were various times where we agreed on shuffling the
              overall implementation plan, only to find more incorrect
              assumptions due to intricate component complexities and the need
              to further iterate.
            </p>
            <TextSectionDesc>
              <strong>Large Code Diff - </strong>Due to the organizational
              restructure of the address input/autocomplete and the scope
              change, the code diff for this project was difficult to consider
              thoroughly without extended attention. This caused the review
              process to drag on for a long time and really taught me the
              importance of defining a reasonable project scope.
            </TextSectionDesc>
          </TextSectionContainer>
        </Container>
      </AutocompleteComponent>
    </TransitionItem>
  );
}
