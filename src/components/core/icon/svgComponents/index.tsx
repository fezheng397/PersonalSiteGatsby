import { SvgAutocompleteIconRotated } from 'components/core/icon/svgComponents/autocomplete-icon-rotated';
import { SvgCityIcon } from 'components/core/icon/svgComponents/city-icon';
import { SvgGatsbyIcon } from 'components/core/icon/svgComponents/gatsby-icon';
import { SvgGetTheAppIcon } from 'components/core/icon/svgComponents/get-the-app-icon';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface ISVGComponentProps {
  className?: string;
  icon: string;
}

const IconContainer = styled.div`
  width: 75px;
  height: 75px;
  margin-bottom: ${Styles.Spaces.spacing2};
`;

export class SVGComponent extends React.Component<ISVGComponentProps, {}> {
  public render() {
    const { className, icon } = this.props;

    return (
      <IconContainer className={className}>{this.getIcon(icon)}</IconContainer>
    );
  }

  private getIcon = (icon: string) => {
    switch (icon) {
      case 'AutocompleteIcon':
        return <SvgAutocompleteIconRotated />;
      case 'GetTheAppIcon':
        return <SvgGetTheAppIcon />;
      case 'GatsbyIcon':
        return <SvgGatsbyIcon />;
      case 'CityIcon':
        return <SvgCityIcon />;
      default:
        return null;
    }
  }
}
