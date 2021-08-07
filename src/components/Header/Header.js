import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillMediumSquare,
  AiFillLinkedin,
  AiFillCode,
} from "react-icons/ai";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <AiFillCode size="3rem" style={{ marginRight: 8 }} />{" "}
          <span>Matheus fortunato</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/mfortunat0">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/matheus-fortunato-14513b195/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://medium.com/@mfortunat0">
        <AiFillMediumSquare size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
