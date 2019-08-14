import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface ILogoProps {
  className?: string;
  height?: number;
  imageType?: 'svg' | 'png';
  logo?: string;
  width?: number;
}

const LogoComponent = styled.div`
  height: 50px;
  width: 50px;
  border-radius: ${Styles.Sizes.radiusCircle}
  box-shadow: rgba(218, 225, 233, 0.557) 0px 8px 16px;
`;

const LogoImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: ${Styles.Sizes.radiusCircle};
`;

export function Logo({ className, logo }: ILogoProps) {
  return (
    <LogoComponent className={className}>
      <LogoImage src={logo} />
    </LogoComponent>
  );
}
