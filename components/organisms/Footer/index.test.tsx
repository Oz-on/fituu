import Footer from "./";

describe("Footer", () => {
  it("should render properly ", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("O NAS")).toBeInTheDocument();
    expect(getByText("KONTAKT")).toBeInTheDocument();
    expect(getByText("POLITYKA PRYWATNOSCI")).toBeInTheDocument();
  });
});
