import { Button } from 'components/core/button/button';
import { Container } from 'components/core/container/container';
import { SubHeader } from 'components/core/headers/headers';
import { CenteredSectionHeader } from 'components/core/headers/headers';
import { Icon } from 'components/core/icon/icon';
import { StyledLink } from 'components/core/link/link-styles';
import { TransitionItem } from 'components/core/transition/transition';
import {
  ProjectCardImage,
  ProjectImageContainer,
} from 'modules/engineering/components/project-card/project-card';
import React from 'react';
import styled from 'styled-components';
import { internalLinkEvent } from 'utilities/analytics';
import { Styles } from 'vars';

export interface IProjectIteratorButtonProps {
  buttonType: 'Next' | 'Prev';
  projectLink?: string;
  linkType?: 'External' | 'Internal';
  projectName?: string;
  projectImage?: string;
}

const ProjectNavButton = styled(Button)`
  flex-direction: column;
  align-items: ${(props: IProjectIteratorButtonProps) =>
    props.buttonType === 'Prev' ? 'flex-start' : 'flex-end'};
  padding: ${Styles.Spaces.spacing6};
  border-radius: ${Styles.Sizes.radius4};
  transition: background 150ms ease-in;
  width: 100%;
  flex-basis: 50%;

  &:hover {
    background: ${Styles.Colors.bgGray};
  }
`;

const ProjectNavButtonLabel = styled.div`
  display: flex;
  margin-bottom: ${Styles.Spaces.spacing4};
`;

const ProjectNavButtonText = styled.h3`
  padding: 0 ${Styles.Spaces.spacing4};
  color: ${Styles.Colors.textLightBlack};
`;

const TemplateProjectImage = styled(ProjectImageContainer)`
  max-width: 200px;

  &:hover {
    box-shadow: none;
  }
`;

export class ProjectIteratorButton extends React.Component<
  IProjectIteratorButtonProps
> {
  public render() {
    const { buttonType, projectName, projectImage, projectLink } = this.props;

    return (
      <a
        href={projectLink}
        target="_blank"
        onClick={() => {
          internalLinkEvent(projectName);
        }}
      >
        <ProjectNavButton buttonType={buttonType}>
          <ProjectNavButtonLabel>
            {buttonType === 'Prev' ? (
              <Icon
                icon="arrow-right"
                rotate={180}
                fill={Styles.Colors.textLightBlack}
                height={30}
                width={30}
              />
            ) : null}
            <ProjectNavButtonText>{buttonType}</ProjectNavButtonText>
            {buttonType === 'Next' ? (
              <Icon
                icon="arrow-right"
                fill={Styles.Colors.textLightBlack}
                height={30}
                width={30}
              />
            ) : null}
          </ProjectNavButtonLabel>

          <TemplateProjectImage>
            <ProjectCardImage src={projectImage} />
          </TemplateProjectImage>
        </ProjectNavButton>
      </a>
    );
  }
}
