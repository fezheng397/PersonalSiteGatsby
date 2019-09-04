import { IconProvider } from 'components/core/icon-provider/icon-provider';
import { Navbar } from 'components/custom/navbar/navbar';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

export interface ILayoutProps {
  children?: any;
  offsetContent?: boolean;
  hideNav?: boolean;
}

const SiteContainer = styled.div``;

const SiteContent = styled.div`
  ${(props: ILayoutProps) => (props.offsetContent ? 'margin-top: 72px;' : '')}
`;

export function Layout(props: ILayoutProps) {
  const { children, hideNav } = props;
  return (
    <SiteContainer>
      <IconProvider />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Felix Zheng</title>
        <link rel="canonical" href="http://felixzheng.com" />
        <link rel="stylesheet" href="https://use.typekit.net/tfc0usc.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,400i,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,400i,500,600,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {!hideNav ? <Navbar /> : null}
      <SiteContent {...props}>{children}</SiteContent>
    </SiteContainer>
  );
}
