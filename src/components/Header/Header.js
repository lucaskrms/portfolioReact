import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCode } from 'react-icons/di';

import { Container, Div1, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <a style={{ display: "flex", alignItems: "center", color: "white" , marginBottom: "30px", marginTop: "-3px"}}>
        <DiCode size="4rem"/> <Span>lucaskrms portfolio</Span>
      </a>
    </Div1>
    <Div3>
      <SocialIcons href="https://www.linkedin.com/in/lucaskermessi/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://github.com/lucaskrms">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
