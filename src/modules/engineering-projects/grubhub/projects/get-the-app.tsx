import { Container } from 'components/core/container/container';
import { SectionHeaderMajor } from 'components/core/headers/headers';
import {
  PhoneFrame,
  PhoneFrameRow,
} from 'components/core/phone-frame/phone-frame';
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

export interface IGetTheAppProps {}

const GetTheAppComponent = styled(Container)``;

const getTheAppTemplate: IProjectTemplateProps = {
  imageAlt: 'Get The App Illustration',
  imageSrc: require('assets/grubhub/projects/autocomplete/autocomplete-icon.png'),
  imagePosition: 'right',
  objective: `To encourage users landing on the logged out homepage to download the mobile app without
  blocking their natural experience with a fullscreen pullover. The incentive for this is because app owners
  tend to have greater loyalty for a brand and as a result, provide a longer LTV (Lifetime Value).`,
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

export function GetTheApp({  }: IGetTheAppProps) {
  return (
    <GetTheAppComponent>
      <SectionHeaderMajor>Homepage Hero Redesign</SectionHeaderMajor>
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
    </GetTheAppComponent>
  );
}
