import { EngineeringTemplate } from 'modules/engineering-projects/engineering-template/engineering-template';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

const OverviewSection = styled.div`
  margin-top: ${Styles.Spaces.section32};
`;

export class GrubhubProject extends React.Component {
  public render() {
    return (
      <EngineeringTemplate>
        <OverviewSection>
          <h1>Overview</h1>
        </OverviewSection>
      </EngineeringTemplate>
    );
  }
}
