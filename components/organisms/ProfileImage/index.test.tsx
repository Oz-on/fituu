import { fireEvent } from "@testing-library/react";
import ProfileImage from "./";

it('should render ProfileImage component correctly', () => {
  const mockOnChange = jest.fn();
  const {getByTestId} = render(
    <ProfileImage
      imgUrl={"https://image-url"}
      inEditState={false}
      width={'100px'}
      height={'100px'}
      onChange={mockOnChange}
    />
  );

  expect(getByTestId("profileImage")).toBeInTheDocument();
});

it('should render ProfileImage component correctly when is in edit sate', () => {
  const mockOnChange = jest.fn();
  const {getByTestId} = render(
    <ProfileImage
      imgUrl={"https://image-url"}
      inEditState={false}
      width={'100px'}
      height={'100px'}
      onChange={mockOnChange}
    />
  );

  expect(getByTestId("profileImage")).toBeInTheDocument();
});

