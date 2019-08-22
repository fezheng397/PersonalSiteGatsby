import { Card } from 'components/core/card/card';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IProjectCardProps {
  imageDesc: string;
  imageSrc: string;
  location: string;
  projectName: string;
  role: string;
  timePeriod: string;
}

const ProjectCardComponent = styled(Card)`
  width: 300px;
  height: 100%;
  cursor: pointer;
`;

const ProjectImagecontainer = styled.div`
  width: 300px;
  height: 175px;
  border-radius: ${Styles.Sizes.radius5};
  background: ${Styles.Colors.bgGray};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${Styles.Spaces.spacing2};
  transition: ${Styles.Transitions.boxShadow};

  &:hover {
    box-shadow: ${Styles.Shadows.imageShadow};
  }
`;

const ProjectCardImage = styled.img`
  width: 220px;
  height: 129px;
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
      timePeriod,
    } = this.props;
    return (
      <ProjectCardComponent>
        <ProjectImagecontainer>
          <ProjectCardImage alt={imageDesc} src={imageSrc} />
        </ProjectImagecontainer>

        <ProjectName>{projectName}</ProjectName>
        <ProjectRole>{role}</ProjectRole>
        <ProjectSetting>
          {timePeriod} - {location}
        </ProjectSetting>
      </ProjectCardComponent>
    );
  }
}
