import React from 'react';
import styled from 'styled-components';

const ProjectNavComponent = styled.div`
  height: 120px;
  width: 100%;
  text-align: center;
`;

export function ProjectNav() {
  return (
    <ProjectNavComponent>
      <h1>Projects</h1>
    </ProjectNavComponent>
  );
}
