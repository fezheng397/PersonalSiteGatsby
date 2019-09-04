import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IBackdropProps {
  color: string;
}

const BackdropComponent = styled.div`
  z-index: ${Styles.Dimensions.backdropZ};
`;

export function Backdrop() {}
