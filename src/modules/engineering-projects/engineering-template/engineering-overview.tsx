import { SectionHeader } from 'components/core/headers/headers';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IEngineeringOverviewProps {
  overviewDescription?: string;
}

const OverviewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: ${Styles.Spaces.section16} 0;
`;

const OverviewImg = styled.img`
  height: 380px;
  width: 550px;
  border-radius: ${Styles.Sizes.radius4};
`;

const OverviewDescContainer = styled.div``;

export function EngineeringOverview({
  overviewDescription,
}: IEngineeringOverviewProps) {
  return (
    <OverviewContainer>
      <OverviewImg src={require('assets/grubhub/grubhub-hq-3.jpg')} />
      <OverviewDescContainer>
        <SectionHeader>Overview</SectionHeader>
        <p>Hello this is a text description</p>
      </OverviewDescContainer>
    </OverviewContainer>
  );
}
