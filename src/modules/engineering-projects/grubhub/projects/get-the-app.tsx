import { Container } from 'components/core/container/container';
import { SectionHeaderMajor } from 'components/core/headers/headers';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IGetTheAppProps {}

const GetTheAppComponent = styled(Container)``;

export function GetTheApp({  }: IGetTheAppProps) {
  return (
    <GetTheAppComponent>
      <SectionHeaderMajor>Homepage Hero Redesign</SectionHeaderMajor>
    </GetTheAppComponent>
  );
}
