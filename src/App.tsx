/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

import { Link, Route, Routes } from "react-router-dom";
import ClassToggle from "./components/scroll-magic-example/ClassToggle";
import SectionWipes from "./components/scroll-magic-example/SectionWipes";
import SectionWipes2 from "./components/scroll-magic-example/SectionWipse2";
import Sticky from "./components/scroll-magic-example/Sticky";
import Sticky2 from "./components/scroll-magic-example/Sticky2";

const rootStyle = css`
  min-height: 100vh;
  width: 100%;
  background-color: #fff;
  display: grid;
`;

const listStyle = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
`;

const asideStyle = css`
  position: fixed;
  width: 200px;
  height: 100%;
  background-color: grey;
  z-index: 2;
`;

function App() {
  return (
    <section css={rootStyle}>
      <aside css={asideStyle}>
        <nav>
          <ul css={listStyle}>
            {linkList.map((link) => (
              <li>
                <LinkBtn to={link.to} label={link.label} />
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main
        css={css`
          overflow: hidden;
          margin-left: 200px;
        `}
      >
        <Routes>
          {linkList.map((link) => (
            <Route path={link.to} element={<link.compoent />} />
          ))}
        </Routes>
      </main>
    </section>
  );
}

export default App;

const LinkBtn = ({ to, label }: { to: string; label: string }) => {
  return (
    <Link
      css={css`
        display: block;
        color: #fff;
        text-decoration: none;
        background-color: #081921;
        width: 100%;
        border-radius: 3px;
        padding: 4px;
      `}
      to={to}
    >
      {label}
    </Link>
  );
};

const Home: React.FC<{}> = () => {
  return (
    <div>
      <h2>Empty Home</h2>
    </div>
  );
};

const linkList = [
  { to: "/", label: "Home", compoent: Home },
  { to: "/sticky", label: "Sticky", compoent: Sticky },
  { to: "/sticky2", label: "Sticky2", compoent: Sticky2 },
  { to: "/class-toggle", label: "Class Toggle", compoent: ClassToggle },
  { to: "/section-wipes", label: "Section Wipes", compoent: SectionWipes },
  { to: "/section-wipes2", label: "Section Wipes2", compoent: SectionWipes2 },
  { to: "/tween", label: "Tween", compoent: Home },
  { to: "/split-text", label: "Split Text", compoent: Home },
  { to: "/list", label: "List", compoent: Home },
  { to: "/svg", label: "Svg", compoent: Home },
  { to: "/parallax", label: "parallax", compoent: Home },
  { to: "/components", label: "Components", compoent: Home },
  { to: "/mutiple-controllers", label: "Components", compoent: Home },
];
