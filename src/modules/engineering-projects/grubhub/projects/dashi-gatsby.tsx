import { Container } from 'components/core/container/container';
import { SectionHeaderMajor } from 'components/core/headers/headers';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IDashiGatsbyProps {}

const DashiGatsbyComponent = styled(Container)``;

export function DashiGatsby({  }: IDashiGatsbyProps) {
  return (
    <DashiGatsbyComponent>
      <SectionHeaderMajor>Dashy - Gatsby</SectionHeaderMajor>
    </DashiGatsbyComponent>
  );
}
