import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { Container } from "semantic-ui-react";
import EsnMenuButton from "./EsnMenuButton";

// const MenuItems = [
//   { title: "Home", href: "/" },
//   { title: "About", href: "/about" },
//   { title: "Board", href: "/board" },
//   // "News",
//   // "Projects",
//   // "Partners",
//   // "Contact",
// ];

const EsnNavBar = ({ menuItems, settings }) => (
  <NavBarWrapper>
    <SectionSelectorWrapper>
      <a href="https://esnrussia.org/" style={{ color: "unset" }}>
        <span style={{ cursor: "pointer", padding: "0 10px" }}>ESN Russia</span>
      </a>
      <a href="https://hsemsk.esnrussia.org/" style={{ color: "unset" }}>
        <span style={{ cursor: "pointer", padding: "0 10px" }}>ESN HSE MSK</span>
      </a>
      <a href="https://ural.esnrussia.org/" style={{ color: "unset" }}>
        <span style={{ cursor: "pointer", padding: "0 10px" }}>ESN Ural Federal</span>
      </a>
      <a href="https://sftu.esnrussia.org/" style={{ color: "unset" }}>
        <span style={{ cursor: "pointer", padding: "0 10px" }}>ESN SFTU</span>
      </a>
    </SectionSelectorWrapper>
    <BottomWrapper>
      <Logo src={settings.logo_url} />
      <BottomMenuWrapper>{menuItems.map(item => <EsnMenuButton item={item} />)}</BottomMenuWrapper>
    </BottomWrapper>
  </NavBarWrapper>
);

const NavBarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
`;

const SectionSelectorWrapper = styled.div`
  background: #333333 url(/header_topbg.png) 0 -5px repeat-x;
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: #bbb;
  font-weight: bold;
  font-size: 16px;
  padding: 16px 0 10px 0;
`;

const BottomWrapper = styled(Container)`
  padding: 1em 0;
  display: flex !important;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  height: 84px;
  margin: 0;
  padding: 0;
`;

const BottomMenuWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
`;

const mapStateToProps = ({ menuItems, settings }) => ({ menuItems, settings });

export default connect(mapStateToProps)(EsnNavBar);
