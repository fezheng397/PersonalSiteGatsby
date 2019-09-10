import { HomepageCatalog } from "modules/homepage/components/catalog/homepage-catalog";
import { HomepageHero } from "modules/homepage/components/homepage-hero/homepage-hero";
import React from "react";

export class Homepage extends React.Component {
  public render() {
    return (
      <div>
        <HomepageHero />
        <HomepageCatalog />
      </div>
    );
  }
}
