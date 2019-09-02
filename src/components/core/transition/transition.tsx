import React from 'react';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';

export interface ITransitionItemProps {
  timeout: number;
}

export interface ITransitionItemState {
  animate: boolean;
}

export const Fade = styled.div`
  transition: opacity 0.5s;
  opacity: ${(props: { animationState: string }) =>
    props.animationState === 'entered' ? 1 : 0};
`;

export class TransitionItem extends React.PureComponent<
  ITransitionItemProps,
  ITransitionItemState
> {
  public state = {
    animate: true,
  };

  public render() {
    const { children, timeout } = this.props;
    const { animate } = this.state;

    return (
      <Transition
        in={animate}
        timeout={timeout}
        appear={true}
        unmountOnExit={true}
        mountOnEnter={true}
      >
        {(state) => <Fade animationState={state}>{children}</Fade>}
      </Transition>
    );
  }
}
