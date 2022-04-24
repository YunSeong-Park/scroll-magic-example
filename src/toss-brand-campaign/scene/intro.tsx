/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Timeline, Tween } from "react-gsap";
import { Scene } from "react-scrollmagic";

const rootStyle = css`
  position: relative;
`;

const style = css`
  position: absolute;
  top: 500px;
  left: 0;
  width: 100%;
  height: 318px;
  padding: 0px 20px;
  margin-top: -156px;
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
`;

interface IntroProps {
  setProgress: (progress: number) => void;
}

const Intro: React.FC<IntroProps> = ({ setProgress }) => {
  return (
    <Scene triggerHook="onLeave" pin duration={500}>
      {(progress: number) => {
        setProgress(progress);
        return (
          <div css={rootStyle}>
            <Tween
              to={{ opacity: 0, y: "-100px" }}
              paused
              totalProgress={progress}
            >
              <div css={style}>
                <div>달을 더 자세히 보기 위해</div>
                <div>망원경에 집중하는 대신</div>
                <div>달에 직접 가겠다는 목표</div>
              </div>
            </Tween>
          </div>
        );
      }}
    </Scene>
  );
};

export default Intro;
