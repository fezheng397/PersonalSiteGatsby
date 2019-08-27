import { Container } from 'components/core/container/container';
import { SectionHeaderMajor } from 'components/core/headers/headers';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IAutocompleteProps {}

const AutocompleteComponent = styled(Container)``;

const AutocompleteImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: ${Styles.Spaces.section8};
`;

const AutocompleteImage = styled.img`
  width: 350px;
`;

export function Autocomplete({  }: IAutocompleteProps) {
  return (
    <AutocompleteComponent size="lg">
      <SectionHeaderMajor>Search Autocomplete</SectionHeaderMajor>
      <AutocompleteImageContainer>
        <AutocompleteImage
          alt="Autocomplete Image"
          src={require('assets/grubhub/projects/autocomplete/autocomplete-icon.png')}
        />
      </AutocompleteImageContainer>
    </AutocompleteComponent>
  );
}
