/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const style = css`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 288px;
`;

interface MountainProps {
  opacity?: number;
  translate3d?: {
    x: number;
    y: number;
    z: number;
  };
}

const Mountain: React.FC<MountainProps> = ({
  opacity = 1,
  translate3d = { x: 0, y: 0, z: 0 },
}) => {
  const { x, y, z } = translate3d;
  return (
    <img
      css={style}
      style={{ opacity, transform: `translate3d( ${x}px, ${y}px, ${z}px )` }}
      src="res/mountain.png"
    />
  );
};

export default Mountain;
