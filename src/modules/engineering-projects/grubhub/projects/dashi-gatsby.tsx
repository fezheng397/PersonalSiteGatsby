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
            <TextSectionSubHeader>Reviewing Expectations</TextSectionSubHeader>
            <TextSectionDesc>
              Since this was a project that was solely based on the engineering
              side, I would be giving the finished deliverable to G&L's team
              lead.
            </TextSectionDesc>
            <TextSectionSubHeader>Research</TextSectionSubHeader>
            <TextSectionDesc>
              Because I had never worked with Gatbsy before, the first step for
              this project was to understand Gatsby as a technology.
            </TextSectionDesc>
            <p>
              <strong>1) Understanding the Build Process - </strong>Had to
              understand how Gatsby turned a React project into a static build.
            </p>
            <p>
              <strong>2) Processing Markdown - </strong>How to process and
              convert markdown to HTML and inject the data into React templates
            </p>
            <p>
              <strong>3) Querying Data with GraphQL - </strong>Learning Gatsby's
              internal implementation of GraphQL
            </p>
            <p>
              <strong>4) Building Pages</strong>Working with Gatsby's Node
              implementation to inject queried data into React templates
            </p>
            <TextSectionSubHeader>Project Architecture</TextSectionSubHeader>
            <TextSectionDesc>
              Now that I had an idea of how Gatsby worked, it was time to plan
              how to actually convert our current processes to work with a
              Gatsby foundation.
            </TextSectionDesc>
            <p>
              <strong>1) Pulling Assets from Contentful - </strong>
              We currently utilized a collection of scripts to pull relevant
              markdown and data associated with static pages from a Contnet
              Management Service (CMS) Contentful. This step would not be
              changed by the migration.
            </p>
            <p>
              <strong>2) Migrating Reptar</strong>Using Gatsby packages such as
              gatsby-markdown-remark and a few custom-written scripts, I planned
              to replace Reptar with Gatsby's GraphQL data layer.
            </p>
            <p>
              <strong>3) Migrating Other part that converts templates</strong>
              Using Gatsby's node-config.js and built in API's such as
              createPages, one could process the markdown during this stage and
              inject it into templates
            </p>
            <p>
              <strong>4) Processing SCSS</strong>
              After all the content is built correctly, it was time to ensure
              Grubhub's styling was applied to the pages using
              gatsby-plugin-sass.
            </p>
            <p>
              <strong>5) Refactoring Built File Structure</strong>
              Once everything is built as intended, all that was left was to
              reformat the file structure of the build folder to match that of
              our previous builds, so that we could seamlessly integrate it into
              our system.
            </p>
            <TextSectionSubHeader>Implementation</TextSectionSubHeader>
            <TextSectionDesc>
              After understanding the structure of Gatsby's processes and
              designing a strategy to implement the migration, it was time to
              finally code it.
            </TextSectionDesc>
          </TextSectionContainer>
        </Container>
      </DashiGatsbyComponent>
    </TransitionItem>
  );
}
