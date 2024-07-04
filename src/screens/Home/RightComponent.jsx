import React, { useContext } from 'react'
import styled from 'styled-components'
import { IoTrashOutline } from 'react-icons/io5'
import { BiEditAlt } from 'react-icons/bi'
import { FcOpenedFolder } from 'react-icons/fc'
import logo from '../../assets/logo-small.png'
import { ModalContext } from '../../context/ModalContext'
import { PlaygroundContext } from '../../context/PlaygroundContext'
import { useNavigate } from 'react-router-dom'

const StyledRightComponent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  padding: 2rem;
  background-color: #f4f4f9;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    padding: 1rem 0.5rem;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
  margin-bottom: 2rem;
`

const Heading = styled.h3`
  font-size: ${props => props.size === 'small' ? "1.25rem" : "2rem"};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #333;

  span {
    font-weight: 700;
    color: #007bff;
  }
`

const AddButton = styled.div`
  font-size: 1rem;
  border-radius: 30px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background-color: #007bff;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease;

  span {
    font-size: 1.5rem;
    font-weight: 700;
  }

  &:hover {
    cursor: pointer;
    background-color: #0056b3;
  }
`

const FolderCard = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const FolderIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #007bff;
  font-size: 1.5rem;

  svg:hover {
    cursor: pointer;
    color: #0056b3;
  }
`

const PlayGroundCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 428px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }
`

const CardContainer = styled.div`
  display: flex;
  align-items: center;
`

const CardContent = styled.div`
  color: #333;

  p {
    margin: 0.2rem 0;
  }
`

const Logo = styled.img`
  width: 70px;
  margin-right: 1rem;

  @media (max-width: 425px) {
    width: 50px;
    margin-right: 0.5rem;
  }
`

const RightComponent = () => {
  const navigate = useNavigate();

  const { openModal } = useContext(ModalContext);
  const { folders, deleteFolder, deleteCard } = useContext(PlaygroundContext);

  return (
    <StyledRightComponent>
      <Header>
        <Heading size="large">
          My <span>Playground</span>
        </Heading>
        <AddButton onClick={() => openModal({
          show: true,
          modalType: 1,
          identifiers: {
            folderId: "",
            cardId: "",
          }
        })}> <span>+</span> New Folder</AddButton>
      </Header>

      {
        Object.entries(folders).map(([folderId, folder]) => (
          <FolderCard key={folderId}>
            <Header>
              <Heading size="small">
                <FcOpenedFolder /> {folder.title}
              </Heading>
              <FolderIcons>
                <IoTrashOutline onClick={() => deleteFolder(folderId)} />
                <BiEditAlt onClick={() => openModal({
                  show: true,
                  modalType: 4,
                  identifiers: {
                    folderId: folderId,
                    cardId: "",
                  }
                })} />
                <AddButton onClick={() => openModal({
                  show: true,
                  modalType: 2,
                  identifiers: {
                    folderId: folderId,
                    cardId: "",
                  }
                })}><span>+</span> New Playground</AddButton>
              </FolderIcons>
            </Header>

            <PlayGroundCards>
              {
                Object.entries(folder['playgrounds']).map(([playgroundId, playground]) => (
                  <Card key={playgroundId} onClick={() => {
                    navigate(`/playground/${folderId}/${playgroundId}`)
                  }}>
                    <CardContainer>
                      <Logo src={logo} />
                      <CardContent>
                        <p>{playground.title}</p>
                        <p>Language: {playground.language}</p>
                      </CardContent>
                    </CardContainer>
                    <FolderIcons onClick={(e) => {
                      e.stopPropagation(); //stop click propagation from child to parent
                    }}>
                      <IoTrashOutline onClick={() => deleteCard(folderId, playgroundId)} />
                      <BiEditAlt onClick={() => openModal({
                        show: true,
                        modalType: 5,
                        identifiers: {
                          folderId: folderId,
                          cardId: playgroundId,
                        }
                      })} />
                    </FolderIcons>
                  </Card>
                ))
              }
            </PlayGroundCards>
          </FolderCard>
        ))
      }
    </StyledRightComponent>
  )
}

export default RightComponent;

