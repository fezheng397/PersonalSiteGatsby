import { Container } from 'components/core/container/container';
import { SectionHeaderMajor } from 'components/core/headers/headers';
import { PhoneFrame } from 'components/core/phone-frame/phone-frame';
import {
  TabletFrame,
  TabletFrameRow,
} from 'components/core/tablet-frame/tablet-frame';
import { TransitionItem } from 'components/core/transition/transition';
import {
  IProjectTemplateProps,
  ProjectTemplate,
} from 'modules/engineering-projects/grubhub/projects/project-template';
import {
  TextSectionContainer,
  TextSectionDesc,
  TextSectionSubHeader,
} from 'modules/engineering-projects/grubhub/projects/project-template';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IDashiGatsbyProps {}

const DashiGatsbyComponent = styled.div``;

const dashiGatsbyTemplate: IProjectTemplateProps = {
  imageAlt: 'Dashi Gatsby Illustration',
  imageSrc: require('assets/grubhub/projects/dashi-gatsby/dashi-gatsby-cover.png'),
  imagePosition: 'left',
  objective: `To architect a proof of concept (POC) migration for the diner platform's
  static-site generator repository from legacy technologies to GatsbyJS.`,
  roles: [
    {
      roleHeader: 'Proving Feasibility',
      roleDesc: 'Ensuring the migration is possible and worth the time',
    },
    {
      roleHeader: 'Migration Architecture',
      roleDesc: 'Planning how to migrate our static-site platform',
    },
  ],
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
              pages (such as Careers, Terms and Conditions, etc.) on Grubhub's
              domain, slowly became outdated. This was partly due to the legacy
              technologies (such as Angular 1) that hadn't been updated, as well
              as the need for 3 different third-party technologies. As a result,
              these made the project hard to maintain, and time-consuming when
              onboaring new members.
            </TextSectionDesc>
            <TextSectionSubHeader>Reviewing Expectations</TextSectionSubHeader>
            <TextSectionDesc>
              Since this was a project that was solely based on the engineering
              side, I would be giving the finished deliverable to G&L's team
              lead.
            </TextSectionDesc>
            <TextSectionSubHeader>Research</TextSectionSubHeader>
            <p>
              Because I had never worked with Gatbsy before, the first step for
              this project was to better understand the technology and how we
              could utilize it.
            </p>
            <p>
              <strong>1) Understanding the Build Process - </strong>Learning the
              interal process behind how Gatsby turned a React project into a
              static build.
            </p>
            <p>
              <strong>2) Processing Markdown - </strong>How to process and
              convert existing markdown data to HTML and inject the data into
              React templates.
            </p>
            <p>
              <strong>3) Querying Data with GraphQL - </strong>Learning Gatsby's
              internal implementation of GraphQL
            </p>
            <TextSectionDesc>
              <strong>4) Building Pages With Templates - </strong>Working with
              Gatsby's Node implementation to inject queried data into React
              templates
            </TextSectionDesc>
            <TextSectionSubHeader>Project Architecture</TextSectionSubHeader>
            <TextSectionDesc>
              Now that I had an idea of how Gatsby worked, it was time to plan
              how to actually convert our current processes to work with a
              Gatsby foundation.
            </TextSectionDesc>
            <p>
              <strong>1) Pulling Assets from Contentful - </strong>
              We currently utiliz a collection of scripts to pull relevant
              markdown and data associated with static pages from a Contnet
              Management Service (CMS) Contentful. This step was not affected by
              the migration.
            </p>
            <p>
              <strong>2) Migrating Reptar - </strong>Using Gatsby packages such
              as gatsby-markdown-remark and a few custom-written scripts, I
              planned to replace our Reptar implementation with Gatsby's GraphQL
              data layer.
            </p>
            <p>
              <strong>3) Migrating Nunjucks - </strong>
              Using Gatsby's node-config.js and built in API's such as
              createPages, one could process the markdown during this stage and
              inject it into templates. This would replace Nunjucks in our
              current process.
            </p>
            <p>
              <strong>4) Processing SCSS - </strong>
              After all the content is built correctly, it was time to ensure
              Grubhub's styling was applied to the pages using
              gatsby-plugin-sass.
            </p>
            <p>
              <strong>5) Refactoring Built File Structure - </strong>
              Once everything was built as intended, all that was left was to
              reformat the file structure of the build folder to match that of
              our previous builds, so that we could seamlessly integrate it into
              our deployment pipeline.
            </p>
            <TextSectionSubHeader>Implementation</TextSectionSubHeader>
            <TextSectionDesc>
              I was responsible for converting the templates of a few pages and
              ensuring the built page was the same after Gatsby as it was
              before. Once accomplished, this would prove the feasibility of a
              fullscale migration in the future and provide a foundation. Here
              are a few samples...
            </TextSectionDesc>
            <TabletFrameRow>
              <TabletFrame
                imageAlt="iphone frame"
                imageSrc={require('assets/grubhub/projects/dashi-gatsby/grubhub-alexa.png')}
                caption="Grubhub Alexa"
              />
              <PhoneFrame
                imageAlt="iphone frame"
                imageSrc={require('assets/grubhub/projects/dashi-gatsby/campus-m.png')}
                caption="Grubhub For Students"
              />
            </TabletFrameRow>
          </TextSectionContainer>
        </Container>
      </DashiGatsbyComponent>
    </TransitionItem>
  );
}
