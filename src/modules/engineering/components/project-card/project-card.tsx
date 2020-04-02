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
  logoOnly?: boolean;
}

const ProjectCardComponent = styled(Card)`
  width: 100%;
  min-width: 272px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

const ProjectCardFlexItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProjectImageContainer = styled(ProjectCardFlexItem)`
  max-width: 480px;
  align-items: center;
  border-radius: ${Styles.Sizes.radius5};
  background: ${Styles.Colors.bgGray};
  transition: ${Styles.Transitions.boxShadow};

  &:hover {
    box-shadow: ${Styles.Shadows.imageShadow};
  }

  ${Styles.MediaQuery.md} {
    flex-direction: column;
    box-shadow: ${Styles.Shadows.standard};
  }
`;

const ProjectDescContainer = styled.div`
  padding: ${Styles.Spaces.spacing4} 0;
`;

export const ProjectCardImage = styled.img`
  width: 100%;
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
        <ProjectImageContainer>
          <ProjectCardImage alt={imageDesc} src={imageSrc} />
        </ProjectImageContainer>
        <ProjectCardFlexItem>
          <ProjectDescContainer>
            <ProjectName>{projectName}</ProjectName>
            <ProjectSetting>
              {role} - {timePeriod}
            </ProjectSetting>
          </ProjectDescContainer>
        </ProjectCardFlexItem>
      </ProjectCardComponent>
    );
  }
}
