import { Container } from 'components/core/container/container';
import { SectionHeaderMajor } from 'components/core/headers/headers';
import {
  PhoneFrame,
  PhoneFrameRow,
} from 'components/core/phone-frame/phone-frame';
import { TransitionItem } from 'components/core/transition/transition';
import {
  BackgroundSection,
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

export interface IGetTheAppProps {}

const GetTheAppComponent = styled.div``;

const getTheAppTemplate: IProjectTemplateProps = {
  imageAlt: 'Get The App Illustration',
  imageSrc: require('assets/grubhub/projects/autocomplete/autocomplete-icon.png'),
  imagePosition: 'left',
  objective: `To encourage users landing on the logged out homepage to download the mobile app without
  blocking their natural experience with a fullscreen pullover.`,
  roles: [
    {
      roleHeader: 'Implementation',
      roleDesc: 'Responsible for implementing the feature end to end.',
    },
    {
      roleHeader: 'Role Header',
      roleDesc: 'This is a text description',
    },
  ],
};

export function GetTheApp({  }: IGetTheAppProps) {
  return (
    <TransitionItem timeout={300} transitionType="fade">
      <GetTheAppComponent>
        <SectionHeaderMajor>Get The App</SectionHeaderMajor>
        <Container id="get-the-app-project-header" size="lg">
          <ProjectTemplate
            imageAlt={getTheAppTemplate.imageAlt}
            imageSrc={getTheAppTemplate.imageSrc}
            imagePosition={getTheAppTemplate.imagePosition}
            objective={getTheAppTemplate.objective}
            roles={getTheAppTemplate.roles}
          />
        </Container>
        <Container id="get-the-app-project-analysis" size="lg">
          <TextSectionContainer>
            <TextSectionSubHeader>Problem Statement</TextSectionSubHeader>
            <TextSectionDesc>
              For this feature, there wasn't necessarily a existing problem, but
              rather potential improvement that could be made. In the food
              delivery space, because customers typically show greater loyalty
              to a brand after downloading their app, our PMs wanted to create a
              call to action to download the app right on the front page of our
              web app. The greater loyalty a customer shows for the brand, the
              greater their LTV (Lifetime Value) and the greater the benefit to
              Grubhub's operations.
            </TextSectionDesc>

            <TextSectionSubHeader>Reviewing Expectations</TextSectionSubHeader>
            <p>
              Despite the simplicity of the feature, there were a few details
              stakeholders and managers wanted done correctly.
            </p>
            <p>
              <strong>1) Ensuring Variant Doesn't Flicker - </strong>Because the
              new design needed to be tested before it was rolled out to all
              users, it needed to be implemented as a variant for Google
              Optimize. The problem with variants, especially on a page like the
              logged-out homepage, is that the default content will be initially
              served. Afterwards, based on whether or not the variant is active,
              it will either switch to the variant's content, or maintain the
              default. During this second step, the user may see a slight
              flicker on the screen, resulting in a poor user experience that we
              intended to avoid.
            </p>
            <TextSectionDesc>
              <strong>2) Designing Intuitive Variants - </strong>
              In addition to business logic, much of the typeahead logic that
              drives the autocomplete feature resides within the address input
              component as well. I wanted to differentiate this logic as well,
              leaving just a render layer/subcomponent at the bottom of the
              chain to handle conditional rendering.
            </TextSectionDesc>
          </TextSectionContainer>
        </Container>
        <Container id="get-the-app-project-implementation" size="lg">
          <PhoneFrameRow>
            <PhoneFrame
              imageAlt="iphone frame"
              imageSrc={require('assets/grubhub/projects/mweb-redesign/promotemweb-gh-iphone-option1.png')}
              caption="IPhone Option 1"
            />
            <PhoneFrame
              imageAlt="iphone frame"
              imageSrc={require('assets/grubhub/projects/mweb-redesign/promotemweb-gh-android-option2.png')}
              caption="Android Option 2"
            />
            <PhoneFrame
              imageAlt="iphone frame"
              imageSrc={require('assets/grubhub/projects/mweb-redesign/promotemweb-gh-iphone-option3.png')}
              caption="IPhone Option 3"
            />
          </PhoneFrameRow>
          <PhoneFrameRow>
            <PhoneFrame
              imageAlt="iphone frame"
              imageSrc={require('assets/grubhub/projects/mweb-redesign/promotemweb-gh-android-option1.png')}
              caption="Android Option 1"
            />
            <PhoneFrame
              imageAlt="iphone frame"
              imageSrc={require('assets/grubhub/projects/mweb-redesign/promotemweb-gh-android-option2.png')}
              caption="Android Option 2"
            />
            <PhoneFrame
              imageAlt="iphone frame"
              imageSrc={require('assets/grubhub/projects/mweb-redesign/promotemweb-gh-android-option3.png')}
              caption="Android Option 3"
            />
          </PhoneFrameRow>
        </Container>
        <Container id="get-the-app-project-review" size="lg">
          <TextSectionContainer>
            <TextSectionSubHeader>Stakeholder Review</TextSectionSubHeader>
            <TextSectionDesc>
              For this feature, review was a relatively straightforward process.
              There were a few small UI changes requested, but otherwise, the
              stakeholders were happy with the engineered feature.
            </TextSectionDesc>

            <TextSectionSubHeader>Testing & Code Review</TextSectionSubHeader>
            <TextSectionDesc>
              Never really got to these steps due to the end of my internship :(
            </TextSectionDesc>
          </TextSectionContainer>
        </Container>
      </GetTheAppComponent>
    </TransitionItem>
  );
}
