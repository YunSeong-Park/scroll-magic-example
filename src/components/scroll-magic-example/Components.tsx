/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { LegacyRef } from "react";

import { Controller, Scene } from "react-scrollmagic";

const componentsStyle = css`
  .section {
    height: 70vh;
  }
`;

const style = css`
  background-color: red;
`;

const Stateless = ({ children }: { children: React.ReactNode }) => (
  <div id="stateless">{children}</div>
);

const StatelessFragment = () => (
  <React.Fragment>
    <div id="statelessFragment">StatelessFragment Component</div>
  </React.Fragment>
);

const StatelessRef = React.forwardRef(
  (props, ref: LegacyRef<HTMLDivElement>) => (
    <div ref={ref}>StatelessRef Component</div>
  )
);

class Stateful extends React.Component {
  render() {
    return <div id="stateful">Stateful Component</div>;
  }
}

const Components = () => (
  <div css={componentsStyle}>
    <div className="section" />
    <Controller>
      <Scene duration={600} pin={true}>
        <div>HTML tag</div>
      </Scene>
      <Scene duration={600} pin={true}>
        <StatelessRef />
      </Scene>
      <Scene duration={600} pin={true}>
        <div css={style}>Styled Component</div>
      </Scene>
      <Scene duration={600} pin triggerElement="#stateless">
        <Stateless>Stateless Component</Stateless>
      </Scene>
      <Scene duration={600} pin={true}>
        <div>
          <Stateless>Stateless Component wrapped</Stateless>
        </div>
      </Scene>
      <Scene duration={600} pin triggerElement="#statelessFragment">
        <StatelessFragment />
      </Scene>
      <Scene duration={600} pin triggerElement="#stateful">
        <Stateful />
      </Scene>
    </Controller>
    <div className="section" />
  </div>
);

export default Components;
