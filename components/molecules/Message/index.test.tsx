import Message from "./";

it("should render Message Component correctly", () => {
  const {getByText, getByTestId} = render(
    <Message 
      owner={true}
      content={"Custom Message"}
      createDate={"2021-09-02T13:13:58.516Z"}
      author={{
        id: 1,
        email: "john.doe@gmail.com",
        firstName: "John",
        lastName: "Doe",
        profilePhoto: {
          url: "",
          expiresIn: "",
        }
      }}
    />
  );

  expect(getByText("Custom Message")).toBeInTheDocument();
  expect(getByText("John")).toBeInTheDocument();
  expect(getByTestId("profileImage")).toBeInTheDocument();

});