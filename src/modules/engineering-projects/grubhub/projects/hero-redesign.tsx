import { Container } from 'components/core/container/container';
import { SectionHeaderMajor } from 'components/core/headers/headers';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IHeroRedesignProps {}

const HeroRedesignComponent = styled(Container)``;

export function HeroRedesign({  }: IHeroRedesignProps) {
  return (
    <HeroRedesignComponent>
      <SectionHeaderMajor>Homepage Hero Redesign</SectionHeaderMajor>
    </HeroRedesignComponent>
  );
}
