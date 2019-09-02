import { Button } from 'components/core/button/button';
import { IconProvider } from 'components/core/icon-provider/icon-provider';
import { Icon } from 'components/core/icon/icon';
import { SVGComponent } from 'components/core/icon/svgComponents';
import { SvgAutocompleteIconRotated } from 'components/core/icon/svgComponents/autocomplete-icon-rotated';
import { SvgGetTheAppIcon } from 'components/core/icon/svgComponents/get-the-app-icon';
import { StyledLink } from 'components/core/link/link-styles';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  checkRelativePosition,
  getCurrentWindowPosition,
  scrollTo,
  WindowUtil,
} from 'utilities/window-util';
import { Styles } from 'vars';

export interface IProjectNavProps {
  selectNewProject: (newProject: number) => void;
}

export interface IProjectNavState {
  fixPosition: boolean;
  currentY: number;
  projectNavRef?: any;
}

const ProjectNavComponent = styled.div`
  ${(props: { fixPosition?: boolean }) =>
    props.fixPosition ? 'position: fixed; top: 0;' : ''}
  background: ${Styles.Colors.primaryWhite};
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 9000;
`;

const NavItems = styled.ul`
  list-style: none;
  text-align: center;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;

const NavItem = styled.li``;

const shake = () => keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const ProjectAnchor = styled.a`
  text-decoration: none;
`;

const NavButton = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${Styles.Spaces.spacing2} ${Styles.Spaces.spacing16};
  color: ${Styles.Colors.textLightBlack};

  ${Styles.MediaQuery.md} {
    padding: ${Styles.Spaces.spacing2} ${Styles.Spaces.spacing10};
  }

  &:hover,
  &:active {
    color: ${Styles.Colors.textOffBlack};

    #autocomplete-icon-rotated_svg__IPhone {
      transform: rotate(-10deg) scale(1.3);
      transform-origin: 50% 50%;
      transition: all 0.25s ease-out;
    }

    #autocomplete-icon-rotated_svg__Search {
      transform: rotate(6deg) translateY(3px) scale(1.3);
      transform-origin: 50% 50%;
      transition: all 0.25s ease-out;
    }

    #project-icon__background {
      transform: scale(0.9);
      transform-origin: 50% 50%;
      transition: all 0.25s ease-out;
    }

    #get-the-app-icon_svg__grubhub {
      transform: scale(1.8);
      transform-origin: 50% 50%;
      transition: all 0.25s ease-out;
    }

    #get-the-app-icon_svg__google-play {
      transform: rotate(15deg) scale(0.9) translateX(15px);
      transform-origin: 50% 50%;
      transition: all 0.25s ease-out;
    }

    #get-the-app-icon_svg__apple-appstore {
      transform: rotate(-15deg) scale(0.9) translateX(-15px);
      transform-origin: 50% 50%;
      transition: all 0.25s ease-out;
    }

    #get-the-app-icon_svg__IPhone {
      transform: scale(1.3);
      transform-origin: 50% 50%;
      transition: all 0.25s ease-out;
    }

    #gatsby-icon_svg__logo {
      transform: scale(1.25);
      transform-origin: 50% 50%;
      transition: all 0.25s ease-out;
    }

    #city-icon_svg__restaurant {
      transform: scale(1.3) translateY(7px);
      transform-origin: 50% 50%;
      transition: all 0.25s ease-out;
    }

    #city-icon_svg__building {
      transform: scale(1.2);
      transform-origin: 50% 50%;
      transition: all 0.25s ease-out;
    }
  }
`;

