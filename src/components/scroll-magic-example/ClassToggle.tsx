/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import { Controller, Scene } from "react-scrollmagic";

const classToggleStyle = css`
  .section {
    height: 100vh;
  }

  .test {
    transition: width 0.3s ease-out;
    width: 100px;
    height: 100px;
    background-color: red;
    margin: 0 !important;

    &.yellow {
      background-color: yellow;
    }
  }
  .zap {
    width: 100%;
  }
`;

const ClassToggle = () => (
  <div css={classToggleStyle}>
    <div className="section" />
    <div id="trigger" />
    <Controller>
      <Scene
        duration={200}
        classToggle="zap"
        triggerElement="#trigger"
        indicators
      >
        {(progress: number, event: { type: string }) => (
          <div className="test">
            Pin Test {event.type} {progress}
          </div>
        )}
      </Scene>
      <Scene duration={200} classToggle={[".test", "yellow"]} indicators>
        <div>Toggle other class</div>
      </Scene>
    </Controller>
    <div className="section" />
  </div>
);

export default ClassToggle;
