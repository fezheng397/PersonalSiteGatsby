import React from 'react';
import 'styles/pages/homepage.scss';

export class Homepage extends React.Component {
  public render() {
    return (
      <div className="container-lg homepage-hero">
        <div className="headshot">
          <img src={require('assets/pro-pic-min.png')} />
        </div>
        <h3>Hey, I'm</h3>
        <h1>Felix Zheng</h1>
      </div>
    );
  }
}
