import { IconProvider } from 'components/core/icon-provider/icon-provider';
import { TransitionItem } from 'components/core/transition/transition';
import { Footer } from 'components/custom/footer/footer';
import { Navbar } from 'components/custom/navbar/navbar';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

export interface ILayoutProps {
  children?: any;
  comingSoon?: boolean;
  offsetContent?: boolean;
  hideNav?: boolean;
}

const SiteContainer = styled.div``;

const SiteContent = styled.div`
  ${(props: ILayoutProps) => (props.offsetContent ? 'margin-top: 72px;' : '')}
`;

export function Layout(props: ILayoutProps) {
  const { children, comingSoon, hideNav } = props;
  return (
    <SiteContainer>
      <IconProvider />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Felix Zheng</title>
        <link rel="canonical" href="http://felixzheng.com" />
        <link rel="stylesheet" href="https://use.typekit.net/tfc0usc.css" />

        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,400i,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Varela&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,400i,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <TransitionItem timeout={175} transitionType="fade">
        {!hideNav ? <Navbar /> : null}
        <SiteContent {...props}>{children}</SiteContent>
        {!comingSoon ? <Footer /> : null}
      </TransitionItem>
    </SiteContainer>
  );
}
