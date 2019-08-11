import { Container } from 'components/core/container/container';
import { ProjectCard } from 'modules/engineering/components/project-card/project-card';
import React from 'react';
import styled from 'styled-components';

export interface IEngineeringProps {}

const EngineeringComponent = styled(Container)``;

export class Engineering extends React.Component<IEngineeringProps, {}> {
  public render() {
    return (
      <EngineeringComponent size="lg">
        <h1>Hi</h1>
      </EngineeringComponent>
    );
  }
}
