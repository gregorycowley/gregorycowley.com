import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Color from "color";

import useLinksList from "./useLinksList";
import Link, { LinkNav } from "components/Links";
import ExternalLink from "assets/icons/ExternalLink";

import mq from "common/styles/breakpoints";

const Column = styled.div(
  ({ theme, hide }) => css`
    display: ${hide ? "none" : "flex"};
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: ${theme.spacingM}px;
    pointer-events: all;
    ${mq("small")} {
      display: none;
    }
  `
);

const Col1 = styled(Column)`
  grid-column: 9 / span 5;
`;

const Col2 = styled(Column)`
  grid-column: 14 / span 4;
`;

// langs
const Col3 = styled(Column)`
  grid-column: 18 / span 1;
  flex-direction: row;
  justify-content: space-between;
`;

const cols = [Col1, Col2, Col3];

const LinkLang = styled(Link)(({ theme, isDarkTheme }) => {
  const opacity50 = Color(theme.white).alpha(0.5).toString();
  const opacity20 = Color(theme.white).alpha(0.2).toString();

  return css`
    color: ${isDarkTheme ? opacity50 : theme.secondary};
    padding: 3px ${theme.spacingXS}px 1px ${theme.spacingXS}px;
    text-decoration: none;
    &:first-of-type {
      margin-left: -10px;
    }
    &:last-of-type {
      margin-right: -10px;
    }
    :hover {
      color: ${theme.tonic};
      text-decoration: none;
    }
    &.active {
      /* class is dynamically added with <Link nav /> from react-router-dom */
      cursor: auto;
      color: ${isDarkTheme ? theme.white : theme.main};
      background: ${isDarkTheme ? opacity20 : theme.separator};
      opacity: 1;
      border-radius: 2px;
      :hover {
        color: ${isDarkTheme ? theme.white : theme.main};
      }
    }
  `;
});

const MenuLink = ({ link, isDarkTheme }) => {
  const LinkInternal = link.isLang ? LinkLang : LinkNav;

  return link.isExternal ? (
    <LinkNav
      href={link.to}
      target="_blank"
      title={link.title}
      isDarkTheme={isDarkTheme}
    >
      {link.label}
      <ExternalLink isDarkTheme={isDarkTheme} />
    </LinkNav>
  ) : (
    <LinkInternal
      to={link.to}
      title={link.title}
      nav
      isDarkTheme={isDarkTheme}
      exact={link.isExact}
    >
      {link.label}
    </LinkInternal>
  );
};

const NavFullList = ({ hide, isDarkTheme }) => {
  const links = useLinksList();
  // return <div></div>;
  return (
    <>
      {cols.map((Component, index) => (
        <Component key={index} hide={hide}>
          {links[index].map((link) => (
            <MenuLink key={link.to} isDarkTheme={isDarkTheme} link={link} />
          ))}
        </Component>
      ))}
    </>
  );
};

export default NavFullList;
export { LinkLang };
