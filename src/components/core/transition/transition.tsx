import React from 'react';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';

export interface ITransitionItemProps {
  appear?: boolean;
  inState?: boolean;
  timeout: number;
}

export interface ITransitionItemState {
  animate: boolean;
}

export interface IAnimationProps {
  animationState: string;
  timeout: number;
}

export const Fade = styled.div`
  transition: ${(props: IAnimationProps) => props.timeout}ms;
  opacity: ${(props: IAnimationProps) =>
    props.animationState === 'entered' ? 1 : 0};
`;

export class TransitionItem extends React.PureComponent<
  ITransitionItemProps,
  ITransitionItemState
> {
  public static defaultProps = {
    appear: true,
  };

  public state = {
    animate: true,
  };

  public render() {
    const { appear, children, inState, timeout } = this.props;
    const { animate } = this.state;
    console.log('instate:', inState);
    return (
      <Transition
        in={inState ? inState : animate}
        timeout={timeout}
        appear={appear}
        unmountOnExit={true}
        mountOnEnter={true}
      >
        {(state) => (
          <Fade animationState={state} timeout={timeout}>
            {children}
          </Fade>
        )}
      </Transition>
    );
  }
}
