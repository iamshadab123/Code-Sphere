import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const NavbarContainer = styled.div`
  height: ${({ isFullScreen }) => (isFullScreen ? "0" : "4.5rem")};
  background: #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  transition: height 0.3s;
`;

const NavbarContent = styled.button`
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 60px;
`;

const MainHeading = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: #fff;

  span {
    font-weight: 700;
  }
`;

const BackButton = styled.button`
  background: #333;
  border: 0;
  border-radius: 4px;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: background 0.3s;

  &:hover {
    background: #555;
  }
`;

const Navbar = ({ isFullScreen }) => {
  const navigate = useNavigate();
  return (
    <NavbarContainer isFullScreen={isFullScreen}>
      <BackButton
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </BackButton>
      <NavbarContent
        onClick={() => {
          navigate("/");
        }}
      >
        <Logo src={logo} alt="Logo" />
        <MainHeading>
          <span>Code</span> Sphere
        </MainHeading>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;


