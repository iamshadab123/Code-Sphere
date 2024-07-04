

import React, { useContext } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { ModalContext } from "../../context/ModalContext";

const StyledLeftComponent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100vh;
  background-color: #1e1e1e;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    height: auto;
    padding: 2rem 0;
  }
`;

const ContentContainer = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  width: 165px;
  margin-bottom: 2rem;
`;

const MainHeading = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  color: #fff;
  margin-bottom: 1rem;

  span {
    font-weight: 700;
    color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubHeading = styled.div`
  font-size: 1.5rem;
  color: #fff;
  opacity: 0.7;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const AddNewButton = styled.button`
  padding: 0.75rem 2rem;
  font-size: 1.25rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 0px 8px 2px rgba(0, 123, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  span {
    font-size: 2rem;
    font-weight: 700;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0px 0px 10px 2px rgba(0, 123, 255, 0.7);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;

    span {
      font-size: 1.5rem;
    }
  }
`;

const LeftComponent = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <StyledLeftComponent>
      <ContentContainer>
        <Logo src={logo} alt="Code Sphere Logo" />
        <MainHeading>
          {" "}
          <span>Code</span> Sphere
        </MainHeading>
        <SubHeading>Code. Compile. Debug.</SubHeading>
        <AddNewButton
          onClick={() =>
            openModal({
              show: true,
              modalType: 3,
              identifiers: {
                folderId: "",
                cardId: "",
              },
            })
          }
        >
          <span>+</span> Create New Playground
        </AddNewButton>
      </ContentContainer>
    </StyledLeftComponent>
  );
};

export default LeftComponent;
