import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IContainerProps {
  className?: string;
  id?: string;
  noMobilePadding?: boolean;
  noPadding?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'fluid';
}

const sizes = {
  sm: '600px',
  md: '800px',
  lg: '1040px',
  fluid: '100%',
};

const ContainerComponent = styled.div`
  max-width: ${(props: IContainerProps) => sizes[props.size]};
  margin: 0 auto;
  ${(props: IContainerProps) =>
    !props.noPadding
      ? `
  padding: 0 ${Styles.Spaces.mobileSmall};
`
      : null}

  ${Styles.MediaQuery.sm} {
    ${(props: IContainerProps) =>
      !props.noMobilePadding && !props.noPadding
        ? `
        padding: 0 ${Styles.Spaces.mobileSmall};
      `
        : 'padding: 0;'}
  }
`;

export class Container extends React.Component<IContainerProps, {}> {
  public render() {
    const { children, className, id, noMobilePadding, size } = this.props;
    return (
      <ContainerComponent
        className={className}
        id={id}
        noMobilePadding={noMobilePadding}
        size={size}
      >
        {children}
      </ContainerComponent>
    );
  }
}
