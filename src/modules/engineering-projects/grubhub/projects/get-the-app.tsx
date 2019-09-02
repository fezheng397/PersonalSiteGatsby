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

const GetTheAppComponent = styled(Container)``;

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
              rather potential improvement that coudl be made. In the food
              delivery space, because customers typically show greater loyalty
              to a brand after downloading their app, our PMs wanted to create a
              call to action to download the app right on the front page of our
              web app. The greater loyalty a customer shows for the brand, the
              greater their LTV (Lifetime Value) and the greater the benefit to
              Grubhub's operations.
            </TextSectionDesc>

            <TextSectionSubHeader>Reviewing Expectations</TextSectionSubHeader>
            <TextSectionDesc>
              On entering the current Grubhub landing page, you are prompted to
              click on the input to begin entering your address and discover
              delivery near your location. However, on mobile web, the
              autocomplete results are blocked by the keyboard unless you scroll
              down, presenting an inconvenient user experience on the most
              important page for new customer acquisition.
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
        <Container id="autocomplete-project-review" size="lg">
          <TextSectionContainer>
            <TextSectionSubHeader>Stakeholder Review</TextSectionSubHeader>
            <TextSectionDesc>
              After the implementation was complete, I moved onto stakeholder
              review, ensuring both the designers and the product managers
              involved throughout the process were satisfied with the engineered
              feature. Typically, this step was pretty straightforward during my
              3 months at Grubhub. However, for this project there was a scope
              change midway through.
            </TextSectionDesc>

            <TextSectionSubHeader>Testing</TextSectionSubHeader>
            <TextSectionDesc>
              Once the stakeholders were satisfied, I moved on to testing. For 
            </TextSectionDesc>
          </TextSectionContainer>
          <BackgroundSection bgColor={Styles.Colors.bgGray}>
            <p>This is a text description</p>
          </BackgroundSection>
          <TextSectionContainer>
            <TextSectionSubHeader>Code Review</TextSectionSubHeader>
            <TextSectionDesc>
              The code-review process for this particular project dragged on for
              a long time.
            </TextSectionDesc>
          </TextSectionContainer>
        </Container>
      </GetTheAppComponent>
    </TransitionItem>
  );
}
