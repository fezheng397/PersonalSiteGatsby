import { SectionHeader } from 'components/core/headers/headers';
import { EngineeringTemplateContainer } from 'modules/engineering-projects/engineering-template/engineering-template';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IEngineeringOverviewProps {
  overviewDescription?: string;
}

const OverviewContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: ${Styles.Spaces.section16} 0;
`;

const OverviewImg = styled.img`
  height: 380px;
  width: 380px;
  border-radius: ${Styles.Sizes.radius4};
`;

const OverviewDescContainer = styled.div`
  margin-left: ${Styles.Spaces.spacing8};
  height: 100%;
`;

export function EngineeringOverview({
  overviewDescription,
}: IEngineeringOverviewProps) {
  return (
    <EngineeringTemplateContainer size="lg">
      <OverviewContainer>
        <OverviewImg src={require('assets/grubhub/grubhub-hq-3.jpg')} />
        <OverviewDescContainer>
          <SectionHeader>Overview</SectionHeader>
          <p>
            Hello this is a text description Hello this is a text description
            Hello this is a text description
          </p>
        </OverviewDescContainer>
      </OverviewContainer>
    </EngineeringTemplateContainer>
  );
}
