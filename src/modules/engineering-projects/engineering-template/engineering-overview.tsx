import { GHSectionHeader } from 'components/core/headers/headers';
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

const OverviewHeader = styled(GHSectionHeader)`
  margin: ${Styles.Spaces.spacing16};
`;

const OverviewImg = styled.img`
  height: 380px;
  width: 380px;
  border-radius: ${Styles.Sizes.radius4};
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
              Hello this is a text description Hello this is a text description
              Hello this is a text description Hello this is a text description
              Hello this is a text description Hello this is a text description
              Hello this is a text description Hello this is a text description
              Hello this is a text description Hello this is a text description
              Hello this is a text description Hello this is a text description
            </p>
          </OverviewSection>
          <OverviewSectionHeader>
            <h2>My Role</h2>
          </OverviewSectionHeader>
          <ul>
            <li>
              <strong>1)</strong> Hello this is a text description Hello this is
              a text description
            </li>
            <li>
              <strong>2)</strong> Hello this is a text description Hello this is
              a text description
            </li>
            <li>
              <strong>3)</strong> Hello this is a text description Hello this is
              a text description
            </li>
          </ul>
        </OverviewDescContainer>
      </OverviewContainer>
    </EngineeringTemplateContainer>
  );
}
