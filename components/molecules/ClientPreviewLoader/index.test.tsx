import ClientPreviewLoader from ".";

it("should render ClientPreviewLoader component correctly", () => {
  const {getByTestId} = render(<ClientPreviewLoader />);

  expect(getByTestId("clientPreviewLoader")).toBeInTheDocument();
});
