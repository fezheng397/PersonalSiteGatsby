import { Container } from "components/core/container/container";
import { SectionHeader } from "components/core/headers/headers";
import { StyledLink } from "components/core/link/link-styles";
import { ProjectCard } from "modules/engineering/components/project-card/project-card";
import React from "react";
import styled from "styled-components";
import { Styles } from "vars";

export interface IEngineeringProps {}

const EngineeringComponent = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: ${Styles.Spaces.spacing8};
  padding-bottom: ${Styles.Spaces.spacing8};
`;

const ProjectContainer = styled.div`
  padding: ${Styles.Spaces.spacing8} 0;
`;

export class Engineering extends React.Component<IEngineeringProps, {}> {
  public render() {
    return (
      <EngineeringComponent size="lg">
        <ProjectContainer>
          <StyledLink to="/engineering/grubhub">
            <ProjectCard
              imageDesc="Grubhub Project"
              imageSrc={require("assets/logos/GrubHub_Logo_2016.svg")}
              location="New York, NY"
              projectName="Grubhub"
              role="Software Engineer Intern"
              timePeriod="Summer 2019"
            />
          </StyledLink>
        </ProjectContainer>
      </EngineeringComponent>
    );
  }
}
