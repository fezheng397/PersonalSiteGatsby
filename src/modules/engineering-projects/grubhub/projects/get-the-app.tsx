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
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IGetTheAppProps {}

const GetTheAppComponent = styled(Container)``;

export function GetTheApp({  }: IGetTheAppProps) {
  return (
    <GetTheAppComponent>
      <SectionHeaderMajor>Homepage Hero Redesign</SectionHeaderMajor>
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
