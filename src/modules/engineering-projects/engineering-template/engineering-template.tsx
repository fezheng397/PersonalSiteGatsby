import { Container } from 'components/core/container/container';
import { SubHeader } from 'components/core/headers/headers';
import { PhoneFrame } from 'components/core/phone-frame/phone-frame';
import {
  EngineeringHero,
  ProjectDetails,
} from 'modules/engineering-projects/engineering-template/engineering-hero';
import { EngineeringOverview } from 'modules/engineering-projects/engineering-template/engineering-overview';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IEngineeringTemplateProps {
  bannerImageSrc?: string;
  bannerHeader?: string;
  bannerSubHeader?: string;
}

export interface IEngineeringTemplateState {}

export const EngineeringTemplateContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const projectDetails: ProjectDetails[] = [
  { header: 'Duration', subHeader: 'Summer 2019 (3 mos)' },
  { header: 'Team', subHeader: 'Growth & Lifecycle' },
  { header: 'Platform', subHeader: 'Web, Front-end' },
];

export class EngineeringTemplate extends React.Component<
  IEngineeringTemplateProps,
  IEngineeringTemplateState
> {
  public render() {
    const { bannerImageSrc, children } = this.props;
    console.log('project details:', projectDetails);
    return (
      <div>
        <EngineeringHero
          bannerImageSrc={bannerImageSrc}
          projectDetails={projectDetails}
        />
        <EngineeringOverview />
        {children}
        <PhoneFrame
          imageAlt="iphone frame"
          imageSrc={require('assets/grubhub/projects/mweb-redesign/promotemweb-gh-iphone-option1.png')}
        />
        <PhoneFrame
          imageAlt="iphone frame"
          imageSrc={require('assets/grubhub/projects/autocomplete/autocomplete-demo-basic.gif')}
        />
        <PhoneFrame
          imageAlt="iphone frame"
          imageSrc={require('assets/grubhub/projects/city-carousel/city-carousel.gif')}
        />
      </div>
    );
  }
}
