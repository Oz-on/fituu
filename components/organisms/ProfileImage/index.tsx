import {useRef} from 'react';
import { AddAPhoto } from "@material-ui/icons";
import styled from "styled-components";

type Props = {
  imgUrl: string;
  inEditState: boolean;
  width: string;
  height: string;
  onChange?: Function;
};

const ProfileImage = ({imgUrl, inEditState, width, height, onChange}: Props) => {
  const fileInput = useRef(null);
  const image = useRef(null);

  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const handleChange = () => {
    const file = fileInput.current.files[0];

    // Show profile image in thumbnail
    const reader = new FileReader();
    reader.onload = ((aImg) => {
      return (e) => {
        aImg.src = e.target.result;
      };
    })(image.current);
    reader.readAsDataURL(file);

    // Send file to parent component
    onChange(file);
  }

  if (inEditState) {
    return (
      <Container 
        width={width} 
        height={height} 
        onClick={handleClick} 
        inEditState={inEditState}
      >
        <div className={"image-overlay"}>
          <AddAPhoto style={{color: "primary", fontSize: 15,}}/>
          <input 
            type="file" 
            id="profilePictureFile" 
            accept="image/*" 
            className={"hidden-input"}
            ref={fileInput}
            onChange={handleChange}
          />
        </div>
        <img src={imgUrl} className={"image"} ref={image}/>
      </Container>
    );
  }

  return (
    <Container width={width} height={height}>
      <img src={imgUrl} className={"image"}/>
    </Container>
  );
};

const Container = styled.div<{width: string; height: string, inEditState: boolean}>`
  position: relative;
  width: ${({width}) => width};
  height: ${({height}) => height};
  border-radius: 10px;
  cursor: ${({inEditState}) => inEditState ? 'pointer' : 'arrow'};

  .image {
    width: 100%;
    height: 100%;
    overlay: hidden;
    border-radius: 10px;
  }

  .image-overlay {
    display: flex;
    position: absolute;
    width: 100%;
    height: 30%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.3);
    top: calc(${({height}) => height} - 30%);
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    color: #fff;
  }
  .hidden-input {
    display: none;
  }
`;

export default ProfileImage;
