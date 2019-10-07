import { Container } from 'components/core/container/container';
import { SectionHeaderMajor } from 'components/core/headers/headers';
import {
  PhoneFrame,
  PhoneFrameRow,
} from 'components/core/phone-frame/phone-frame';
import { TransitionItem } from 'components/core/transition/transition';
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

export interface ICityPageProps {}

const CityPageComponent = styled.div``;

const cityPageTemplate: IProjectTemplateProps = {
  imageAlt: 'City Page Illustration',
  imageSrc: require('assets/grubhub/projects/city-carousel/city-page-cover.png'),
  imagePosition: 'left',
  objective: `To extend Grubhub's current carousel component to include a new design pattern.`,
  roles: [
    {
      roleHeader: 'Design Review',
      roleDesc:
        'Working with product designers and managers to ensure feasibility of a feature\'s design from an engineering standpoint',
    },
    {
      roleHeader: 'Implementation',
      roleDesc: 'Responsible for implementing the feature end to end.',
    },
  ],
};

export function CityPage({  }: ICityPageProps) {
  return (
    <TransitionItem timeout={300} transitionType="fade">
      <CityPageComponent>
        <SectionHeaderMajor>Best Restaurants</SectionHeaderMajor>
        <Container id="city-page-project-header" size="lg">
          <ProjectTemplate
            imageAlt={cityPageTemplate.imageAlt}
            imageSrc={cityPageTemplate.imageSrc}
            imagePosition={cityPageTemplate.imagePosition}
            objective={cityPageTemplate.objective}
            roles={cityPageTemplate.roles}
          />
        </Container>
        <Container id="city-page-project-analysis" size="lg">
          <TextSectionContainer>
            <TextSectionSubHeader>Problem Statement</TextSectionSubHeader>
            <TextSectionDesc>
              While plannning out the design for the new City pages which listed
              the top delivery restaurants from a city, we discovered the need
              to extend our carousel pattern. As I was implementing the
              additions, I found our current component lacking functionalities
              such as locking to the nearest item after swiping. Because the
              city page carousels were image-focused, the lack of such features
              led to an awkward user experience.
            </TextSectionDesc>
            <TextSectionSubHeader>Feature Architecture</TextSectionSubHeader>
            <p>
              A large part of planning how to implement the city page carousel
              for the best restaurant page was understanding the current
              implementation of the component. Grubhub's carousel only had one
              primary variation which did not support both the styling and some
              of the functionalities expected in the new pattern. I divided the
              new requirements into three categories...
            </p>
            <p>
              <strong>1) Visual Variations - </strong>In the past, Grubhub's
              website had not needed the common image carousel pattern seen in
              apps like Instagram or AirBnB. As a result, I needed the
              component's rendering layer to include more conditional,
              prop-based options.
            </p>
            <p>
              <strong>2) Locking to Item on Swipe - </strong>
              In addition to just the visuals, image based carousels had a few
              functionalities our current one lacked. Because the carousel
              currently utilized overflow scrolling along with
              requestAnimationFrame move between items, I opted to include a
              separate swiping implementation using transform translate CSS.
              This was done because of certain visual/experience bugs that,
              although not detrimental to functionality, created unexpected
              behaviors for a user.
            </p>
            <TextSectionDesc>
              <strong>3) Infinite Scrolling - </strong>
              Our current carousel provided a finite catalog of items. Once you
              reached the end, you had to scroll back to the beginning to see
              the prior items again. I planned on adding a propified
              modification to the way it processed the item list on moving
              between items to recycled items once the list ended.
            </TextSectionDesc>
          </TextSectionContainer>
        </Container>
        <Container id="get-the-app-project-implementation" size="lg">
          <TextSectionContainer>
            <TextSectionSubHeader>Implementation</TextSectionSubHeader>
          </TextSectionContainer>
          <PhoneFrameRow>
            <PhoneFrame
              imageAlt="iphone frame"
              imageSrc={require('assets/grubhub/projects/city-carousel/city-page-hero.png')}
              caption="Best Restaurants Hero"
            />
            <PhoneFrame
              imageAlt="iphone frame"
              imageSrc={require('assets/grubhub/projects/city-carousel/city-page-pizza-hut.png')}
              caption="Best Restaurants Standard"
            />
            <PhoneFrame
              imageAlt="iphone frame"
              imageSrc={require('assets/grubhub/projects/city-carousel/city-page-placeholder.png')}
              caption="Best Restaurants Placeholder"
            />
          </PhoneFrameRow>
        </Container>
        <Container id="get-the-app-project-review" size="lg">
          <TextSectionContainer>
            <TextSectionSubHeader>Stakeholder Review</TextSectionSubHeader>
            <TextSectionDesc>
              Despite a bit of resistance while planning and implementing the
              feature, stakeholder review was relatively straightforward aside
              from a few minor visual changes requested by the designer. The one
              blocker was a missing spec for the tablet view, which was quickly
              resolved and implemented. It's important to note that after the
              first stakeholder review which contained the visual changes, I
              proposed the new functionalities to the PM who allowed me to
              proceed with the additionional changes. As a result, this project
              went through the typical development process twice. Because of
              time constraints, I was only able to finish one of the two and the
              infinite looping functionality was put on the backlog.
            </TextSectionDesc>
            <TextSectionSubHeader>Testing</TextSectionSubHeader>
            <TextSectionDesc>
              Testing was primarily ensuring the new changes to conditional
              rendering and props didn't have unintended effects on the rest of
              the carousels throughout the site. In addition, testing the new
              swiping changes.
            </TextSectionDesc>
            <TextSectionSubHeader>Code Review</TextSectionSubHeader>
            <TextSectionDesc>
              Code review went surprisingly well for this feature. This was
              mainly because throughout the process, I worked with a few senior
              engineers through crucial implementation decisions, meaning much
              of the conceptual design of the feature was already up to our
              team's standards.
            </TextSectionDesc>
          </TextSectionContainer>
        </Container>
      </CityPageComponent>
    </TransitionItem>
  );
}
