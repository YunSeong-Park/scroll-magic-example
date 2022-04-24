/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Tween } from "react-gsap";

const style = css`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 288px;
`;

interface MountainProps {
  progress?: number;
}

const Mountain: React.FC<MountainProps> = ({ progress = 0 }) => {
  return (
    <Tween
      from={{ opacity: 0.62, transform: "translate3d(0px, 150px, 0px)" }}
      to={{ opacity: 0, transform: "translate3d(0px, 400px, 0px)" }}
      paused
      totalProgress={progress}
    >
      <img css={style} src="res/mountain.png" />
    </Tween>
  );
};

export default Mountain;
