import { Container } from 'components/core/container/container';
import { SectionHeaderMajor } from 'components/core/headers/headers';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface ICityPageProps {}

const CityPageComponent = styled(Container)``;

export function CityPage({  }: ICityPageProps) {
  return (
    <CityPageComponent>
      <SectionHeaderMajor>City Page Carousel</SectionHeaderMajor>
    </CityPageComponent>
  );
}
