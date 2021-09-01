import EmptyInstructorPane from ".";

it("should render EmptyInstructorPane component correctly", () => {
  const {getByText} = render(<EmptyInstructorPane />);

  expect(getByText("brak trenera")).toBeVisible();
})