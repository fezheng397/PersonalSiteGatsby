import { Layout } from 'layouts';
import { GrubhubProject } from 'modules/engineering-projects/grubhub/grubhub';
import React from 'react';
import 'styles/core.scss';

export default function GrubhubPage() {
  return (
    <Layout>
      <GrubhubProject />
    </Layout>
  );
}
