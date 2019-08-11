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
`;

const ProjectCardImage = styled.img`
  width: 300px;
  height: 172px;
  border-radius: ${Styles.Sizes.radius5};
  background: ${Styles.Colors.bgGray};
`;

const ProjectName = styled.h1``;

const ProjectRole = styled.h3`
  color: ${Styles.Colors.textGreen};
`;

const ProjectSetting = styled.h3`
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
        <ProjectCardImage alt={imageDesc} src={imageSrc} />
        <h1>{projectName}</h1>
        <ProjectRole>{role}</ProjectRole>
        <ProjectSetting>
          {timePeriod} - {location}
        </ProjectSetting>
      </ProjectCardComponent>
    );
  }
}
