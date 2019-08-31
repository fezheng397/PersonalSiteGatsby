import { SectionSubHeader4 } from 'components/core/headers/headers';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IProjectTemplateProps {
  imageSrc: string;
  imageAlt: string;
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

export const TextSectionDesc = styled.p`
  margin-bottom: ${Styles.Spaces.spacing16};
`;

const ProjectTemplateSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${Styles.Spaces.section16} 0;

  ${Styles.MediaQuery.md} {
    flex-direction: column;
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

  ${Styles.MediaQuery.md} {
    max-width: 90%;
  }
`;

const ProjectSectionTextContainer = styled.div`
  margin-left: ${Styles.Spaces.section32};

  ${Styles.MediaQuery.md} {
    margin-left: 0;
    margin-top: ${Styles.Spaces.section8};
  }
`;

const ProjectTextSection = styled.div`
  padding-bottom: ${Styles.Spaces.spacing8}
  border-bottom: 2px solid #e6e6e6;
`;

export function ProjectTemplate({
  imageSrc,
  imageAlt,
  objective,
  roles,
}: IProjectTemplateProps) {
  return (
    <ProjectTemplateSection>
      <AutocompleteImageContainer>
        <AutocompleteImage alt={imageAlt} src={imageSrc} />
      </AutocompleteImageContainer>
      <ProjectSectionTextContainer>
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
              <li>
                <strong>
                  {idx + 1}) {role.roleHeader} - {}
                </strong>
                {role.roleDesc}
              </li>
            );
          })}
        </ul>
      </ProjectSectionTextContainer>
    </ProjectTemplateSection>
  );
}
