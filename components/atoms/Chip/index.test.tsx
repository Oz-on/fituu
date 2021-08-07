import Chip from "./";

describe("Chip", () => {
  it("should render properly with a chiildren", () => {
    const { getByText } = render(<Chip>Chip</Chip>);
    expect(getByText("Chip")).toBeInTheDocument();
  });
});
