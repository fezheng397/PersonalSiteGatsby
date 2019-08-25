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

const OverviewHeader = styled(SectionHeader)`
  color: ${Styles.Colors.textGHPurple};
`;

const OverviewDescContainer = styled.div`
  margin-left: ${Styles.Spaces.spacing8};
  height: 100%;
`;

const OverviewSection = styled.div`
  margin-bottom: ${Styles.Spaces.spacing4};
`;

const OverviewSectionHeader = styled.div`
  margin-bottom: ${Styles.Spaces.spacing2};
`;

export function EngineeringOverview({
  overviewDescription,
}: IEngineeringOverviewProps) {
  return (
    <EngineeringTemplateContainer size="lg">
      <OverviewContainer>
        <OverviewImg src={require('assets/grubhub/grubhub-hq-3.jpg')} />
        <OverviewDescContainer>
          <OverviewHeader>Overview</OverviewHeader>
          <OverviewSection>
            <OverviewSectionHeader>
              <h2>Background</h2>
            </OverviewSectionHeader>
            <p>
              Hello this is a text description Hello this is a text description
            </p>
          </OverviewSection>

          <h2>My Role</h2>
          <p>
            Hello this is a text description Hello this is a text description
          </p>
        </OverviewDescContainer>
      </OverviewContainer>
    </EngineeringTemplateContainer>
  );
}
