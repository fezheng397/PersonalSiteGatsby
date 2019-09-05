import { SectionSubHeader4 } from 'components/core/headers/headers';
import { string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IProjectTemplateProps {
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  objective: string;
  roles: Role[];
}

export interface Role {
  roleHeader: string;
  roleDesc: string;
}

export const TextSectionContainer = styled.div`
  max-width: 550px;
  margin: 0 auto;
  align-items: center;
`;

export const TextSectionSubHeader = styled(SectionSubHeader4)`
  text-align: center;
  color: ${Styles.Colors.textLightBlack};
  margin: ${Styles.Spaces.spacing8} 0;
`;

export const BackgroundSectionSubHeader = styled(TextSectionSubHeader)`
  text-transform: initial;
  margin-top: 0;
  margin-bottom: ${Styles.Spaces.spacing4};
`;

export const TextSectionDesc = styled.p`
  margin-bottom: ${Styles.Spaces.spacing16};
`;

export const BackgroundSection = styled.div`
  background: ${(props: { bgColor: string }) => props.bgColor};
  border-radius: ${Styles.Sizes.radius5};
  color: #fff;
  padding: ${Styles.Spaces.section8} ${Styles.Spaces.section8};
`;

export const BackgroundSectionContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const BackgroundSectionList = styled.ul`
  list-style: disc;
  max-width: 400px;
`;

export const BackgroundSectionListItem = styled.li`
  margin-bottom: ${Styles.Spaces.spacing2};
`;

const ProjectTemplateSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${Styles.Spaces.section16} 0;

  ${Styles.MediaQuery.md} {
    flex-direction: column;
    margin: ${Styles.Spaces.section8} 0;
  }
`;

const ProjectSectionHeader = styled.div`
  margin: ${Styles.Spaces.spacing2} 0;
`;

const AutocompleteImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AutocompleteImage = styled.img`
  max-width: 400px;
  border-radius: ${Styles.Sizes.radius5};

  ${Styles.MediaQuery.md} {
    max-width: 90%;
  }
`;

const ProjectSectionTextContainer = styled.div`
  ${(props: IProjectTemplateProps) =>
    props.imagePosition === 'left'
      ? `margin-left: ${Styles.Spaces.section32};`
      : `margin-right: ${Styles.Spaces.section32};`}

  ${Styles.MediaQuery.md} {
    margin-left: 0;
    margin-top: ${Styles.Spaces.section8};
  }
`;

const ProjectTextSection = styled.div`
  padding-bottom: ${Styles.Spaces.spacing8};
  border-bottom: 2px solid #e6e6e6;
`;

export function ProjectTemplate(props: IProjectTemplateProps) {
  const { imageAlt, imageSrc, imagePosition, objective, roles } = props;

  return (
    <ProjectTemplateSection>
      {imagePosition === 'left' ? (
        <AutocompleteImageContainer>
          <AutocompleteImage alt={imageAlt} src={imageSrc} />
        </AutocompleteImageContainer>
      ) : null}

      <ProjectSectionTextContainer {...props}>
        <ProjectTextSection>
          <ProjectSectionHeader>
            <h2>Objective</h2>
          </ProjectSectionHeader>
          <p>{objective}</p>
        </ProjectTextSection>

        <ProjectSectionHeader>
          <h2>My Role</h2>
        </ProjectSectionHeader>
        <ul>
          {roles.map((role, idx) => {
            return (
              <li key={'role'.concat(idx.toString())}>
                <strong>
                  {idx + 1}) {role.roleHeader} - {}
                </strong>
                {role.roleDesc}
              </li>
            );
          })}
        </ul>
      </ProjectSectionTextContainer>
      {imagePosition === 'right' ? (
        <AutocompleteImageContainer>
          <AutocompleteImage alt={imageAlt} src={imageSrc} />
        </AutocompleteImageContainer>
      ) : null}
    </ProjectTemplateSection>
  );
}