const AnimatedIcon = styled(SVGComponent)`
  width: 75px;
  height: 75px;
  margin-bottom: ${Styles.Spaces.spacing2};

  #autocomplete-icon-rotated_svg__IPhone {
    transform: rotate(0) scale(1);
    transform-origin: 50% 50%;
    transition: all 0.25s ease-out;
  }

  #autocomplete-icon-rotated_svg__Search {
    transform: rotate(0) translateY(0) scale(1);
    transform-origin: 50% 50%;
    transition: all 0.25s ease-out;
  }

  #project-icon__background {
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: all 0.25s ease-out;
  }

  #get-the-app-icon_svg__grubhub {
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: all 0.25s ease-out;
  }

  #get-the-app-icon_svg__google-play {
    transform: rotate(0) scale(1);
    transform-origin: 50% 50%;
    transition: all 0.25s ease-out;
  }

  #get-the-app-icon_svg__apple-appstore {
    transform: rotate(0) scale(1);
    transform-origin: 50% 50%;
    transition: all 0.25s ease-out;
  }

  #get-the-app-icon_svg__IPhone {
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: all 0.25s ease-out;
  }

  #gatsby-icon_svg__logo {
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: all 0.25s ease-out;
  }

  #city-icon_svg__restaurant {
    transform: scale(1) translateY(0);
    transform-origin: 50% 50%;
    transition: all 0.25s ease-out;
  }
  #city-icon_svg__building {
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: all 0.25s ease-out;
  }
`;

export class ProjectNav extends React.Component<IProjectNavProps, {}> {
  public state = {
    fixPosition: false,
    currentY: window.pageYOffset,
  };

  private projectNavRef;

  constructor(props) {
    super(props);
    this.projectNavRef = React.createRef();
  }

  public render() {
    const { selectNewProject } = this.props;
    const { fixPosition } = this.state;
    const { projectNavRef } = this;
    console.log('fix position:', fixPosition);
    return (
      <ProjectNavComponent
        id="project-nav-component"
        ref={projectNavRef}
        fixPosition={fixPosition}
      >
        <NavItems>
          <NavItem>
            <ProjectAnchor href="#project-nav-component">
              <NavButton
                onClick={() => {
                  selectNewProject(1);
                }}
              >
                <AnimatedIcon icon="GatsbyIcon" />
                <div>Dashi-Gatsby</div>
              </NavButton>
            </ProjectAnchor>
          </NavItem>
          <NavItem>
            <ProjectAnchor href="#project-nav-component">
              <NavButton
                onClick={() => {
                  selectNewProject(2);
                }}
              >
                <AnimatedIcon icon="CityIcon" />
                <div>City Page</div>
              </NavButton>
            </ProjectAnchor>
          </NavItem>
          <NavItem>
            <ProjectAnchor href="#project-nav-component">
              <NavButton
                onClick={() => {
                  selectNewProject(3);
                }}
              >
                <AnimatedIcon icon="AutocompleteIcon" />
                <div>Autocomplete</div>
              </NavButton>
            </ProjectAnchor>
          </NavItem>
          <NavItem>
            <ProjectAnchor href="#project-nav-component">
              <NavButton
                onClick={() => {
                  selectNewProject(4);
                }}
              >
                <AnimatedIcon icon="GetTheAppIcon" />
                <div>Get the App</div>
              </NavButton>
            </ProjectAnchor>
          </NavItem>
        </NavItems>
      </ProjectNavComponent>
    );
  }

  public componentDidMount() {
    console.log('Didmount projectnav ref', this.projectNavRef);
    window.addEventListener('scroll', this.handleScroll, true);
    this.setState({ projectNavRef: this.projectNavRef });
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  public handleScroll = (event) => {
    const scrollTop = window.pageYOffset;
    console.log('Scrolltop:', scrollTop);
    console.log(
      'Project nav top',
      document.getElementById('project-nav-component').getBoundingClientRect()
        .top + window.scrollY,
    );
    if (
      scrollTop >=
      document.getElementById('project-nav-component').getBoundingClientRect()
        .top +
        window.scrollY
    ) {
      this.setState({ fixPosition: true });
    } else {
      this.setState({ fixPosition: false });
    }
  }
}
