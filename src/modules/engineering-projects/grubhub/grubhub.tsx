import { EngineeringTemplate } from 'modules/engineering-projects/engineering-template/engineering-template';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export class GrubhubProject extends React.Component {
  public render() {
    return (
      <EngineeringTemplate
        bannerImageSrc={require('assets/grubhub/grubhub-hq.jpeg')}
      />
    );
  }
}
