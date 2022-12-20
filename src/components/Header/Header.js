import React from "react";
import styled from "styled-components/macro";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <ButtonContainer>
          <MenuButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="shopping-bag" />
          </MenuButton>
          <MenuButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="search" />
          </MenuButton>
          <MenuButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
          </MenuButton>
        </ButtonContainer>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 0px 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  border-top: none;

  @media screen and ${QUERIES.tabletAndDown} {
    border-top: 4px solid ${COLORS.gray[900]};
    padding: 18px 32px;
  }
`;

const Nav = styled.nav`
  display: flex;
  /* gap: 48px; */
  gap: clamp(1rem + 6vw, 1rem, 1rem + 12vw);
  margin: 0px 0px 0px 48px;
  overflow-x: scroll;

  @media screen and ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenuButton = styled.button`
  background-color: ${COLORS.white};
  border: none;

  &:nth-of-type(2) {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  @media screen and ${QUERIES.laptopAndUp} {
    display: none;
  }

  @media screen and ${QUERIES.cellPhoneOnly} {
    &:nth-of-type(2) {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
`;
export default Header;
