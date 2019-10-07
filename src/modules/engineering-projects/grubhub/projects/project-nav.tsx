import { Backdrop } from 'components/core/backdrop/backdrop';
import { Button } from 'components/core/button/button';
import { Icon } from 'components/core/icon/icon';
import { SVGComponent } from 'components/core/icon/svgComponents';
import { TransitionItem } from 'components/core/transition/transition';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

/**
 * TODO: Figure out mobile bug
 * Organize window util possibly
 * Organize this component better
 */

export interface IProjectNavProps {
  currentProject: number;
  navPosFixed: (fixed: boolean) => void;
  fab?: boolean;
  selectNewProject: (newProject: number) => void;
}

export interface IProjectNavState {
  fixPosition: boolean;
  projectNavFabVisible: boolean;
  projectNavFabOpen: boolean;
  projectNavOffsetY: number;
}

const ProjectNavComponent = styled.div`
  position: relative;
  background: ${Styles.Colors.primaryWhite};
  height: 124px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

export interface IProjectNavButtonProps {
  noPadding?: boolean;
}

const NavButton = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0
    ${(props: IProjectNavButtonProps) =>
      props.noPadding ? '' : Styles.Spaces.spacing16};
  color: ${Styles.Colors.textLightBlack};

  ${Styles.MediaQuery.md} {
    margin-top: 9.5px;
    padding: 0
      ${(props: IProjectNavButtonProps) =>
        props.noPadding ? '' : Styles.Spaces.spacing8};
  }

  &:hover,
  &:focus,
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

    #city-icon_svg_platter-base {
      transform: scale(1.2) translateY(1px) rotate(-4deg);
      transform-origin: 50% 50%;
      transition: all 0.25s ease-out;
    }

    #city-icon_svg_container {
      transform: scale(1.2);
      transform-origin: 50% 50%;
      transition: all 0.25s ease-out;
    }

    #city-icon_svg_platter-head {
      transform: scale(1.5) rotate(30deg) translateY(-4px) translateX(-2px);
      transform-origin: 50% 50%;
      transition: all 0.25s ease-out;
    }
  }
`;

export interface IAnimatedIconProps {
  width: number;
  height: number;
  noMargin?: boolean;
  showShadow?: boolean;
}

const AnimatedIcon = styled(SVGComponent)`
  width: ${(props: IAnimatedIconProps) => props.width}px;
  height: ${(props: IAnimatedIconProps) => props.height}px;
  border-radius: 50%;
  margin-bottom: ${(props: IAnimatedIconProps) =>
    props.noMargin ? '' : Styles.Spaces.spacing2};
  ${(props: IAnimatedIconProps) =>
    props.showShadow ? `box-shadow: ${Styles.Shadows.imageShadow};` : ''};
  background: transparent;

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

  #city-icon_svg_platter-base {
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: all 0.25s ease-out;
  }

  #city-icon_svg_container {
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: all 0.25s ease-out;
  }

  #city-icon_svg_platter-head {
    transform: scale(1) rotate(0) translateY(0);
    transform-origin: 50% 50%;
    transition: all 0.25s ease-out;
  }
`;

const ProjectNavFab = styled.div`
  position: fixed;
  cursor: pointer;
  bottom: 24px;
  right: 24px;
  height: 64px;
  width: 64px;
  background-color: ${Styles.Colors.primaryWhite};
  border-radius: 50%;
  box-shadow: ${Styles.Shadows.lightShadow};
  transition: all 0.25s ease-out;

  z-index: ${Styles.Dimensions.modalZ};

  &:hover {
    box-shadow: ${Styles.Shadows.imageShadowHover};
  }
`;

const ProjectNavFabIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
`;

const ProjectNavFabList = styled.ul`
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: ${Styles.Dimensions.modalZ};
  margin-bottom: ${Styles.Spaces.spacing2};
`;

const ProjectNavFabItem = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: ${Styles.Spaces.spacing2} 0;
`;

const ProjectNavFabItemLabel = styled.div`
  text-align: center;
  vertical-align: middle;
  line-height: 1;
  padding: ${Styles.Spaces.spacing2};
  border-radius: ${Styles.Sizes.radius2};
  background: ${Styles.Colors.primaryWhite};
  margin-right: ${Styles.Spaces.spacing4};
  box-shadow: ${Styles.Shadows.imageShadow};
`;

export class ProjectNav extends React.Component<IProjectNavProps, {}> {
  public state = {
    fixPosition: false,
    projectNavFabOpen: false,
    projectNavFabVisible: false,
  };

  private projectNavRef;
  private projectNavOffsetY: number;
  private scrollingToProjectNav: boolean = false;

  constructor(props) {
    super(props);
    this.projectNavRef = React.createRef();
  }

