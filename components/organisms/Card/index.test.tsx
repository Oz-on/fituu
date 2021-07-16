import CoachCard from "./";
const props = {
  avatar:
    "https://gravatar.com/avatar/1d771067547de28c013e4ecd5ef4f2e6?s=400&d=robohash&r=x",
  name: "Jan Kowalski",
  title: "Trener personalny",
  rating: 5,
  location: "Szczecin",
  categories: [
    { id: 1, name: "crossfit" },
    { id: 2, name: "odchudzanie" },
  ],
};
describe("CoachCard", () => {
  it("should render properly with a chiildren", () => {
    const { getByText } = render(<CoachCard {...props} />);
  });
});
