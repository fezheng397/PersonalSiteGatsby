import { Container } from "components/core/container/container";
import { SectionHeaderMajor } from "components/core/headers/headers";
import { TransitionItem } from "components/core/transition/transition";
import {
  IProjectTemplateProps,
  ProjectTemplate
} from "modules/engineering-projects/grubhub/projects/project-template";
import {
  TextSectionContainer,
  TextSectionDesc,
  TextSectionSubHeader
} from "modules/engineering-projects/grubhub/projects/project-template";
import React from "react";
import styled from "styled-components";
import { Styles } from "vars";

export interface IDashiGatsbyProps {}

const DashiGatsbyComponent = styled.div``;

const dashiGatsbyTemplate: IProjectTemplateProps = {
  imageAlt: "Dashi Gatsby Illustration",
  imageSrc: require("assets/grubhub/projects/dashi-gatsby/Gatsby_Contentful.jpg"),
  imagePosition: "left",
  objective: `To architect a proof of concept (POC) migration for the diner platform's
  static-site generator repository from legacy technologies to GatsbyJS.`,
  roles: [
    {
      roleHeader: "Role Header",
      roleDesc: "This is a text description"
    },
    {
      roleHeader: "Role Header",
      roleDesc: "This is a text description"
    }
  ]
};

export function DashiGatsby({  }: IDashiGatsbyProps) {
  return (
    <TransitionItem timeout={300} transitionType="fade">
      <DashiGatsbyComponent>
        <SectionHeaderMajor>Dashi - Gatsby</SectionHeaderMajor>
        <Container id="dashi-gatsby-project-header" size="lg">
          <ProjectTemplate
            imageAlt={dashiGatsbyTemplate.imageAlt}
            imageSrc={dashiGatsbyTemplate.imageSrc}
            imagePosition={dashiGatsbyTemplate.imagePosition}
            objective={dashiGatsbyTemplate.objective}
            roles={dashiGatsbyTemplate.roles}
          />
        </Container>
        <Container id="dashi-gatsby-project-analysis" size="lg">
          <TextSectionContainer>
            <TextSectionSubHeader>Problem Statement</TextSectionSubHeader>
            <TextSectionDesc>
              Dashi, the repository responsible for the generation of the static
              pages on Grubhub's domain, slowly became outdated and difficult to
              maintain. This was partly due to the legacy technologies (such as
              Angular 1) that hadn't been updated, as well as the need for 3
              different third-party technologies, which both made the project
              hard to maintain, and time-consuming to onboard to new members.
            </TextSectionDesc>
            <TextSectionSubHeader>
              Reviewing Team Lead Expectations
            </TextSectionSubHeader>
            <TextSectionDesc>
              Since this was a project that was solely based on the engineering
              side, I would be giving the finished deliverable to G&L's team
              lead.
            </TextSectionDesc>
          </TextSectionContainer>
        </Container>
      </DashiGatsbyComponent>
    </TransitionItem>
  );
}
