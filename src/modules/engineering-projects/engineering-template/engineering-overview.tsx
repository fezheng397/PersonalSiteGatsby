import {
  CenteredSectionHeader,
  SectionSubHeader4,
} from 'components/core/headers/headers';
import { TransitionItem } from 'components/core/transition/transition';
import { EngineeringTemplateContainer } from 'modules/engineering-projects/engineering-template/engineering-template';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';
export interface IEngineeringOverviewProps {
  overviewDescription?: string;
}

const OverviewContainer = styled.div`
  width: 90%;
  margin-bottom: ${Styles.Spaces.section4};
`;

const OverviewHeader = styled(CenteredSectionHeader)`
  margin: ${Styles.Spaces.spacing16} 0 ${Styles.Spaces.spacing4} 0;

  ${Styles.MediaQuery.md} {
    margin: ${Styles.Spaces.spacing8} 0;
  }
`;

const OverviewDescContainer = styled.div``;

const OverviewSection = styled.div`
  margin-bottom: ${Styles.Spaces.spacing4};
`;

const OverviewSectionHeader = styled.h3`
  color: ${Styles.Colors.textLightBlack};
  margin-bottom: ${Styles.Spaces.spacing8};
`;

export function EngineeringOverview({
  overviewDescription,
}: IEngineeringOverviewProps) {
  return (
    <EngineeringTemplateContainer size="lg">
      <OverviewContainer>
        <OverviewDescContainer>
          <TransitionItem
            timeout={400}
            delay={50}
            transitionType="fade-translate"
            translateY={100}
          >
            <OverviewHeader>Overview</OverviewHeader>
          </TransitionItem>
          <TransitionItem
            timeout={500}
            delay={400}
            transitionType="fade-translate"
            translateY={100}
          >
            <OverviewSection>
              <OverviewSectionHeader>Background</OverviewSectionHeader>
              <p>
                Over the summer, I worked with the Growth & Lifecycle (G&L) team
                on the commercial, front-end web platform. Hello this is a text
                description Hello this is a text description Hello this is a
                text description Hello this is a text description Hello this is
                a text description Hello this is a text description Hello this
                is a text description Hello this is a text description Hello
                this is a text description Hello this is a text description
                Hello this is a text description Hello this is a text
                description
              </p>
            </OverviewSection>
          </TransitionItem>
        </OverviewDescContainer>
      </OverviewContainer>
    </EngineeringTemplateContainer>
  );
}
