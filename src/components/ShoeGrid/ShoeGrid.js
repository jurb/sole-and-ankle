import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper key={shoe.slug}>
          <ShoeCard  {...shoe} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
display:flex;
flex-wrap: wrap;
gap: 32px;
justify-content: space-between;
`;

const ShoeWrapper = styled.div`
width: 275px;
flex: 1;
min-width: 275px;
`

export default ShoeGrid;
