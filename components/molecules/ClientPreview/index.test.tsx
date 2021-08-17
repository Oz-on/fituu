import ClientPreview from ".";

it('should render ClientPreview component correctly', () => {
  const {getByText} = render(
    <ClientPreview 
      id={1} 
      firstName={"John"} 
      lastName={"Doe"} 
      profilePhoto={{
        url: ""
      }}
      handleEditCalendar={() => {}}
      handleMessageClick={() => {}}
      handleRemoveClick={() => {}}
    />
  );

  expect(getByText("John Doe")).toBeInTheDocument();
});
