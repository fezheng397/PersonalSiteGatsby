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
  width: 800px;
  min-width: 272px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  transition: ${Styles.Transitions.boxShadow};

  &:hover {
    box-shadow: ${Styles.Shadows.imageShadowHover};
  }

  ${Styles.MediaQuery.md} {
    flex-direction: column;
    box-shadow: ${Styles.Shadows.imageShadow};
  }
`;

const ProjectCardFlexItem = styled.div`
  flex-basis: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectImagecontainer = styled(ProjectCardFlexItem)`
  flex-basis: 55%;
  height: 400px;
  width: 100%;
  border-radius: ${Styles.Sizes.radius5};
  background: ${Styles.Colors.bgGray};
`;

const ProjectDescContainer = styled.div`
  padding: ${Styles.Spaces.spacing4};
`;

const ProjectCardImage = styled.img`
  width: 60%;
  height: 60%;
  border-radius: ${Styles.Sizes.radius5};
`;

const ProjectName = styled.h1``;

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
          <ProjectDescContainer>
            <ProjectName>{projectName}</ProjectName>
            <ProjectRole>{role}</ProjectRole>
            <ProjectSetting>
              {timePeriod} - {location}
            </ProjectSetting>
          </ProjectDescContainer>
        </ProjectCardFlexItem>
      </ProjectCardComponent>
    );
  }
}
