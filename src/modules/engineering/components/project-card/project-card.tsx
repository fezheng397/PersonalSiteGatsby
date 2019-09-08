import { Card } from "components/core/card/card";
import React from "react";
import styled from "styled-components";
import { Styles } from "vars";

export interface IProjectCardProps {
  imageDesc: string;
  imageSrc: string;
  location: string;
  projectName: string;
  role: string;
  timePeriod: string;
}

const ProjectCardComponent = styled(Card)`
  max-width: 800px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
`;

const ProjectCardFlexItem = styled.div`
  flex-basis: 50%;
`;

const ProjectImagecontainer = styled(ProjectCardFlexItem)`
  border-radius: ${Styles.Sizes.radius5};
  background: ${Styles.Colors.bgGray};
  transition: ${Styles.Transitions.boxShadow};

  &:hover {
    box-shadow: ${Styles.Shadows.imageShadow};
  }
`;

const ProjectCardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${Styles.Sizes.radius5};
`;

const ProjectName = styled.h2``;

const ProjectRole = styled.h4`
  color: ${Styles.Colors.textGreen};
`;

const ProjectSetting = styled.h4`
  color: ${Styles.Colors.textSubHeader};
`;

export class ProjectCard extends React.Component<IProjectCardProps, {}> {
  public render() {
    const {
      imageDesc,
      imageSrc,
      location,
      projectName,
      role,
      timePeriod
    } = this.props;
    return (
      <ProjectCardComponent>
        <ProjectImagecontainer>
          <ProjectCardImage alt={imageDesc} src={imageSrc} />
        </ProjectImagecontainer>
        <ProjectCardFlexItem>
          <ProjectName>{projectName}</ProjectName>
          <ProjectRole>{role}</ProjectRole>
          <ProjectSetting>
            {timePeriod} - {location}
          </ProjectSetting>
        </ProjectCardFlexItem>
      </ProjectCardComponent>
    );
  }
}
