import RatingStar from "./";

describe("RatingStar", () => {
  it("should render properly with a chiildren", () => {
    const { getByText } = render(<RatingStar rating={5} />);
    expect(getByText("5")).toBeInTheDocument();
  });
});
