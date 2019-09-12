import { Layout } from "layouts";
import { GrubhubProject } from "modules/engineering-projects/grubhub/grubhub";
import React from "react";
import "styles/core.scss";
import { TransitionItem } from "components/core/transition/transition";

export default function GrubhubPage() {
  return (
    <Layout offsetContent={true}>
      <GrubhubProject />
    </Layout>
  );
}
