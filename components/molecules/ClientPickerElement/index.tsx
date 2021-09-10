import {useState} from "react";
import styled from "styled-components";

import ProfileImage from "../../organisms/ProfileImage";

type Props = {
  firstName: string;
  lastName: string;
  profileImageUrl: string;
  onClick: Function;
};

const ClientPickerElement = ({firstName, lastName, profileImageUrl, onClick}: Props) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    onClick();
  };

  return (
    <Container onClick={handleClick} selected={selected}>
      <ProfileImage 
        imgUrl={profileImageUrl}
        inEditState={false}
        width={"50px"}
        height={"50px"}
      />
      <p className={"name"}>{firstName}</p>
      <p className={"name"}>{lastName}</p>
    </Container>
  )
};

export default ClientPickerElement;

const Container = styled.div<{selected: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  box-sizing: border-box;
  background: ${({selected}) => selected ? '#ebebeb' : '#fff'};
  box-shadow: ${({selected}) => selected ? 'none' : '0px 4px 8px 1px rgba(21, 29, 56, 0.12)'} ;
  border-radius: 8px;
  padding: 10px 10px;
  cursor: pointer;

  .name {
    font-family: ${({theme}) => theme.font.family}
    text-align: center;
    color: #272E39;
    letter-spacing: 1.5px;
    margin: 0;
  }
`;