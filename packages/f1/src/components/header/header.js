import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  return (
    <>
      <BrandContainer>
        <StyledLink link="/">
          <HeaderLogo
            src="https://tarainstruments.com/wp-content/uploads/2021/06/tara_logo-1.png"
            className="header-logo no-lazyload"
          ></HeaderLogo>
          {/* <Title>
            <span>Tara</span> Instruments
          </Title> */}
        </StyledLink>
        <MobileMenu />
      </BrandContainer>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const BrandContainer = styled.div`
  box-sizing: border-box;
  color: var(--brand);
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    width: auto;
  }
`;

const HeaderLogo = styled.img`
  max-height: 60px;
  margin-top: auto;
  margin-bottom: auto;
`;

const Title = styled.div`
  //   float: right;
  //   margin-left: 2rem;
  font-size: 20px;
  span {
    font-weight: 800;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--brand);
  transition: all 0.3s ease;
  &:hover {
    color: var(--black);
  }
`;
