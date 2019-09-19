import { CenteredSectionHeader } from 'components/core/headers/headers';
import { TransitionItem } from 'components/core/transition/transition';
import { EngineeringTemplateContainer } from 'modules/engineering-projects/engineering-template/engineering-template';
import {
  TextSectionContainer,
  TextSectionDesc,
} from 'modules/engineering-projects/grubhub/projects/project-template';
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
  margin: ${Styles.Spaces.spacing16} 0 ${Styles.Spaces.spacing16} 0;

  ${Styles.MediaQuery.md} {
    margin: ${Styles.Spaces.spacing8} 0 ${Styles.Spaces.spacing8} 0;
  }
`;

const OverviewDescContainer = styled.div``;

const OverviewSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${Styles.Spaces.section16};
  align-items: center;

  ${Styles.MediaQuery.sm} {
    flex-direction: column;
  }
`;

const OverviewCoverImage = styled.img`
  width: 45%;
  height: 100%;
  border-radius: ${Styles.Sizes.radius4};

  ${Styles.MediaQuery.sm} {
    max-width: 340px;
    width: 100%;
    margin-bottom: ${Styles.Spaces.spacing8};
  }

  ${Styles.MediaQuery.xs} {
    width: 100%;
  }
`;

const OverviewWordContainer = styled.div`
  width: 45%;

  ${Styles.MediaQuery.sm} {
    width: 100%;
  }
`;

const OverviewDescription = styled.p`
  margin-bottom: ${Styles.Spaces.spacing8};
`;

const OverviewSectionHeader = styled.h3`
  color: ${Styles.Colors.textLightBlack};
  margin-bottom: ${Styles.Spaces.spacing6};
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

            <OverviewSection>
              <OverviewCoverImage
                alt="blah"
                src={require('assets/grubhub/grubhub-cover.jpg')}
              />
              <OverviewWordContainer>
                <OverviewSectionHeader>Background</OverviewSectionHeader>

                <OverviewDescription>
                  Over the summer, I worked with the Growth & Lifecycle (G&L)
                  team at Grubhub, a food pickup and delivery service. We were
                  responsible for driving new customers to our front-end web
                  platform and finding ways to better convert them. With the
                  growing popularity of food delivery services, I was extremely
                  excited to receive the opportunity to work with a well-known
                  commercial application serving millions of customers around
                  the US.
                </OverviewDescription>
              </OverviewWordContainer>
            </OverviewSection>
          </TransitionItem>
        </OverviewDescContainer>
      </OverviewContainer>
    </EngineeringTemplateContainer>
  );
}
