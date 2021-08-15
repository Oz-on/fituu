import styled from "styled-components";

const EditIcon = () => {

  return (
    <EditIconContainer data-testID={'editIcon'}>
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.02831 6.16337L0.289426 9.35225C0.263936 9.46883 0.26481 9.58962 0.291983 9.70581C0.319156 9.822 0.371941 9.93065 0.446483 10.0238C0.521026 10.117 0.615441 10.1924 0.722833 10.2444C0.830225 10.2964 0.94788 10.3238 1.0672 10.3245C1.1228 10.3301 1.17883 10.3301 1.23443 10.3245L4.44276 9.58559L10.6028 3.44892L7.16498 0.0189209L1.02831 6.16337Z" fill="#F7367D"/>
      </svg>
    </EditIconContainer>
  );
};

const EditIconContainer = styled.span`
  margin-right: 5px;
`;


export default EditIcon;
