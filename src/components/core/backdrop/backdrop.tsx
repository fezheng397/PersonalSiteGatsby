import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IBackdropProps {
  color: string;
  onClick?: (e) => void;
}

const BackdropComponent = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background: ${(props: IBackdropProps) => props.color};
  opacity: 0.7;
  z-index: ${Styles.Dimensions.backdropZ};
`;

export class Backdrop extends React.Component<IBackdropProps> {
  public render() {
    return <BackdropComponent {...this.props} />;
  }
  public componentDidMount() {
    document.documentElement.style.overflow = 'hidden';
  }

  public componentWillUnmount() {
    document.documentElement.style.overflow = 'scroll';
  }
}