  public render() {
    const { fab, selectNewProject } = this.props;
    const { fixPosition, projectNavFabOpen, projectNavFabVisible } = this.state;
    const { projectNavRef } = this;

    return (
      <div>
        <ProjectNavComponent id="project-nav-component" ref={projectNavRef}>
          <NavItems>
            <NavItem>
              <NavButton
                onClick={() => {
                  selectNewProject(1);
                }}
              >
                <AnimatedIcon width={75} height={75} icon="GatsbyIcon" />
                <div>Dashi-Gatsby</div>
              </NavButton>
            </NavItem>
            <NavItem>
              <NavButton
                onClick={() => {
                  selectNewProject(2);
                }}
              >
                <AnimatedIcon width={75} height={75} icon="CityIcon" />
                <div>Best Restaurants</div>
              </NavButton>
            </NavItem>
            <NavItem>
              <NavButton
                onClick={() => {
                  selectNewProject(3);
                }}
              >
                <AnimatedIcon width={75} height={75} icon="AutocompleteIcon" />
                <div>Autocomplete</div>
              </NavButton>
            </NavItem>
            <NavItem>
              <NavButton
                onClick={() => {
                  selectNewProject(4);
                }}
              >
                <AnimatedIcon width={75} height={75} icon="GetTheAppIcon" />
                <div>Get the App</div>
              </NavButton>
            </NavItem>
          </NavItems>
        </ProjectNavComponent>

        {fixPosition ? (
          <TransitionItem timeout={250} transitionType="fade">
            <ProjectNavFab onClick={this.toggleProjectNavFabList}>
              {projectNavFabOpen ? (
                <TransitionItem timeout={275} transitionType="fade">
                  <ProjectNavFabIconContainer>
                    <Icon
                      icon="close"
                      width={26}
                      height={26}
                      fill={Styles.Colors.textLightBlack}
                    />
                  </ProjectNavFabIconContainer>
                </TransitionItem>
              ) : (
                <TransitionItem timeout={275} transitionType="fade">
                  <ProjectNavFabIconContainer>
                    <Icon
                      icon="buffer"
                      width={26}
                      height={26}
                      fill={Styles.Colors.textLightBlack}
                    />
                  </ProjectNavFabIconContainer>
                </TransitionItem>
              )}
            </ProjectNavFab>
          </TransitionItem>
        ) : null}

        {projectNavFabOpen && fixPosition
          ? this.renderProjectNavFabList(selectNewProject)
          : null}
      </div>
    );
  }

  public componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
    this.projectNavOffsetY = document.getElementById(
      'project-nav-component',
    ).offsetTop;
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  public renderProjectNavFabList(
    selectNewProject: (newProject: number) => void,
  ) {
    return (
      <div>
        <Backdrop
          color={Styles.Colors.primaryWhite}
          onClick={(e) => {
            this.setState({
              projectNavFabOpen: false,
            });
          }}
        />
        <ProjectNavFabList>
          <TransitionItem timeout={300} transitionType="fade">
            <ProjectNavFabItem>
              <ProjectNavFabItemLabel>Dashi-Gatsby</ProjectNavFabItemLabel>
              <NavButton
                noPadding={true}
                onClick={() => {
                  this.scrollingToProjectNav = true;
                  this.setState({
                    fixPosition: false,
                    projectNavFabOpen: false,
                  });
                  selectNewProject(1);
                  this.scrollingToProjectNav = false;
                }}
              >
                <AnimatedIcon width={60} height={60} icon="GatsbyIcon" />
              </NavButton>
            </ProjectNavFabItem>
          </TransitionItem>
          <TransitionItem timeout={250} transitionType="fade">
            <ProjectNavFabItem>
              <ProjectNavFabItemLabel>City Page</ProjectNavFabItemLabel>
              <NavButton
                noPadding={true}
                onClick={() => {
                  this.setState({
                    fixPosition: false,
                    projectNavFabOpen: false,
                  });
                  selectNewProject(2);
                }}
              >
                <AnimatedIcon width={60} height={60} icon="CityIcon" />
              </NavButton>
            </ProjectNavFabItem>
          </TransitionItem>
          <TransitionItem timeout={200} transitionType="fade">
            <ProjectNavFabItem>
              <ProjectNavFabItemLabel>
                Search Autocomplete
              </ProjectNavFabItemLabel>
              <NavButton
                noPadding={true}
                onClick={() => {
                  this.setState({
                    fixPosition: false,
                    projectNavFabOpen: false,
                  });
                  selectNewProject(3);
                }}
              >
                <AnimatedIcon width={60} height={60} icon="AutocompleteIcon" />
              </NavButton>
            </ProjectNavFabItem>
          </TransitionItem>
          <TransitionItem timeout={150} transitionType="fade">
            <ProjectNavFabItem>
              <ProjectNavFabItemLabel>Get The App</ProjectNavFabItemLabel>
              <NavButton
                noPadding={true}
                onClick={() => {
                  this.setState({
                    fixPosition: false,
                    projectNavFabOpen: false,
                  });
                  selectNewProject(4);
                }}
              >
                <AnimatedIcon width={60} height={60} icon="GetTheAppIcon" />
              </NavButton>
            </ProjectNavFabItem>
          </TransitionItem>
        </ProjectNavFabList>
      </div>
    );
  }

  public handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop >= this.projectNavOffsetY) {
      this.setState({ fixPosition: true });
      if (!this.scrollingToProjectNav) {
        this.props.navPosFixed(true);
      }
    } else {
      this.setState({ fixPosition: false, projectNavFabOpen: false });
      this.props.navPosFixed(false);
    }
  }

  public toggleProjectNavFabList = () => {
    this.setState((prevState: IProjectNavState) => ({
      projectNavFabOpen: !prevState.projectNavFabOpen,
    }));
  }
}
