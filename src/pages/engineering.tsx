import { TransitionItem } from 'components/core/transition/transition';
import { Layout } from 'layouts';
import { Engineering } from 'modules/engineering/components/engineering';
import React from 'react';
import 'styles/core.scss';

export default function EngineeringPage() {
  return (
    <Layout offsetContent={true}>
      <Engineering />
    </Layout>
  );
}
