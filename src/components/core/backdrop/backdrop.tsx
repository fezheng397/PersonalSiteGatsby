import { TransitionItem } from 'components/core/transition/transition';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IBackdropProps {
  color: string;
  onClick?: (e) => void;
}

const BackdropComponent = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
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
    return (
      <TransitionItem timeout={150} transitionType="fade">
        <BackdropComponent {...this.props} />
      </TransitionItem>
    );
  }
  public componentDidMount() {
    document.documentElement.style.overflowY = 'hidden';
  }

  public componentWillUnmount() {
    document.documentElement.style.overflowY = 'scroll';
  }
}
