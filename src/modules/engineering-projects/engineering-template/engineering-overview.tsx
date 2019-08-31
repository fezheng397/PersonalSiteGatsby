import { CenteredSectionHeader } from 'components/core/headers/headers';
import { EngineeringTemplateContainer } from 'modules/engineering-projects/engineering-template/engineering-template';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IEngineeringOverviewProps {
  overviewDescription?: string;
}

const OverviewContainer = styled.div`
  width: 90%;
  margin-bottom: ${Styles.Spaces.section16};
`;

const OverviewHeader = styled(CenteredSectionHeader)`
  margin: ${Styles.Spaces.spacing16} 0;
`;

const OverviewDescContainer = styled.div``;

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
        <OverviewDescContainer>
          <OverviewHeader>Overview</OverviewHeader>
          <OverviewSection>
            <OverviewSectionHeader>
              <h2>Background</h2>
            </OverviewSectionHeader>
            <p>
              Over the summer, I worked with the Growth & Lifecycle team on the
              commercial, front-end web platform. Hello this is a text
              description Hello this is a text description Hello this is a text
              description Hello this is a text description Hello this is a text
              description Hello this is a text description Hello this is a text
              description Hello this is a text description Hello this is a text
              description Hello this is a text description Hello this is a text
              description Hello this is a text description
            </p>
          </OverviewSection>
        </OverviewDescContainer>
      </OverviewContainer>
    </EngineeringTemplateContainer>
  );
}
