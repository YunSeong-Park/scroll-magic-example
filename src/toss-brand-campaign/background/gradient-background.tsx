/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useScroll } from "../../utill/useScroll";

const imgHeight = 12054;

const style = css`
  position: fixed;
  width: 100%;
  height: ${imgHeight}px;
  overflow: hidden;
  background-color: rgb(255, 255, 255);

  img {
    width: 100%;
    height: 100%;
  }
`;

const GradientBackground: React.FC<{}> = () => {
  const { scrollY } = useScroll();
  return (
    <div css={style}>
      <img
        src="res/gradient-bg.png"
        style={{
          transform: `translateY(calc( ${-imgHeight + scrollY}px + 100vh ))`,
        }}
      />
    </div>
  );
};

export default GradientBackground;
