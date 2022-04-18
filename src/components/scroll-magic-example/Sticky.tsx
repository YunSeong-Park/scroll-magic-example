/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Controller, Scene } from "react-scrollmagic";

const style = css`
  .section {
    height: 100vh;
  }

  .sticky {
    background-color: red;
    width: 100%;
    & div {
      padding: 30px;
    }
  }

  .blue {
    background-color: blue;
  }
`;

const Sticky: React.FC<{}> = () => {
  return (
    <div css={style}>
      <div className="section">scroll 하세요.</div>
      <Controller>
        <Scene duration={600} pin enabled={true}>
          <div className="sticky">
            <span>dkssud</span>
            <div>Pin Test1</div>
          </div>
        </Scene>
        <Scene duration={200} pin={{ pushFollowers: false }}>
          <div className="sticky">
            <div>Pin Test2</div>
          </div>
        </Scene>
        <Scene duration={300} pin={true} offset={200}>
          <div className="sticky blue">
            <div>Pin Test3</div>
          </div>
        </Scene>
      </Controller>
      <div className="section" />
    </div>
  );
};

export default Sticky;
