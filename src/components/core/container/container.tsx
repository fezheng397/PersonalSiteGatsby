import React from 'react';
import styled from 'styled-components';

export interface IContainerProps {
  className?: string;
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
`;

export class Container extends React.Component<IContainerProps, {}> {
  public render() {
    const { children, className, size } = this.props;
    return (
      <ContainerComponent className={className} size={size}>
        {children}
      </ContainerComponent>
    );
  }
}
