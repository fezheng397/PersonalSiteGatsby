import { Container } from 'components/core/container/container';
import { SectionHeaderMajor } from 'components/core/headers/headers';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IAutocompleteProps {}

const AutocompleteComponent = styled(Container)``;

export function Autocomplete({  }: IAutocompleteProps) {
  return (
    <AutocompleteComponent>
      <SectionHeaderMajor>Search Autocomplete</SectionHeaderMajor>
    </AutocompleteComponent>
  );
}
