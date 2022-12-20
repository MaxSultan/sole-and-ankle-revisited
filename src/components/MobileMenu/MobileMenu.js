/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DialogOverlay>
      <DialogContent>
        <StyledMenu>
          <StyledButton onClick={onDismiss}>
            <Icon id="close" />
          </StyledButton>
          <StyledNav>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </StyledNav>
          <StyledFooter>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </StyledFooter>
        </StyledMenu>
      </DialogContent>
    </DialogOverlay>
  );
};

const StyledButton = styled(UnstyledButton)`
  align-self: flex-end;
`;

const StyledMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  background-color: ${COLORS.white};
  z-index: 1;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;

  & > a {
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};

    &:first-of-type {
      color: ${COLORS.secondary};
    }
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;

  & > a {
    font-size: 14px;
    color: ${COLORS.gray[700]};
    text-decoration: none;
  }
`;

export default MobileMenu;
