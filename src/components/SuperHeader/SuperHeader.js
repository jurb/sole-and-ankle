import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchWrapper>
        <SearchInput />
        <HelpLink href="/help">Help</HelpLink>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={1} />
        </UnstyledButton>
      </SearchWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  padding-inline-start: 32px;
  padding-inline-end: 32px;
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
`;

const SearchWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
