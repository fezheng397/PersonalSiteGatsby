import React from 'react';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';

export interface ITransitionItemProps {
  appear?: boolean;
  className?: string;
  delay?: number;
  inState?: boolean;
  timeout: number;
  transitionType: 'fade' | 'fade-translate' | 'translate';
  translateX?: number;
  translateY?: number;
}

export interface ITransitionItemState {
  animate: boolean;
}

export interface IAnimationProps {
  animationState: string;
  delay?: number;
  timeout: number;
  translateX?: number;
  translateY?: number;
}

export const TransitionContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const Translate = styled(TransitionContainer)`
  transition: ${(props: IAnimationProps) => props.timeout}ms ease-out;
  transition-delay: ${(props: IAnimationProps) => props.delay}ms;
  transform: ${(props: IAnimationProps) =>
    props.animationState === 'entered'
      ? `translate(0, 0)`
      : `translate(${props.translateX}px, ${props.translateY}px)`};
`;

export const Fade = styled(TransitionContainer)`
  transition: ${(props: IAnimationProps) => props.timeout}ms ease-out;
  transition-delay: ${(props: IAnimationProps) => props.delay}ms;
  opacity: ${(props: IAnimationProps) =>
    props.animationState === 'entered' ? 1 : 0};
`;

export const FadeTranslate = styled(TransitionContainer)`
  transition: ${(props: IAnimationProps) => props.timeout}ms ease-out;
  transition-delay: ${(props: IAnimationProps) => props.delay}ms;
  opacity: ${(props: IAnimationProps) =>
    props.animationState === 'entered' ? 1 : 0};
  transform: ${(props: IAnimationProps) =>
    props.animationState === 'entered'
      ? `translate(0, 0)`
      : `translate(${props.translateX}px, ${props.translateY}px)`};
`;

export class TransitionItem extends React.PureComponent<
  ITransitionItemProps,
  ITransitionItemState
> {
  public static defaultProps = {
    appear: true,
    delay: 0,
    translateX: 0,
    translateY: 0,
  };

  public state = {
    animate: true,
  };

  public render() {
    const {
      appear,
      children,
      delay,
      inState,
      timeout,
      transitionType,
      translateX,
      translateY,
    } = this.props;
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
        {(state) => {
          if (transitionType === 'fade') {
            return (
              <Fade animationState={state} delay={delay} timeout={timeout}>
                {children}
              </Fade>
            );
          } else if (transitionType === 'translate') {
            return (
              <Translate
                animationState={state}
                delay={delay}
                timeout={timeout}
                translateX={translateX}
                translateY={translateY}
              >
                {children}
              </Translate>
            );
          } else if (transitionType === 'fade-translate') {
            return (
              <FadeTranslate
                animationState={state}
                delay={delay}
                timeout={timeout}
                translateX={translateX}
                translateY={translateY}
              >
                {children}
              </FadeTranslate>
            );
          }
        }}
      </Transition>
    );
  }
}
